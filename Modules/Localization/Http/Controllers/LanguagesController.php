<?php

namespace Modules\Localization\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Localization\Repositories\LocalizationRepository;

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
}
