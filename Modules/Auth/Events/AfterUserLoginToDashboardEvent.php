<?php

namespace Modules\Auth\Events;

use Illuminate\Queue\SerializesModels;
use Modules\Auth\Entities\User;

class AfterUserLoginToDashboardEvent
{
    use SerializesModels;

    public $user;

    /**
     * Create a new event instance.
     *
     * @param $user
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }
}
