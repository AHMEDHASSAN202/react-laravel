<?php

namespace Modules\Localization\Providers;

use Illuminate\Support\ServiceProvider;
use Modules\Localization\Entities\Language;
use Modules\Localization\Entities\Translation;
use Modules\Localization\Observers\LanguageObserver;
use Modules\Localization\Observers\TranslationObserver;

class ObserverServiceProvider extends ServiceProvider
{
    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {

    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [];
    }

    public function boot()
    {
        Language::observe(LanguageObserver::class);
        Translation::observe(TranslationObserver::class);
    }
}
