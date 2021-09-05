<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use App\Helpers\ImageHelper;

class Banner extends Model
{
    use HasFactory;

    static $path = 'images/banners/';

    protected $guarded = [];
    protected $appends = ['image_url'];
    protected $hidden = ['image', 'created_at', 'updated_at'];

     protected static function booted()
    {
        static::deleting(function ($banner) {
            Storage::delete(self::$path . $banner->image);
        });

        static::updating(function ($banner) {
            if ($banner->isDirty('image')) {
                Storage::delete(self::$path . $banner->getOriginal('image'));
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
}
