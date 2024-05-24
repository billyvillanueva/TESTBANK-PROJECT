<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeacherController extends Controller
{
    function register()
    {
        return Inertia::render('page/register_teacher');
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
}