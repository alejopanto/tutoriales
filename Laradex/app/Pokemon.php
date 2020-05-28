<?php

namespace Laradex;

use Illuminate\Database\Eloquent\Model;

class pokemon extends Model
{
    public function trainer()
    {
        return $this->belongsTo('Laradex\Trainer');
    }
}
