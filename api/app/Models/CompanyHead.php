<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CompanyHead extends Model
{
    protected $fillable = ['name'];
    protected $hidden = ['created_at', 'updated_at'];

    use HasFactory, SoftDeletes;

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
