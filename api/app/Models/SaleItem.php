<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SaleItem extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    public function sale()
    {
        return $this->belongsTo(Sale::class);
    }

    public function item()
    {
        return $this->belongsTo(Item::class);
    }

    protected static function booted()
    {
        static::creating(function ($sale_item) {
            $item = $sale_item->item;
            $item->unit_quantity -= $sale_item->unit_quantity;
            $item->save();
        });

        static::updating(function ($sale_item) {
            $dirtySaleItem = $sale_item->getDirty();
            $OriginalSaleItem = $sale_item->getOriginal();
            $item = $sale_item->item;

            if (isset($dirtySaleItem['unit_quantity'])) {
                $item->unit_quantity += $OriginalSaleItem['unit_quantity'];
            }

            $item->unit_quantity -= $sale_item->unit_quantity;
            $item->save();
        });
    }
}
