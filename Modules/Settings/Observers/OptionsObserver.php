<?php
/**
 * Created by PhpStorm.
 * User: AQSSA
 */

namespace Modules\Settings\Observers;


use Illuminate\Support\Facades\Cache;
use Modules\Settings\Entities\Option;

class OptionsObserver
{
    public function saved(Option $option)
    {
        Cache::forget('options');
    }

    public function created($option)
    {
        Cache::forget('options');
    }

    public function deleted($option)
    {
        Cache::forget('options');
    }
}
