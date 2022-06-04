<?php

use App\Models\Ledger;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $ledgers = Ledger::with(['sale', 'purchase'])
        ->where('company_head_id', 1)
        ->where('party_id', 1)
        ->orderby('date')
        ->get();

    $balance = 0;
    foreach ($ledgers as $ledger) {
        if ($ledger->sale_id) {
            if (!$ledger->sale->is_return) {
                $balance += $ledger->sale->total;
            } else {
                $balance -= $ledger->sale->total;
            }
        } elseif ($ledger->purchase_id) {
            if (!$ledger->purchase->is_return) {
                $balance -= $ledger->purchase->total;
            } else {
                $balance += $ledger->purchase->total;
            }
        } elseif ($ledger->payment_id) {
        }
    }
    dd($ledgers->toArray(), $balance);
    return view('welcome');
});
