<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SharedController extends Controller
{
    public function appHome()
    {
        $brands = Brand::orderBy('name')->get();

        return response()->json(compact('categories', 'brands'));
    }

    public function products(Request $request)
    {
        $User = $request->user('sanctum');
        $products = Product::with(['brand', 'unit']);
        if (!$User || $User->role->key == 'customer') {
            $products = $products->has('vendors')->where('is_visible', 1);
        }

        $products->where(function ($q) use ($request) {
            if ($request->categories) {
                $q->whereIn(explode(",", $request->categories));
            }

            if ($request->brands) {
                $q->orWhereIn('brand_id', explode(",", $request->brands));
            }
        });

        if ($request->search) {
            $search = $request->search;
            $products->where(function ($q) use ($search) {
                $q->where('name', 'LIKE', '%' . $search . '%');
                $q->orWhereHas('brand', function ($q) use ($search) {
                    $q->where('name', 'LIKE', '%' . $search . '%');
                });
            });
        }

        $total = $products->count();
        $items_per_page = $request->items_per_page ?? 3;
        $products = $products->offset($request->page_index * $items_per_page)->limit($items_per_page)->orderByRaw('-`order` DESC')->get();
        if ($User && $User->role->key == 'admin') {
            $products->append('vendor_ids');
        }

        return response()->json(compact('products', 'total'));
    }
}
