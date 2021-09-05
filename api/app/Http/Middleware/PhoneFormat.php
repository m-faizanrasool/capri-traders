<?php

namespace App\Http\Middleware;

use App\Services\PhoneNumberService;
use Closure;
use Illuminate\Http\Request;

class PhoneFormat
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->phone) {
            $request->merge([
                'phone' => PhoneNumberService::getFormattedPhone($request->phone)
            ]);
        }
        return $next($request);
    }
}
