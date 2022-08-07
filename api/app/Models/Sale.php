<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Symfony\Component\HttpKernel\Exception\HttpException;

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

    public static function validateBillNo($party_id, $bill_no, $date, $sale_id = null)
    {
        $sale = Sale::query();

        if ($sale_id) {
            $sale->where('id', '!=', $sale_id);
        }

        $validation = Sale::where('party_id', $party_id)->where('bill_no', $bill_no)->whereDate('date', '=', $date)->exists();

        if ($validation) {
            throw new HttpException(400, 'Same Bill # for same Party for same Date cannot be added');
        }
    }

    protected static function booted()
    {
        static::creating(function ($sale) {
            self::validateBillNo($sale->party_id, $sale->bill_no, $sale->date, $sale->id);
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
