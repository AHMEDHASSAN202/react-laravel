<?php

namespace Modules\Auth\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\MessageBag;
use Illuminate\Validation\Validator;
use Modules\Auth\Http\Requests\LoginToDashboardRequest;
use Modules\Auth\Repositories\AuthRepository;

class DashboardAuthController extends Controller
{
    private $authRepository;


    public function __construct(AuthRepository $authRepository)
    {
        $this->authRepository = $authRepository;
    }

    public function login(Request $request)
    {
        $target = $request->query('target');

        return view('auth::dashboard-login', compact('target'));
    }

   public function submitLogin(LoginToDashboardRequest $loginToDashboardRequest)
   {
       $logged = $this->authRepository->loginToDashboard($loginToDashboardRequest);

       if (!$logged) {
           $errors = new MessageBag();
           $errors->add('email_or_password', true);
           return redirect()->back()->with(compact('errors'));
       }

       $target = $loginToDashboardRequest->query('target') ?? route('dashboard::dashboard');

       return redirect($target);
   }

}
