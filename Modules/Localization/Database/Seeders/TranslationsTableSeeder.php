<?php

namespace Modules\Localization\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Modules\Localization\Entities\Translation;

class TranslationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        Translation::insert([
            [
                'translation_key'       => 'dashboard::dashboard',
                'translation_value'     => 'Dashboard',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::dashboard',
                'translation_value'     => 'لوحة التحكم',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::stores',
                'translation_value'     => 'Stores',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::stores',
                'translation_value'     => 'المتاجر',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::all_stores',
                'translation_value'     => 'All Stores',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::all_stores',
                'translation_value'     => 'جميع المتاجر',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::store_approvals',
                'translation_value'     => 'Store Approvals',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::store_approvals',
                'translation_value'     => 'موافقات المتاجر',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::catalog',
                'translation_value'     => 'Catalog',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::catalog',
                'translation_value'     => 'الفهرس',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::products',
                'translation_value'     => 'Products',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::products',
                'translation_value'     => 'المنتجات',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::categories',
                'translation_value'     => 'Categories',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::categories',
                'translation_value'     => 'الاقسام',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::brands',
                'translation_value'     => 'Brands',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::brands',
                'translation_value'     => 'علامات تجارية',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::attributes',
                'translation_value'     => 'Attributes',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::attributes',
                'translation_value'     => 'السمات',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::attribute_groups',
                'translation_value'     => 'Attribute Groups',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::attribute_groups',
                'translation_value'     => 'مجموعات السمات',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::options',
                'translation_value'     => 'Options',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::options',
                'translation_value'     => 'الخيارات',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::tags',
                'translation_value'     => 'Tags',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::tags',
                'translation_value'     => 'تاج',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::reviews',
                'translation_value'     => 'Reviews',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::reviews',
                'translation_value'     => 'تقييم',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::sale',
                'translation_value'     => 'Sale',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::sale',
                'translation_value'     => 'المبيعات',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::orders',
                'translation_value'     => 'Orders',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::orders',
                'translation_value'     => 'الطلبات',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::transaction',
                'translation_value'     => 'Transaction',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::transaction',
                'translation_value'     => 'التحويلات',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::returns',
                'translation_value'     => 'Returns',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::returns',
                'translation_value'     => 'المرتجعات',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::customers',
                'translation_value'     => 'Customers',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::customers',
                'translation_value'     => 'العملاء',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::customer',
                'translation_value'     => 'Customer',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::customer',
                'translation_value'     => 'عميل',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::customer_approvals',
                'translation_value'     => 'Customer Approvals',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::customer_approvals',
                'translation_value'     => 'موافقات العملاء',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::coupon',
                'translation_value'     => 'Coupon',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::coupon',
                'translation_value'     => 'كوبون',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::pages',
                'translation_value'     => 'Pages',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::pages',
                'translation_value'     => 'الصفحات',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::media',
                'translation_value'     => 'Media',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::media',
                'translation_value'     => 'الصور',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::localization',
                'translation_value'     => 'Localization',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::localization',
                'translation_value'     => 'اللغات',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::languages',
                'translation_value'     => 'Languages',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::languages',
                'translation_value'     => 'اللغات',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::language',
                'translation_value'     => 'Language',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::language',
                'translation_value'     => 'اللغة',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::translations',
                'translation_value'     => 'Translations',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::translations',
                'translation_value'     => 'الترجمة',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::currency_rate',
                'translation_value'     => 'Currency Rate',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::currency_rate',
                'translation_value'     => 'اسعار العملات',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::taxes',
                'translation_value'     => 'Taxes',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::taxes',
                'translation_value'     => 'الضريبة',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::users',
                'translation_value'     => 'Users',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::users',
                'translation_value'     => 'المستخدمين',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::roles',
                'translation_value'     => 'Roles',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::roles',
                'translation_value'     => 'الصلاحيات',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::reports',
                'translation_value'     => 'Reports',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::reports',
                'translation_value'     => 'التقارير',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::settings',
                'translation_value'     => 'Settings',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::settings',
                'translation_value'     => 'الاعدادات',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::create',
                'translation_value'     => 'Create',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::create',
                'translation_value'     => 'اضافة',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::save',
                'translation_value'     => 'Save',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::save',
                'translation_value'     => 'حفظ',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::add',
                'translation_value'     => 'Add',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::add',
                'translation_value'     => 'اضافة',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::delete',
                'translation_value'     => 'Delete',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::delete',
                'translation_value'     => 'حذف',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::edit',
                'translation_value'     => 'Edit',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::edit',
                'translation_value'     => 'تعديل',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::click',
                'translation_value'     => 'Click',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::click',
                'translation_value'     => 'اضغط',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::actions',
                'translation_value'     => 'Actions',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::actions',
                'translation_value'     => 'الاجراءات',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::search',
                'translation_value'     => 'Search',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::search',
                'translation_value'     => 'بحث',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::name',
                'translation_value'     => 'Name',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::name',
                'translation_value'     => 'الاسم',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::email',
                'translation_value'     => 'Email',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::email',
                'translation_value'     => 'البريد الالكتروني',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::location',
                'translation_value'     => 'Location',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::location',
                'translation_value'     => 'الموقع',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::phone',
                'translation_value'     => 'Phone',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::phone',
                'translation_value'     => 'الهاتف',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::registration_date',
                'translation_value'     => 'Registration date',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::registration_date',
                'translation_value'     => 'تاريخ التسجيل',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::view',
                'translation_value'     => 'View',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::view',
                'translation_value'     => 'عرض',
                'translation_lang'      => 'ar',
            ],
            [
                'translation_key'       => 'dashboard::view_all',
                'translation_value'     => 'View all',
                'translation_lang'      => 'en',
            ],
            [
                'translation_key'       => 'dashboard::view_all',
                'translation_value'     => 'عرض الكل',
                'translation_lang'      => 'ar',
            ]
        ]);
    }
}
