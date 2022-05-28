<?php

namespace App\Models;

use App\Services\CalcService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PurchaseItem extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    public function getMethodsAttribute()
    {
        $methods = ['primary' => 'add', 'alternative' => 'subtract'];
        if ($this->purchase->is_return) {
            $methods['primary'] = 'subtract';
            $methods['alternative'] = 'add';
        }
        return $methods;
    }

    public function purchase()
    {
        return $this->belongsTo(Purchase::class);
    }

    public function item()
    {
        return $this->belongsTo(Item::class);
    }

    protected static function booted()
    {
        static::creating(function ($purchase_item) {
            $item = $purchase_item->item;
            $item->unit_quantity = CalcService::{$purchase_item->methods['primary']}($item->unit_quantity, $purchase_item->unit_quantity) ;
            $item->save();
        });

        static::updating(function ($purchase_item) {
            $dirtyPurchaseItem = $purchase_item->getDirty();
            $OriginalPurchaseItem = $purchase_item->getOriginal();
            $item = $purchase_item->item;

            if (isset($dirtyPurchaseItem['unit_quantity'])) {
                $item->unit_quantity = CalcService::{$purchase_item->methods['alternative']}($item->unit_quantity, $OriginalPurchaseItem['unit_quantity']);
            }

            $item->unit_quantity = CalcService::{$purchase_item->methods['primary']}($item->unit_quantity, $purchase_item->unit_quantity);

            $item->save();
        });
    }
}
