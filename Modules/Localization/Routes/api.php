<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'localization'], function () {

    Route::get('languages', 'LanguagesController@index');
    Route::put('languages/change', 'LanguagesController@changeLanguage');

    //dashboard routes
    Route::group(['prefix' => 'dashboard'], function () {
        Route::put('translations/{translation_key}', 'TranslationsController@updateTranslate');
    });

});
