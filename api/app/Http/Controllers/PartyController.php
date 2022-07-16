<?php

namespace App\Http\Controllers;

use App\Models\Party;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class PartyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $parties = Party::all();

        return response()->json(compact('parties'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            "name" => 'required|unique:parties'
        ]);

        $party = Party::create(request(['name']));
        return response()->json(["message" => 'Party Added Successfully!', "party" => $party]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Party  $party
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $party = Party::find($id);
        return response()->json(compact('party'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Party  $party
     * @return \Illuminate\Http\Response
     */
    public function edit(Party $party)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Party  $party
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            "name" => 'required|unique:parties,name,' . $id
        ]);

        $party = Party::find($id);
        $party->fill(request(['name']));
        $party->save();

        return response()->json(["message" => 'Party Updated Successfully!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Party  $party
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            Party::find($id)->delete();
            return response()->json(["message" => 'Party Deleted Successfully!']);
        } catch (QueryException $e) {
            return response()->json(["message" => 'Party cannot be deleted because we have a ledger associated with this.'], 500);
        }
    }
}
