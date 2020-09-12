<?php

Route::get('dashboard/{path?}', 'DashboardController@loadMainView')
      ->middleware(['auth'])
      ->where('path', '.*')
      ->name('dashboard::dashboard');
