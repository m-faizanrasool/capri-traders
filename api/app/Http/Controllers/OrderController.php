<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\Status;
use App\Models\User;
use App\Services\PushNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Auth::user()->orders;
        return response()->json(compact('orders'));
    }

    public function getByStatus($status)
    {
        $orders = Order::with(['status', 'address', 'customer'])->whereHas('status', function ($q) use ($status) {
            $q->where('key', $status);
        })->get();
        return response()->json(compact('orders'));
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $request->validate([
            "cart.order.address_id" => 'required',
            "cart.order.subtotal" => 'required',
            "cart.order.total" => 'required',
            "cart.order.total_products" => 'required',
            "cart.order.total_quantity" => 'required',
            "cart.product.*.id" => 'required',
            "cart.product.*.quantity" => 'required',
            "cart.product.*.total_price" => 'required',
            "cart.product.*.total_discount" => 'required',
        ]);

        $order = Order::create($request->cart['order']);

        foreach ($request->cart['products'] as $product) {
            $item = Arr::only($product, ['quantity', 'total_discount', 'total_price']);
            $item['product_id'] = $product['id'];
            $order->items()->create($item);
        }
        $this->setStatus($order->id, 'pending');

        return response()->json(["message" => 'Your order is being processed.']);
    }

    public function updateStatus(Request $request, PushNotification $pushNotification)
    {
        $order_id = $request->order_id;

        $User = User::whereHas('orders', function ($q) use ($order_id) {
            $q->where('id', $order_id);
        })->first();

        $reason = null;
        $type = 'status-update';
        $variables = ['NAME' => $User->name, 'STATUS' => $request->status];

        if ($request->status == 'cancelled' && $request->reason) {
            $reason = $request->reason;
            $type = 'cancel-order';
            $variables['REASON'] = $reason;
        }

        $pushNotification->notifyUser($User->id, $type, $variables);

        $this->setStatus($order_id, $request->status, $reason);

        return response()->json(["message" => 'Status updated Successfully.']);
    }

    private function setStatus($id, $key, $reason = null)
    {
        $status = Status::firstWhere('key', $key);
        $order = Order::find($id);
        $order->status_id = $status->id;
        if ($reason) {
            $order->cancel_reason = $reason;
        }
        $order->save();
        $order->statuses()->attach($status->id);
    }

    public function show($id)
    {
        $order = Order::with(['status', 'customer', 'address', 'items'])->where('id', $id)->first();
        $riders = User::whereHas('role', function ($q) {
            $q->where('key', 'rider');
        })->get();
        $products_vendors = Product::with('vendors')->get();
        return response()->json(compact('order', 'products_vendors', 'riders'));
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
