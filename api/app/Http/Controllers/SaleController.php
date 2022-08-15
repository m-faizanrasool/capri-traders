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
        $sales = Sale::with(['sale_items', 'company_head', 'party'])->get();

        return response()->json(compact('sales'));
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
            "party_id"=> 'required',
            "pay_mode"=> 'required',
            "pay_status"=> 'required',
            "object_items" =>'required'
        ]);

        $sale = Sale::create(request([
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
        foreach ($request->object_items as $sale_item) {
            $sale->sale_items()->create([
                "item_id" => $sale_item['item']['id'],
                "rate" => $sale_item['rate'],
                "unit_id" => $sale_item['item']['unit_id'],
                "unit_quantity" => $sale_item['unit_quantity'],
                "total" => $sale_item['rate'] * $sale_item['unit_quantity'],
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
        $sale = Sale::with('sale_items')->find($id);

        return response()->json(compact('sale'));
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
            "party_id"=> 'required',
            "pay_mode"=> 'required',
            "pay_status"=> 'required',
            "object_items" =>'required'
        ]);

        $sale = Sale::find($id);
        $sale->update(request([
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
        foreach ($request->object_items as $sale_item) {
            $sale_item_data = [
                "item_id" => $sale_item['item']['id'],
                "rate" => $sale_item['rate'],
                "unit_id" => $sale_item['item']['unit_id'],
                "unit_quantity" => $sale_item['unit_quantity'],
                "total" => $sale_item['rate'] * $sale_item['unit_quantity'],
            ];

            if (isset($sale_item['id'])) {
                $sale_item = SaleItem::firstWhere('id', $sale_item['id']);
                $sale_item->update($sale_item_data);
            } else {
                $sale->sale_items()->create($sale_item_data);
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

    public function search(Request $request)
    {
        $sales = Sale::query()->with(['company_head', 'party']);

        if ($request->bill_no) {
            $sales = $sales->where('bill_no', $request->bill_no);
        }
        if ($request->company_head_id) {
            $sales = $sales->where('company_head_id', $request->company_head_id);
        }
        if ($request->party_id) {
            $sales =  $sales->where('party_id', $request->party_id);
        }
        if ($request->pay_status) {
            $sales =  $sales->where('pay_status', $request->pay_status);
        }


        $sales = $sales->get()->append(['sub_total', 'total']);

        return $sales;

        return response()->json(compact('sale'));
    }
}
