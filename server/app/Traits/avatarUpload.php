<?php

namespace App\Traits;
use Illuminate\Http\File;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait avatarUpload
{
    protected function  diskName(){
        return 'avatar';
    }
    protected  function  storage(){
        return Storage::disk($this->diskName());
    }

    public function storagePath(){
        return config('filesystems.disks.avatar.root');
    }

    protected function hasFile($fileName){
        return $this->storage()->getVisibility($fileName);
    }
    protected function deleteFile($fileName){
        $this->storage()->delete($fileName);
    }

    public function storeOne(UploadedFile $file){
        $path = $file->store('avatars');

        return $path;
    }
    public function storeTwo(UploadedFile $file){
        $upload_path = $this->storagePath();
        $file_name = $file->getClientOriginalName();
        $generated_new_name = time() . '.' . $file->getClientOriginalExtension();
        $file->move($upload_path, $generated_new_name);
        return $file_name;
    }
    public function storeThree(UploadedFile $file){
                $fileName = time().'.'.$file->extension();
         $file->storeAs(
           $this->id ,$fileName , $this->diskName()
        );
        return  $fileName;
    }

    public function fileUpload(UploadedFile $file){


        //return $this->storeOne($file);
//        return $this->storeTwo($file);
        $fileName = $this->storeThree($file);

        $this->avatar = $fileName;
        $this->save();
        return $this;



    }

    public function fileUrl($fileName){
        $url = $this->storage()->url($this->id.'/'.$fileName);
        return $url;
    }
    protected  function  defaultAvatarUrl(){
        $url = $this->storage()->url('default.png');
        return $url;
    }
}