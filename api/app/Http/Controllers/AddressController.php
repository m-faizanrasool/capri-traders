<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AddressController extends Controller
{
    public function index()
    {
        $addresses = Auth::user()->addresses()->get();
        return response()->json(compact('addresses'));
    }

    public function store(Request $request)
    {
        $request->validate([
            "address" => 'required',
            "label" => 'required'
        ]);

        $address = Auth::user()->addresses()->create(request(['address', 'label', 'latitude', 'longitude', 'rider_notes']));
        return response()->json(["message" => 'Address Added Successfully!', "address" => $address]);
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            "address" => 'required',
            "label" => 'required'
        ]);

        $address = Address::find($id);
        $address->fill(request(['address', 'label', 'latitude', 'longitude', 'rider_notes']));
        $address->save();

        return response()->json(["message" => 'Address Updated Successfully!']);

    }

    public function destroy($id)
    {
        Address::find($id)->delete();
        return response()->json(["message" => 'Address Deleted Successfully!']);
    }
}
