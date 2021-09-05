<?php

namespace App\Services;

use App\Models\Otp;
use Carbon\Carbon;
use ErrorException;

class OTPService
{
    public static function verify($phone, $code)
    {
        $otp = Otp::firstWhere(['phone' => $phone, 'code' => $code]);
        if (!$otp || $otp->expiry < Carbon::now()) {
            $error = !$otp ? "Your confirmation code is invalid." : "Your confirmation code is expired. Please click on send code to get another.";
            throw new ErrorException($error);
        }
        $otp->delete();

        return ['verified' => true];
    }

    public static function create($phone)
    {
        Otp::where('phone', $phone)->delete();
        Otp::create(['phone' => $phone]);
    }
}
