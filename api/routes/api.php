<?php

use App\Http\Controllers\LedgerController;
use App\Http\Controllers\SaleController;
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

Route::get('filtered-items', 'App\Http\Controllers\SharedController@items');
Route::get('all-items', 'App\Http\Controllers\SharedController@allItems');

Route::middleware(PhoneFormat::class)->post('users/reset-password', 'App\Http\Controllers\UserController@resetPassword');

Route::middleware(['auth:sanctum', PhoneFormat::class])->group(function () {
    Route::apiResources([
        'brands' => 'App\Http\Controllers\BrandController',
    ]);

    Route::get('authenticated-user', 'App\Http\Controllers\UserController@authenticated');
    Route::patch('users', 'App\Http\Controllers\UserController@update');

    Route::post('items/toggle-visibility', 'App\Http\Controllers\ItemController@toggleVisibility');

    Route::get('ledger', [LedgerController::class, 'get_ledger']);
    Route::get('search_bills', [SaleController::class, 'search']);

    Route::resources([
        'items' => 'App\Http\Controllers\ItemController',
        'users' => 'App\Http\Controllers\UserController',
        'sales' =>  'App\Http\Controllers\SaleController',
        'purchases' =>  'App\Http\Controllers\PurchaseController',
        'company-heads' =>  'App\Http\Controllers\CompanyHeadController',
        'parties' =>  'App\Http\Controllers\PartyController',
        'payments' =>  'App\Http\Controllers\PaymentController',
    ]);
});
