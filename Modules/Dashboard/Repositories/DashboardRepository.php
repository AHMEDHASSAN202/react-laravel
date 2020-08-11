<?php
/**
 * Created by PhpStorm.
 * User: AQSSA
 */

namespace Modules\Dashboard\Repositories;


use Modules\Localization\Entities\Language;

class DashboardRepository
{
    public function load()
    {
        $data['languages'] = Language::all();
        //get current user language
        $data['currentLanguage'] = $data['languages'][0];

        return $data;
    }
}
