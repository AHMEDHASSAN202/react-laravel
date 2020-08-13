<?php
/**
 * Created by PhpStorm.
 * User: AQSSA
 */

namespace Modules\Localization\Repositories;


use Illuminate\Http\Request;
use Modules\Localization\Entities\Language;
use Modules\Localization\Entities\Translation;
use Modules\Settings\Entities\Option;

class LocalizationRepository
{
    public function getLanguages(Request $request)
    {
        return Language::all();
    }

    public function getCurrentLanguage(Request $request)
    {
        return Option::select('*', 'languages.*')->where('option_key', 'default_lang')->join('languages', 'language_code', '=', 'option_value')->first();
    }

    public function getTranslations(Request $request)
    {
        $translationsCollection = Translation::all();
        $translations = $translationsCollection->mapToGroups(function ($item) {
            return [$item['translation_key'] => [$item['translation_lang'] => $item['translation_value']]];
        })->map(function ($trans) {
            $langWithTranslate = [];
            foreach ($trans as $t) {
                foreach ($t as $key => $translateWord) {
                    $langWithTranslate[$key] = $translateWord;
                }
            }

            return $langWithTranslate;
        });

        return $translations;
    }

}
