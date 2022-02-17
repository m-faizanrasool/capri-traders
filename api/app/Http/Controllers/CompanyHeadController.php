<?php

namespace App\Http\Controllers;

use App\Models\CompanyHead;
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CompanyHead  $companyHead
     * @return \Illuminate\Http\Response
     */
    public function show(CompanyHead $companyHead)
    {
        //
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
    public function update(Request $request, CompanyHead $companyHead)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CompanyHead  $companyHead
     * @return \Illuminate\Http\Response
     */
    public function destroy(CompanyHead $companyHead)
    {
        //
    }
}
