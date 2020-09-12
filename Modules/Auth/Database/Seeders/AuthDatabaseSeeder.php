<?php

namespace Modules\Auth\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Modules\Auth\Entities\User;

class AuthDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        // $this->call("OthersTableSeeder");

        User::create([
            'user_role' => 'admin',
            'user_name' => 'ahmed hassan',
            'user_email'    => 'ahmed@gmail.com',
            'user_password' => password_hash(123456, PASSWORD_DEFAULT)
        ]);
    }
}
