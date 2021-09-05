<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    public function index()
    {
        $banners = Banner::all();
        return response()->json(compact('banners'));
    }

    public function store(Request $request)
    {
        $request->validate([
            "image" => 'required'
        ]);

        $banner = Banner::create(request(['image']));
        return response()->json(["message" => 'Banner Added Successfully!', "banner" => $banner]);
    }

    public function show($id)
    {
        $banner = Banner::find($id);
        return response()->json(compact('banner'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            "image" => 'required'
        ]);

        $banner = Banner::find($id);
        $banner->fill(request(['image']));
        $banner->save();

        return response()->json(["message" => 'Banner Updated Successfully!']);
    }

    public function destroy($id)
    {
        Banner::find($id)->delete();
        return response()->json(["message" => 'Banner Deleted Successfully!']);
    }
}
