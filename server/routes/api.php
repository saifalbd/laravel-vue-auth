<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
//POST     | register                                |                                   | App\Http\Controllers\Auth\RegisterController@register
Route::post('/login','PassportAuth\LoginController@login');
Route::Post('/register','PassportAuth\RegisterController@register');
Route::Post('/logout','PassportAuth\LogoutController@logout');


\App\Http\Controllers\PassportAuth\VerifyRoutes::verifyApiRoutes();
\App\Http\Controllers\PassportAuth\PasswordRoutes::passwordResetRoutes();

Route::middleware('auth:api')->group( function () {

    Route::get('/user',function (Request $request) {
        return $request->user();
    });
    Route::post('/change-user-avatar', 'Api\UserProfileController@storeProfileImage');


});
