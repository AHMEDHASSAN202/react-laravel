<?php
/**
 * Created by PhpStorm.
 * User: AQSSA
 */

namespace Modules\Dashboard\Repositories;


use Illuminate\Http\Request;
use Modules\Localization\Repositories\LocalizationRepository;

class DashboardRepository
{
    private $localizationRepository;


    public function __construct(LocalizationRepository $localizationRepository)
    {
        $this->localizationRepository = $localizationRepository;
    }

    public function load(Request $request)
    {
        //get all languages
        $data['languages'] = $this->localizationRepository->getLanguages($request);
        //get current user language
        $data['currentLanguage'] = $this->localizationRepository->getCurrentLanguage($request);
        //get all translations
        $data['translations'] = $this->localizationRepository->getTranslations($request);

        return $data;
    }
}
