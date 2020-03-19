<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;

class AppServiceProvider extends ServiceProvider
{


    private function replacePublic(){
        $this->app->bind('path.public', function()
        {
            $basePath =  base_path();
            $replace =  Str::replaceLast('\server', '',
                $basePath);
            return $replace.'\public_html';
        });

    }
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->replacePublic();
        Schema::defaultStringLength(191);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
