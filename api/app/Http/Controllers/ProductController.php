<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Unit;
use App\Models\Role;

class ProductController extends Controller
{
    private function _related()
    {
        $brands = Brand::all();
        $categories = Category::all();
        $units = Unit::all();
        $vendors = Role::firstWhere('key', 'vendor')->users()->select('id', 'name', 'email', 'phone')->get();

        return compact('brands', 'categories', 'units', 'vendors');
    }

    public function create()
    {
        return response()->json($this->_related());
    }

    public function store(Request $request)
    {
        $request->validate([
            "category_id" => 'required',
            "brand_id" => 'required',
            "unit_id" => 'required',
            "name" => 'required',
            "unit_quantity" => 'required',
            "price" => 'required'
        ]);

        $Product = Product::create(request(['category_id', 'brand_id', 'unit_id', 'name', 'image', 'description', 'unit_quantity', 'price', 'discount','order']));
        $Product->vendors()->sync($request->vendor_ids);
        return response()->json(["message" => 'Product Added Successfully!']);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            "category_id" => 'required',
            "brand_id" => 'required',
            "unit_id" => 'required',
            "name" => 'required',
            "unit_quantity" => 'required',
            "price" => 'required'
        ]);

        $Product = Product::find($id);
        $Product->fill(request(['category_id', 'brand_id', 'unit_id', 'name', 'description', 'unit_quantity', 'price', 'discount', 'order', 'is_visible']));
        if ($request->image) {
            $Product->image = $request->image;
        }

        $Product->save();
        $Product->vendors()->sync($request->vendor_ids);

        return response()->json(["message" => 'Product Updated Successfully!']);
    }

    public function toggleVisibility(Request $request)
    {
        $product = Product::find($request->id);
        $product->is_visible = !$product->is_visible;
        $product->save();
    }

    public function destroy($id)
    {
        Product::find($id)->delete();
        return response()->json(["message" => 'Product Deleted Successfully!']);
    }
}
