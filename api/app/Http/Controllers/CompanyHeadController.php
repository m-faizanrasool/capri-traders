<?php

namespace App\Http\Controllers;

use App\Models\CompanyHead;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class CompanyHeadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $company_heads = CompanyHead::all();

        return response()->json(compact('company_heads'));
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
            "name" => 'required|unique:company_heads'
        ]);

        $company_head = CompanyHead::create(request(['name']));
        return response()->json(["message" => 'Company Head Added Successfully!', "company_head" => $company_head]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CompanyHead  $companyHead
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $company_head = CompanyHead::find($id);
        return response()->json(compact('company_head'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CompanyHead  $companyHead
     * @return \Illuminate\Http\Response
     */
    public function edit(CompanyHead $companyHead)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CompanyHead  $companyHead
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            "name" => 'required|unique:company_heads,name,' . $id
        ]);

        $company_head = CompanyHead::find($id);
        $company_head->fill(request(['name']));
        $company_head->save();

        return response()->json(["message" => 'Company Head Updated Successfully!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CompanyHead  $companyHead
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            CompanyHead::find($id)->delete();
            return response()->json(["message" => 'Company Head Deleted Successfully!']);
        } catch (QueryException $e) {
            return response()->json(["message" => 'Company Head cannot be deleted because we have a ledger associated with this.'], 500);
        }
    }
}
