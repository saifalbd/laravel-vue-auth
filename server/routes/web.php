<?php

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('cache-all',function (){
    Artisan::call('config:cache');
    return 'config:cache  done';
});
Route::get('/clear-all', function() {
    return env('APP_URL');
    Artisan::call('cache:clear');
    Artisan::call('view:clear');
    Artisan::call('config:clear');
    Artisan::call('route:clear');
    return 'cache:clear route clear view clear confic clear done';
});

Route::get('/clear-cache', function() {
    $exitCode = Artisan::call('cache:clear');
    return 'cache:clear done';
});
Route::get('/clear-view', function() {
    $exitCode = Artisan::call('view:clear');
    return 'view:clear done';
});
Route::get('/clear-config', function() {
    $exitCode = Artisan::call('config:clear');
    return 'config:clear done';
});

Route::get('/clear-route', function() {
    $exitCode = Artisan::call('route:clear');
    return 'route:clear done';
});


    Route::get('/upload', 'TestController@index');
Route::post('/add-file', 'TestController@add')->name('fileUpload');




//mailcatcher
//Auth::routes();

\App\Http\Controllers\PassportAuth\VerifyRoutes::verifyWebRoutes();

Route::get('/{any?}', function () {

    return view('vue');

})->where('any', '.*');
