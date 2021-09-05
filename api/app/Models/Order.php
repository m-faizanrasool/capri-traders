<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class Order extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];
    protected $hidden = ['updated_at', 'deleted_at'];
    protected $casts = [
        "subtotal" => 'integer',
        "discount" => 'integer',
        "delivery_charges" => 'integer',
        "total" => 'integer',
        "created_at" => 'datetime:Y-m-d g:i A'
    ];

    protected static function booted()
    {
        static::saving(function ($order) {
            if (empty($order->customer_id)) {
                $order->customer_id = Auth::id();
            }

            do {
                $order->hash = Str::random(11);
            } while (
                Order::where('hash', $order->hash)->exists()
            );
        });
    }

    public function items()
    {
        return $this->hasMany(OrderItem::class)->with('product');
    }

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function statuses()
    {
        return $this->belongsToMany(Status::class)->withTimestamps()->latest();
    }

    public function address()
    {
        return $this->belongsTo(Address::class);
    }

    public function customer()
    {
        return $this->belongsTo(User::class, 'customer_id');
    }
}
