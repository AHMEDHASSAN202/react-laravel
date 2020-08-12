<?php

namespace Modules\Settings\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Modules\Settings\Entities\Option;

class OptionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        Option::insert([
            [
                'option_key'        => 'site_name:en',
                'option_value'      => 'E-Commerce',
                'option_data'       => '',
            ],
            [
                'option_key'        => 'site_name:ar',
                'option_value'      => 'اي كوميرس',
                'option_data'       => '',
            ],
            [
                'option_key'        => 'logo:en',
                'option_value'      => '/logos/logo.png',
                'option_data'       => '',
            ],
            [
                'option_key'        => 'logo:ar',
                'option_value'      => '/logos/logo.png',
                'option_data'       => '',
            ],
            [
                'option_key'        => 'dashboard_title:en',
                'option_value'      => 'Dashboard',
                'option_data'       => '',
            ],
            [
                'option_key'        => 'dashboard_title:ar',
                'option_value'      => 'لوحة التحكم',
                'option_data'       => '',
            ],
            [
                'option_key'        => 'dashboard_title:en',
                'option_value'      => 'Dashboard',
                'option_data'       => '',
            ],
            [
                'option_key'        => 'dashboard_title:ar',
                'option_value'      => 'لوحة التحكم',
                'option_data'       => '',
            ],
            [
                'option_key'        => 'keywords:en',
                'option_value'      => 'ecommerce, payment, buy',
                'option_data'       => '',
            ],
            [
                'option_key'        => 'keywords:ar',
                'option_value'      => 'تجارة الكترونية, بيع اونلاين',
                'option_data'       => '',
            ],
            [
                'option_key'        => 'description:en',
                'option_value'      => 'Online Multi Store and Shopping',
                'option_data'       => '',
            ],
            [
                'option_key'        => 'description:ar',
                'option_value'      => 'Online Multi Store and Shopping',
                'option_data'       => '',
            ],
            [
                'option_key'        => 'default_lang',
                'option_value'      => 'en',
                'option_data'       => '',
            ],
            [
                'option_key'        => 'default_currency',
                'option_value'      => 'USD',
                'option_data'       => '',
            ]
        ]);
    }
}
