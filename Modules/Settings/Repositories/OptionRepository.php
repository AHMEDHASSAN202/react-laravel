<?php
/**
 * Created by PhpStorm.
 * User: AQSSA
 */

namespace Modules\Settings\Repositories;


use Modules\Settings\Entities\Option;

class OptionRepository
{
    public function getOptions()
    {
        return Option::all();
    }

    public function getOption($option_key)
    {
        return Option::where('option_key', $option_key)->first();
    }

    public function updateOption($option_key, $option_value, $option_data = '')
    {
        return Option::where('option_key', $option_key)->update(compact('option_value', 'option_data'));
    }
}
