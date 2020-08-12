<?php
/**
 * Created by PhpStorm.
 * User: AQSSA
 */

namespace Modules\Dashboard\Repositories;


use Modules\Localization\Entities\Language;
use Modules\Settings\Entities\Option;

class DashboardRepository
{
    public function load()
    {
        $data['languages'] = Language::all();
        //get current user language
        $data['currentLanguage'] = Option::select('*', 'languages.*')->where('option_key', 'default_lang')->join('languages', 'language_code', '=', 'option_value')->first();

        return $data;
    }
}
