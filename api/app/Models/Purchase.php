<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Purchase extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    public function purchase_items()
    {
        return $this->hasMany(PurchaseItem::class)->with('item');
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
        static::creating(function ($purchase) {
        });

        static::created(function ($purchase) {
            $purchase->ledger()->create([
                'company_head_id' => $purchase->company_head_id,
                'party_id' => $purchase->party_id,
                'purchase_id' => $purchase->id,
                'date' => $purchase->date,
            ]);
        });

        static::updating(function ($purchase) {
            $dirty_purchase = $purchase->getDirty();
            if (isset($dirty_purchase['date'])) {
                $purchase->ledger()->update(['date', $purchase->date]);
            }
        });
    }
}
