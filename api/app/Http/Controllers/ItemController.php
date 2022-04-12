<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Brand;
use App\Models\Item;
use App\Models\Unit;
use App\Models\Role;

class ItemController extends Controller
{
    private function _related()
    {
        $brands = Brand::all();
        $units = Unit::all();
        $vendors = Role::firstWhere('key', 'vendor')->users()->select('id', 'name', 'email', 'phone')->get();

        return compact('brands', 'units', 'vendors');
    }

    public function create()
    {
        return response()->json($this->_related());
    }

    public function store(Request $request)
    {
        $request->validate([
            "brand_id" => 'required',
            "unit_id" => 'required',
            "name" => 'required',
            "unit_quantity" => 'required',
        ]);

        $Item = Item::create(request(['brand_id', 'unit_id', 'name', 'image', 'description', 'unit_quantity', 'purchase_price', 'sale_price', 'discount']));

        return response()->json(["message" => 'Item Added Successfully!']);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            "brand_id" => 'required',
            "unit_id" => 'required',
            "name" => 'required',
            "unit_quantity" => 'required',
        ]);

        $Item = Item::find($id);
        $Item->fill(request(['brand_id', 'unit_id', 'name', 'description', 'unit_quantity', 'purchase_price', 'sale_price', 'discount', 'is_visible']));
        if ($request->image) {
            $Item->image = $request->image;
        }

        $Item->save();

        return response()->json(["message" => 'Item Updated Successfully!']);
    }

    public function toggleVisibility(Request $request)
    {
        $item = Item::find($request->id);
        $item->is_visible = !$item->is_visible;
        $item->save();
    }

    public function destroy($id)
    {
        Item::find($id)->delete();
        return response()->json(["message" => 'Item Deleted Successfully!']);
    }
}
