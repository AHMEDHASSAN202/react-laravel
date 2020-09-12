<?php

namespace Modules\VisitorsInformation\Entities;

use Illuminate\Database\Eloquent\Model;

class Visitor extends Model
{
    protected $guarded = [];

    protected $primaryKey = 'visitor_id';
}
