<?php

namespace Modules\Dashboard\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
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

    public function loadMainView()
    {
        $data = $this->dashboardRepository->load();

        return view('dashboard::dashboard', $data);
    }

}
