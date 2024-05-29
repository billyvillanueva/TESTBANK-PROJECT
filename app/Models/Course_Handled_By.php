<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course_Handled_By extends Model
{
    use HasFactory;
    protected $table = 'course__handled__bies';
    protected $fillable = [
        'prof_id',
        'course_code',
    ];

 
}
