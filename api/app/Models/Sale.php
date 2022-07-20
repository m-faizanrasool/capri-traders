<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sale extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    public function getSubTotalAttribute()
    {
        return $this->sale_items->sum('total');
    }

    public function getTotalAttribute()
    {
        if ($this->discount) {
            return $this->sub_total - $this->discount;
        }
        return $this->sub_total;
    }

    public function sale_items()
    {
        return $this->hasMany(SaleItem::class)->with('item');
    }

    public function ledger()
    {
        return $this->hasOne(Ledger::class);
    }

    public function company_head()
    {
        return $this->belongsTo(CompanyHead::class);
    }

    public function party()
    {
        return $this->belongsTo(Party::class);
    }

    protected static function booted()
    {
        static::creating(function ($sale) {
        });

        static::created(function ($sale) {
            $sale->ledger()->create([
                'company_head_id' => $sale->company_head_id,
                'party_id' => $sale->party_id,
                'sale_id' => $sale->id,
                'date' => $sale->date,
            ]);
        });

        static::updating(function ($sale) {
            $dirty_sale = $sale->getDirty();
            if (isset($dirty_sale['date'])) {
                $sale->ledger()->update(['date', $sale->date]);
            }
        });
    }
}
