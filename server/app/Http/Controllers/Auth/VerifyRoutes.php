<?php


namespace App\Http\Controllers\Auth;





class VerifyRoutes
{

    public static function method($method){
        return 'Auth\VerificationController@'.$method;
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

    public static function routes(){
        static::resend();
        static::verifyNotice();

        static::verify();
    }


}