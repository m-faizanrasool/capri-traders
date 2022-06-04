<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Ledger extends Model
{
    use HasFactory, SoftDeletes;

    protected $dates = ['date'];

    protected $appends = ['date_formatted'];

    protected $guarded = [];

    public function getDateFormattedAttribute()
    {
        return $this->date->toDateString();
    }

    public function getBillNoAttribute()
    {
        if ($this->sale_id) {
            return $this->sale->bill_no;
        }
        if ($this->purchase_id) {
            return $this->purchase->bill_no;
        }
    }

    public function getDebitAttribute()
    {
        if ($this->sale_id) {
            if (!$this->sale->is_return) {
                return $this->sale->total;
            }
        }

        if ($this->purchase_id) {
            if ($this->purchase->is_retrun) {
                return $this->purchase->total;
            }
        }

        return null;
    }

    public function getCreditAttribute()
    {
        if ($this->sale_id) {
            if ($this->sale->is_return) {
                return $this->sale->total;
            }
        }

        if ($this->purchase_id) {
            if (!$this->purchase->is_retrun) {
                return $this->purchase->total;
            }
        }

        return null;
    }

    public function getPayModeAttribute()
    {
        if ($this->sale_id) {
            return $this->sale->pay_mode;
        }
        if ($this->purchase_id) {
            return $this->purchase->pay_mode;
        }
    }

    public function sale()
    {
        return $this->belongsTo(Sale::class);
    }

    public function purchase()
    {
        return $this->belongsTo(Purchase::class);
    }
}
