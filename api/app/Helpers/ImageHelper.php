<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Storage;

class ImageHelper
{
    public static function saveBase64($base_64, $path, $name = '', $extension = 'jpg')
    {
        if ($name == '') {
            $name = rand(1111, 9999) . time();
        }
        $name .= '.' . $extension;

        $base_64 = substr($base_64, strpos($base_64, ',') + 1);
        Storage::put($path . $name, base64_decode($base_64));

        return $name;
    }
}
