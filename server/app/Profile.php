<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\avatarUpload;


class Profile extends Model
{
    use  avatarUpload;

    protected $fillable = [
        'first_name','last_name','middle_name','avatar'
    ];


//    protected $appends = ['avatar'];

    /**
     * Get the user's profile Avatar url.
     *
     * @return string
     */
    public function getAvatarAttribute($value)
    {
        if ($value){
            return $this->fileUrl($value);
        }else{
           return $this->defaultAvatarUrl();
        }

    }



}
