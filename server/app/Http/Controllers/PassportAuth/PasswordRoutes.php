<?php


namespace App\Http\Controllers\PassportAuth;


class PasswordRoutes
{
    public static function method($method){
        return 'PassportAuth\ForgotPasswordController@'.$method;
    }

    // send reset token in email
    public static function  send(){
        \Route::Post('/reset-password-send',static::method('send'));
    }
    // match reset token
    public static function  matchToken(){
        \Route::post('/match-reset-token',static::method('matchToken'));
    }

    // generatePassword as reset password
    public static function  generatePassword(){
        \Route::post('/generate-password',static::method('generatePassword'));
    }
    // changePassword  auth user
    public static function  changePassword(){
        \Route::post('/change-password',static::method('changePassword'))->middleware('auth:api');
    }


    public static function passwordResetRoutes(){
        static::send();
        static::matchToken();
        static::generatePassword();
        static::changePassword();
    }


}