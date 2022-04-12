<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use Illuminate\Http\Request;

class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            "is_return"=> 'required',
            "bill_no"=> 'required',
            "company_head_id"=> 'required',
            "date"=> 'required',
            "grn"=> 'required',
            "party_id"=> 'required',
            "pay_mode"=> 'required',
            "pay_status"=> 'required',
            "po_no"=> 'required',
            "remarks"=> 'required',
            "sale_items" =>'required'
        ]);

        $Sale = Sale::create(request([
            "is_return",
            "bill_no",
            "company_head_id",
            "date",
            "grn",
            "party_id",
            "pay_mode",
            "pay_status",
            "po_no",
            "remarks"
        ]));

        // create Sale Items
        foreach ($request->sale_items as $sale_item) {
            $Sale->sale_item()->create([
                "item_id" => $sale_item['id'],
                "rate" => $sale_item['rate'],
                "unit_id" => $sale_item['unit_id'],
                "unit_quantity" => $sale_item['quantity']
            ]);
        }

        return response()->json(["message" => 'Saved Successfully!']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
