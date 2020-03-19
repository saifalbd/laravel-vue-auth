<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use App\Traits\avatarUpload;

class TestController extends Controller
{

    use  avatarUpload;
    public function  index(){

//        return config('filesystems.disks.avatar');
        return view('test/fileUpload');
    }

    public function  add(Request $request){



        Validator::make($request->all(),[
            'image' => 'required|image',
        ])->validate();


        $name = $this->fileUpload($request->file('image'));
        return  $this->fileUrl($name);







    }
}
