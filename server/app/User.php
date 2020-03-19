<?php

namespace App;

use App\Mail\PasswordResetMail;
use App\Mail\VerifyUserMail;
use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\Request;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Laravel\Passport\HasApiTokens;
use Illuminate\Support\Facades\Mail;

class User extends Authenticatable
{
    use Notifiable,HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
         'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $with = ['profile'];
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = ['full_name'];

    public function profile(){
        return $this->hasOne(Profile::class);
    }


    /**
     * Get the user's full name.
     *
     * @return string
     */
    public function getFullNameAttribute()
    {
        return "{$this->profile->first_name} {$this->profile->last_name}";
    }

    public  function  createProfile($data){
        $first_name  = $data['firstName'];
        $last_name  = $data['lastName'];
        $middle_name  = $data['middleName'] ?? null;


        $this->profile()->create(compact('first_name','last_name','middle_name'));



    }
    public function verifyUser(){
        return $this->hasOne(VerifyUser::class);
    }

    public function generateVerifyToken(){
        $token = 252125;
        $expires_at = Carbon::now()->addMinutes();
        $data = compact('token','expires_at');
       return $this->verifyUser()->create($data);
    }
    public function hasVerified(){
        return $this->email_verified_at;
    }
    public function verifyTokenMatch($token){

        return $this->verifyUser && $this->verifyUser->token === $token;
    }
    public function doVerify(){
        $this->email_verified_at = Carbon::now();
        $this->save();
        return $this;
    }



    /**
     * password reset
     */

    public function generateResetToken(){
        $table = DB::table('password_resets');
        $token = 252125;
        $email = $this->email;
        $created_at = Carbon::now();
        $data = compact('token','email','created_at');
       $hasLink = $table->where('email',$this->email)->latest()->first();
       if ($hasLink){
          return $hasLink;
       }
        $token = $table->insert($data);

       return $token;

    }
    public function passwordResetTokenMatch($token){

       return DB::table('password_resets')
            ->where('email',$this->email)
        ->where('token',$token)->latest()->first();

    }


    public function passwordResetToken(){
        return DB::table('password_resets')
            ->where('email',$this->email)
            ->latest()->first();
    }

}
