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
        ->get()
        ->append(['bill_no', 'debit', 'credit', 'pay_mode']);

        $balance = 0;
        foreach ($ledgers as $ledger) {
            if ($ledger->debit) {
                $balance += $ledger->debit;
            } elseif ($ledger->credit) {
                $balance -= $ledger->credit;
            }

            $ledger->balance = $balance;
        }

        return response()->json(['ledger' => $ledgers]);
    }
}
