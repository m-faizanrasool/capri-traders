<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use Carbon\Carbon;

class CartController extends Controller
{
    public function index()
    {
        $coupons = Coupon::where('expiry', '>=', Carbon::now()->toDateString())->get();
        $delivery = ["charges" => 150, "minimum_order" => 500];
        return response()->json(compact('coupons', 'delivery'));
    }
}
