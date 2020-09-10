<?php

namespace Modules\Localization\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Localization\Http\Requests\ChangeLanguageRequest;
use Modules\Localization\Repositories\LocalizationRepository;
use Modules\Settings\Repositories\OptionRepository;

class LanguagesController extends Controller
{
    private $localizationRepository;

    function __construct(LocalizationRepository $localizationRepository) {
        $this->localizationRepository = $localizationRepository;
    }

    function index(Request $request)
    {
        $languages = $this->localizationRepository->getLanguages($request);

        return response()->json(['languages' => $languages]);
    }

    public function changeLanguage(ChangeLanguageRequest $changeLanguageRequest, OptionRepository $optionRepository)
    {
        //validate data
        $data = $changeLanguageRequest->validated();
        //update query
        $updated = $this->localizationRepository->changeLanguage($optionRepository, $data);

        return response()->json(compact($updated), $updated ? 200 : 400);
    }
}
