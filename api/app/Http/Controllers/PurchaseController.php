<?php

namespace App\Http\Controllers;

use App\Models\Purchase;
use App\Models\PurchaseItem;
use Illuminate\Http\Request;

class PurchaseController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $purchases = Purchase::with(['purchase_items', 'company_head', 'party'])->get();

        return response()->json(compact('purchases'));
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
            "object_items" =>'required'
        ]);

        $purchase = Purchase::create(request([
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

        // create purchase Items
        foreach ($request->object_items as $purchase_item) {
            $purchase->purchase_items()->create([
                "item_id" => $purchase_item['item']['id'],
                "rate" => $purchase_item['rate'],
                "unit_id" => $purchase_item['item']['unit_id'],
                "unit_quantity" => $purchase_item['unit_quantity'],
                "total" => $purchase_item['rate'] * $purchase_item['unit_quantity'],
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
        $purchase = Purchase::with('purchase_items')->find($id);

        return response()->json(compact('purchase'));
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
            "object_items" =>'required'
        ]);

        $purchase = Purchase::find($id);
        $purchase->update(request([
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

        // create purchase Items
        foreach ($request->object_items as $purchase_item) {
            $purchase_item_data = [
                "item_id" => $purchase_item['item']['id'],
                "rate" => $purchase_item['rate'],
                "unit_id" => $purchase_item['item']['unit_id'],
                "unit_quantity" => $purchase_item['unit_quantity'],
                "total" => $purchase_item['rate'] * $purchase_item['unit_quantity'],
            ];
            if (isset($purchase_item['id'])) {
                $purchase_item = PurchaseItem::firstWhere('id', $purchase_item['id']);
                $purchase_item->update($purchase_item_data);
            } else {
                $purchase->purchase_items()->create($purchase_item_data);
            }
        }

        return response()->json(["message" => 'Updated Successfully!']);
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
