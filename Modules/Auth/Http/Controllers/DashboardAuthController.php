<?php

namespace Modules\Auth\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class DashboardAuthController extends Controller
{
   public function login(Request $request)
   {
       return view('auth::dashboard-login');
   }
}
