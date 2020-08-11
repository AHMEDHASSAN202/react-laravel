<?php

namespace Modules\Localization\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Modules\Localization\Entities\Language;

class LanguagesDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();
        Language::insert([
            [
                'name'          =>  'English',
                'code'          => 'en',
                'direction'     => 'ltr',
                'display_front' => true
            ], [
                'name'          =>  'عربي',
                'code'          => 'ar',
                'direction'     => 'rtl',
                'display_front' => true
            ]
        ]);
    }
}
