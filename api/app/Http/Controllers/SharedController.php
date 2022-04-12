<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SharedController extends Controller
{
    public function items(Request $request)
    {
        $User = $request->user('sanctum');
        $items = Item::with(['brand', 'unit']);

        $items->where(function ($q) use ($request) {
            if ($request->brands) {
                $q->orWhereIn('brand_id', explode(",", $request->brands));
            }
        });

        if ($request->search) {
            $search = $request->search;
            $items->where(function ($q) use ($search) {
                $q->where('name', 'LIKE', '%' . $search . '%');
                $q->orWhereHas('brand', function ($q) use ($search) {
                    $q->where('name', 'LIKE', '%' . $search . '%');
                });
            });
        }

        $total = $items->count();
        $items_per_page = $request->items_per_page ?? 3;
        $items = $items->offset($request->page_index * $items_per_page)->limit($items_per_page)->orderByRaw('-`created_at` DESC')->get();


        return response()->json(compact('items', 'total'));
    }

    public function allItems()
    {
        $items = Item::with(['brand', 'unit'])->get();
        return response()->json(compact('items'));
    }
}
