<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use Illuminate\Http\Request;

class CouponController extends Controller
{
    public function index()
    {
        $coupons = Coupon::all();
        return response()->json(compact('coupons'));
    }

    public function store(Request $request)
    {
        $request->validate([
            "code" => 'required|unique:coupons',
            "discount" => 'required',
            "minimum_order" => 'required',
            "expiry" => 'required|date_format:Y-m-d'
        ]);

        $coupon = Coupon::create(request(['code', 'discount', 'minimum_order', 'expiry']));
        return response()->json(["message" => 'Coupon Added Successfully!', "coupon" => $coupon]);
    }

    public function show($id)
    {
        $coupon = Coupon::find($id);
        return response()->json(compact('coupon'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            "code" => 'required|unique:coupons,code,' . $id,
            "discount" => 'required',
            "minimum_order" => 'required',
            "expiry" => 'required|date_format:Y-m-d'
        ]);

        $coupon = Coupon::find($id);
        $coupon->fill(request(['code', 'discount', 'minimum_order', 'expiry']));
        $coupon->save();

        return response()->json(["message" => 'Coupon Updated Successfully!']);
    }

    public function destroy($id)
    {
        Coupon::find($id)->delete();
        return response()->json(["message" => 'Coupon Deleted Successfully!']);
    }
}
