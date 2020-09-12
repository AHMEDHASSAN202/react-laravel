<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/**
 * Dashboard Routes
 */
Route::group(['middleware' => ['guest']], function () {
    //dashboard login page
    Route::get('dashboard/login', 'DashboardAuthController@login')->name('auth::login');
    //submit login to dashboard
    Route::post('dashboard/login', 'DashboardAuthController@submitLogin')->name('auth::submitLogin');
});

