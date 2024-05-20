<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class ExportController extends Controller
{
    function exportFile()
    {
        return Inertia::render('page/Export');
    }
    public function index($limit)
        {
            $posts = DB::table('quiz_models')
                        ->inRandomOrder()
                        ->limit($limit)
                        ->get();

            return $posts;
        }
}
