<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use Inertia\Inertia;

class TeacherController extends Controller
{
    function register()
    {
        return Inertia::render('page/reg_teacher');
    }
    function courses()
    {
        return Inertia::render('page/register_courses');
    }
    function jsonTeacherData()
    {
        $data = User::all()->where('role', "Teacher");
        return $data;
    }
    function jsonTeacherProfileData($id)
    {
        $data = User::find($id);
        return $data;
    }
    function jsonSession()
    {
        $status = DB::table('sessions')
        ->get();
        return $status;
    }
}