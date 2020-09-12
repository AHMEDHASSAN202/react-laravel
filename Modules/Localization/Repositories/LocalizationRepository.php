<?php
/**
 * Created by PhpStorm.
 * User: AQSSA
 */

namespace Modules\Localization\Repositories;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Modules\Localization\Entities\Language;
use Modules\Localization\Entities\Translation;
use Modules\Settings\Entities\Option;
use Modules\Settings\Repositories\OptionRepository;
use Modules\VisitorsInformation\Entities\Visitor;

class LocalizationRepository
{
    public function getLanguages(Request $request)
    {
        return Cache::rememberForever('languages', function () {
            return Language::all();
        });
    }

    public function getTranslations(Request $request)
    {
        return Cache::rememberForever('translations', function () {
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
        });
    }

    public function updateTranslate($translation_key, $data)
    {
        $translate = Translation::where([
            'translation_key' => $translation_key,
            'translation_lang' => $data['translation_lang']
        ])->first();

        if ($translate) {
            $translate->translation_value =  $data['translation_value'];
            $translate->save();
        }

        return (boolean) $translate;
    }

}
