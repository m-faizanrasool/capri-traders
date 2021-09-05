<?php

namespace App\Services;

use Brick\PhoneNumber\PhoneNumber;
use Brick\PhoneNumber\PhoneNumberFormat;
use Brick\PhoneNumber\PhoneNumberParseException;

class PhoneNumberService
{
    public static function getFormattedPhone($phone, $country_code = 'PK')
    {
        try {
            $number = PhoneNumber::parse($phone, $country_code);
            return $number->format(PhoneNumberFormat::E164);
        } catch (PhoneNumberParseException $e) {
            return null;
        }
    }
}
