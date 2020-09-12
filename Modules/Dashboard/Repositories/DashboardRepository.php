<?php
/**
 * Created by PhpStorm.
 * User: AQSSA
 */

namespace Modules\Dashboard\Repositories;


use Illuminate\Http\Request;
use Modules\Localization\Repositories\LocalizationRepository;
use Modules\Settings\Repositories\OptionRepository;
use Modules\VisitorsInformation\Repositories\VisitorsInformationRepository;

class DashboardRepository
{
    private $localizationRepository,
            $optionRepository,
            $visitorsInformationRepository;

    public function __construct(
        LocalizationRepository $localizationRepository,
        OptionRepository $optionRepository,
        VisitorsInformationRepository $visitorsInformationRepository
    )
    {
        $this->localizationRepository = $localizationRepository;
        $this->optionRepository = $optionRepository;
        $this->visitorsInformationRepository = $visitorsInformationRepository;
    }

    public function load(Request $request)
    {
        //get all options [settings]
        $data['options'] = $this->optionRepository->getOptions();
        //get all languages
        $data['languages'] = $this->localizationRepository->getLanguages($request);
        //get visitor info
        $data['visitor'] = $this->visitorsInformationRepository->getVisitorInformation();
        //get all translations
        $data['translations'] = $this->localizationRepository->getTranslations($request);

        return $data;
    }
}
