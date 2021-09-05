<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function index()
    {
        $brands = Brand::all();
        return response()->json(compact('brands'));
    }

    public function store(Request $request)
    {
        $request->validate([
            "name" => 'required|unique:brands'
        ]);

        $brand = Brand::create(request(['name']));
        return response()->json(["message" => 'Brand Added Successfully!', "brand" => $brand]);
    }

    public function show($id)
    {
        $brand = Brand::find($id);
        return response()->json(compact('brand'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            "name" => 'required|unique:brands,name,' . $id
        ]);

        $brand = Brand::find($id);
        $brand->fill(request(['name']));
        $brand->save();

        return response()->json(["message" => 'Brand Updated Successfully!']);
    }

    public function destroy($id)
    {
        try {
            Brand::find($id)->delete();
            return response()->json(["message" => 'Brand Deleted Successfully!']);
        } catch (QueryException $e) {
            return response()->json(["message" => 'Brand cannot be deleted because we have a product associated with this.'], 500);
        }
    }
}
