<?php

use Illuminate\Support\Facades\Route;

Route::view('dashboard/login', 'dashboard-login')
      ->name('dashboard::login');


Route::get('dashboard/{path?}', 'DashboardController@loadMainView')
      ->where('path', '.*')
      ->name('dashboard::dashboard');
