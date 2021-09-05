<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return response()->json(compact('categories'));
    }

    public function store(Request $request)
    {
        $request->validate([
            "name" => 'required|unique:categories'
        ]);

        $category = Category::create(request(['name']));
        return response()->json(["message" => 'Category Added Successfully!', "category" => $category]);
    }

    public function show($id)
    {
        $category = Category::find($id);
        return response()->json(compact('category'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            "name" => 'required|unique:categories,name,' . $id
        ]);

        $category = Category::find($id);
        $category->fill(request(['name']));
        $category->save();

        return response()->json(["message" => 'Category Updated Successfully!']);
    }

    public function destroy($id)
    {
        try {
            Category::find($id)->delete();
            return response()->json(["message" => 'Category Deleted Successfully!']);
        } catch (QueryException $e) {
            return response()->json(["message" => 'Category cannot be deleted because we have a product associated with this.'], 500);
        }
    }
}
