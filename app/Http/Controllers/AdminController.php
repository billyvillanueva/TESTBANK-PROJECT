<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\CourseList;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function register(Request $request)
    {
     $reg = new CourseList();
     $reg -> course_code = $request->course_code;
     $reg -> course_title = $request->course_title;
     $reg->save();

        return redirect()->back();  
    }
    public function jsoncourses()
    {
       $data = CourseList::all();
       return $data; 
    }
    public function viewData($id)
    {
       $data = User::find($id);
       return view('Details', ['data'=>$data]);
    }
}