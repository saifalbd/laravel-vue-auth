<?php

namespace App\Http\Controllers\PassportAuth;

use App\Http\Controllers\Controller;
use App\Mail\PasswordResetMail;
use App\User;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class ForgotPasswordController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    public function sendPasswordResetNotification(User $user){
        Mail::to($user->email)->send(new PasswordResetMail($user));
    }
    public function send(Request $request){
        Validator::make($request->all(),[
            'email' => 'required|email',
        ])->validate();
       $user =  User::query()->where('email',$request->email)->first();
       if ($user){

           $user->generateResetToken();
           $this->sendPasswordResetNotification($user);

           return response(true,204);
       }

       throw ValidationException::withMessages(['email'=>'email not exist are database']);

    }

    public function matchToken(Request $request){
        Validator::make($request->all(),[
            'email' => 'required|email',
            'token' => 'required|numeric',
        ])->validate();

        $user = User::query()->where('email',$request->email)->first();
        if ($user->passwordResetTokenMatch($request->token)){
            return response(['match'=>true]);
        }else{
            return response(['match'=>false]);
        }

    }

    public function generatePassword(Request $request){

        Validator::make($request->all(),[
            'token' => 'required|numeric',
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],

        ])->validate();


        $user = User::query()->where('email',$request->email)->first();
        $user->password = Hash::make($request->password);
        $user->save();
        return response();

    }

    public function changePassword(Request $request){
        Validator::make($request->all(),[
            'userName' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'oldPassword'=>['required', 'string', 'min:8'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],

        ])->validate();
        $user = User::query()->where('email',$request->userName)->first();
        if ($user->password === Hash::make($request->password)){
            $user->password = Hash::make($request->password);
            $user->save();

            return response()->json();
        }else {

            throw ValidationException::withMessages(['password'=>'password miss match']);


        }


    }


}
