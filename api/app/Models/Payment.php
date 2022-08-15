<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Payment extends Model
{
    protected $casts = ['sale_ids' => 'json'];
    protected $guarded = [];
    use HasFactory, SoftDeletes;

    public function company_head()
    {
        return $this->belongsTo(CompanyHead::class);
    }

    public function party()
    {
        return $this->belongsTo(Party::class);
    }

    public function ledger()
    {
        return $this->hasOne(Ledger::class);
    }

    protected static function booted()
    {
        static::creating(function ($payment) {
        });

        static::created(function ($payment) {
            if (!empty($payment->sale_ids)) {
                Sale::whereIn('id', $payment->sale_ids)->update(['payment_id' => $payment->id, 'pay_status' => 'DONE']);
            }

            if (!empty($payment->tax)) {
                Payment::create([
                    'parent_id' => $payment->id,
                    'company_head_id' => $payment->company_head_id,
                    'party_id' => $payment->party_id,
                    'type' => 'TAX',
                    'action' => 'TAX_DEDUCTED',
                    'amount' => $payment->tax,
                    'date' => $payment->date,
                ]);
            }


            $payment->ledger()->create([
                'company_head_id' => $payment->company_head_id,
                'party_id' => $payment->party_id,
                'payment_id' => $payment->id,
                'date' => $payment->date,
            ]);
        });

        static::updating(function ($payment) {
            $dirty_payment = $payment->getDirty();
            if (isset($dirty_payment['date'])) {
                $payment->ledger()->update(['date', $payment->date]);
            }
        });
    }
}
