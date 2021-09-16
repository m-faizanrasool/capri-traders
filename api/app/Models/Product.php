<?php

namespace App\Models;

use App\Helpers\ImageHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    public static $path = 'images/products/';

    protected $guarded = [];
    protected $appends = ['image_url'];
    protected $hidden = ['image', 'created_at', 'updated_at', 'deleted_at'];
    protected $casts = [
        "purchase_price" => 'integer',
        "sale_price" => 'integer',
        "discount" => 'integer',
        "unit_quantity" => 'float',
        "brand_id" => 'integer',
        "unit_id" => 'integer'
    ];

    protected static function booted()
    {
        static::deleting(function ($product) {
            Storage::delete(self::$path . $product->image);
        });

        static::updating(function ($product) {
            if ($product->isDirty('image')) {
                Storage::delete(self::$path . $product->getOriginal('image'));
            }
        });
    }

    public function getImageUrlAttribute()
    {
        $path = self::$path . $this->image;
        if ($this->image && Storage::exists($path)) {
            return asset($path);
        }
        return asset('assets/product.jpg');
    }

    public function setImageAttribute($value)
    {
        $this->attributes['image'] = ImageHelper::saveBase64($value, self::$path);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }
}
