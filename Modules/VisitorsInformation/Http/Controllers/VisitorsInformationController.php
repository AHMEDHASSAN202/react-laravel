<?php

namespace Modules\VisitorsInformation\Http\Controllers;


use Illuminate\Routing\Controller;
use Modules\VisitorsInformation\Http\Requests\UpdateOrCreateVisitorInformationRequest;
use Modules\VisitorsInformation\Repositories\VisitorsInformationRepository;

class VisitorsInformationController extends Controller
{
    private $visitorsInformationRepository;


    public function __construct(VisitorsInformationRepository $visitorsInformationRepository)
    {
        $this->visitorsInformationRepository = $visitorsInformationRepository;
    }

    public function updateOrCreateVisitorInformation(
        UpdateOrCreateVisitorInformationRequest
        $updateOrCreateVisitorInformationRequest
    )
    {
        //validate data
        $data = $updateOrCreateVisitorInformationRequest->validated();
        //get visitor ip
        $ip = $this->visitorsInformationRepository->getIp();
        //update query
        $visitor = $this->visitorsInformationRepository->updateOrCreate($ip, $data);

        return response()->json(compact($visitor), $visitor ? 200 : 400);
    }
}
