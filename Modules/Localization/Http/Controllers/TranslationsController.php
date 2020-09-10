<?php

namespace Modules\Localization\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Localization\Http\Requests\UpdateTranslateRequest;
use Modules\Localization\Repositories\LocalizationRepository;

class TranslationsController extends Controller
{
    private $localizationRepository;

    public function __construct(LocalizationRepository $localizationRepository)
    {
        $this->localizationRepository = $localizationRepository;
    }

    public function updateTranslate(UpdateTranslateRequest $updateTranslateRequest, $translation_key)
    {
        //validate data
        $data = $updateTranslateRequest->validated();
        //update method
        $updated = $this->localizationRepository->updateTranslate($translation_key, $data);

        return response()->json(
            [
                'data' => null
            ], $updated ? 200 : 400
        );
    }

}
