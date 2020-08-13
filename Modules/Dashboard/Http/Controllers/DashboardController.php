<?php

namespace Modules\Dashboard\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Dashboard\Repositories\DashboardRepository;

class DashboardController extends Controller
{
    private $dashboardRepository;


    public function __construct(DashboardRepository $dashboardRepository)
    {
        $this->dashboardRepository = $dashboardRepository;
    }

    public function loadMainView(Request $request)
    {
        $data = $this->dashboardRepository->load($request);

        return view('dashboard::dashboard', $data);
    }



}
