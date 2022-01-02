<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use App\Models\SaleItem;
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
            "company_head"=> 'required',
            "date"=> 'required',
            "grn"=> 'required',
            "party_name"=> 'required',
            "pay_mode"=> 'required',
            "pay_status"=> 'required',
            "po_no"=> 'required',
            "remarks"=> 'required',
            "sale_items" =>'required'
        ]);

        $Sale = Sale::create(request([
            "is_return",
            "bill_no",
            "company_head",
            "date",
            "grn",
            "party_name",
            "pay_mode",
            "pay_status",
            "po_no",
            "remarks"
        ]));

        // create Sale Items
        foreach ($request->sale_tems as $SaleItem) {
            $Sale->sale_item()->create([
                "item_id" => $SaleItem->item->id,
                "rate" => $SaleItem->item->rate,
                "unit_id" => $SaleItem->item->unit->id,
                "unit_quantity" => $SaleItem->item->quantity
            ]);
        }

        return "here";
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
