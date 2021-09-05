<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Services\OTPService;
use App\Http\Middleware\PhoneFormat;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(PhoneFormat::class)->prefix('auth')->group(function () {
    Route::post('login', 'App\Http\Controllers\AuthController@login');
    Route::post('register', 'App\Http\Controllers\AuthController@register');
});
Route::middleware(PhoneFormat::class)->prefix('otp')->group(function () {
    Route::post('verify', function (Request $request) {
        return OTPService::verify($request->phone, $request->code);
    });

    Route::post('create', function (Request $request) {
        $request->validate([
            "phone" => 'required'
        ]);
        OTPService::create($request->phone);
    });
});
Route::prefix('app')->group(function () {
    Route::get('home', 'App\Http\Controllers\SharedController@appHome');
});

Route::get('filtered-products', 'App\Http\Controllers\SharedController@products');
Route::get('cart', 'App\Http\Controllers\CartController@index');

Route::middleware(PhoneFormat::class)->post('users/reset-password', 'App\Http\Controllers\UserController@resetPassword');

Route::middleware(['auth:sanctum', PhoneFormat::class])->group(function () {
    Route::apiResources([
        'banners' => 'App\Http\Controllers\BannerController',
        'brands' => 'App\Http\Controllers\BrandController',
        'categories' => 'App\Http\Controllers\CategoryController',
        'addresses' => 'App\Http\Controllers\AddressController',
        'coupons' => 'App\Http\Controllers\CouponController'
    ]);

    Route::get('authenticated-user', 'App\Http\Controllers\UserController@authenticated');
    Route::patch('users', 'App\Http\Controllers\UserController@update');

    Route::prefix('orders/status')->group(function () {
        Route::post('', 'App\Http\Controllers\OrderController@updateStatus');
        Route::get('{status}', 'App\Http\Controllers\OrderController@getByStatus');
    });

    Route::post('products/toggle-visibility', 'App\Http\Controllers\ProductController@toggleVisibility');

    Route::resources([
        'products' => 'App\Http\Controllers\ProductController',
        'users' => 'App\Http\Controllers\UserController',
        'orders' => 'App\Http\Controllers\OrderController',
    ]);
});
