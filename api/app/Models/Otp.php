<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Otp extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $guarded = [];

    protected static function booted()
    {
        static::creating(function ($Otp) {
//            $Otp->code = rand(1000, 9999);
            $Otp->code = 1111;
            $Otp->expiry = Carbon::now()->addMinutes(15)->toDateTimeString();
        });
    }
}
