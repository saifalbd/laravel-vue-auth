<?php


namespace App\Http\Controllers\PassportAuth;





class VerifyRoutes
{

    public static function method($method){
        return 'PassportAuth\VerificationController@'.$method;
    }
    public static function  resend(){
        \Route::Post('/verification-resend',static::method('resend'))->name('verification.resend');
    }
    public static function  verifyNotice(){
        \Route::get('/verification-show',static::method('show'))->name('verification.notice');
    }
    public static function  verify(){
        \Route::get('/verification-verify',static::method('verify'))->name('verification.verify');
    }
    public static function  verifyApi(){
        \Route::post('/verification-verify',static::method('verify'));
    }


    public static function verifyApiRoutes(){
        static::resend();
        static::verifyApi();
    }
    public static function verifyWebRoutes(){
        static::verify();
    }

//    public static function routes(){
//
//        static::verifyNotice();
//
//
//    }


}