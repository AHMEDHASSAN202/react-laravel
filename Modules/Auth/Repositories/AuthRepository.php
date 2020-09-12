<?php
/**
 * Created by PhpStorm.
 * User: AQSSA
 */

namespace Modules\Auth\Repositories;


use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Modules\Auth\Entities\User;
use Modules\Auth\Events\AfterUserLoginToDashboardEvent;
use Modules\Auth\Events\BeforeUserLoginToDashboardEvent;

class AuthRepository
{

    public function loginToDashboard($loginToDashboardRequest)
    {
        $user = User::where('user_email', $loginToDashboardRequest->email)->first();

        //check on user
        if (!$user) {
            return false;
        }

        //check password
        if (!Hash::check($loginToDashboardRequest->password, $user->user_password)) {
            return false;
        }

        //check role
        if (!in_array($user->user_role, config('auth.dashboard_roles'))) {
            return false;
        }

        //dispatch before user login event
        event(new BeforeUserLoginToDashboardEvent($user));

        //logged it
        Auth::login($user, (boolean)$loginToDashboardRequest->rememberme);

        //dispatch after user login event
        event(new AfterUserLoginToDashboardEvent($user));

        return true;
    }
}
