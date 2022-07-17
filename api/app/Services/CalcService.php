<?php

namespace App\Services;

use ErrorException;

class CalcService
{
    public static function add($value1, $value2)
    {
        return $value1 + $value2;
    }

    public static function subtract($value1, $value2)
    {
        return $value1 - $value2;
    }
}
