<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyHead extends Model
{
    use HasFactory;

    public function sales()
    {
        return $this->hasMany(Sale::class);
    }
    public function purchases()
    {
        return $this->hasMany(Purchase::class);
    }

    public function ledger()
    {
        $sales = $this->sales();
        $purchases = $this->purcahses();
        $ledger = $sales->merge($purchases);
        dd($ledger);
    }
}
