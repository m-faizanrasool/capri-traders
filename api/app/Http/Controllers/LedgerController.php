<?php

namespace App\Http\Controllers;

use App\Models\Ledger;
use Illuminate\Http\Request;

class LedgerController extends Controller
{
    public function get_ledger(Request $request)
    {
        $ledgers = Ledger::with(['sale', 'purchase'])
        ->where('company_head_id', $request->company_head_id)
        ->where('party_id', $request->party_id)
        ->whereDate('date', '>=', $request->date_from)
        ->whereDate('date', '<=', $request->date_to)
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
            $ledger->balance = $balance;
        }

        return response()->json(['ledger' => $ledgers]);
    }
}
