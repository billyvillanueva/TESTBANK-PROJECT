<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\ExportController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
// Route::get('/dash', function(){
//     return view('dashboard');
// });
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/exampage', [ExamController::class, 'exampage'])->name('exampage');
Route::get('/export', [ExportController::class, 'exportFile'])->middleware(['auth', 'verified'])->name('export');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/jsonQuiz', [ExamController::class, 'jsonQuiz']);
Route::get('/jsonQuizRandom/{limit}', [ExportController::class, 'index'])->name('jsonQuizRandom');
Route::get('/quizes', [ExamController::class, 'Quizes'])->name('quizes');
Route::get('/delete/{id}', [ExamController::class, 'deleteQuiz'])->name('deleteQuiz');
Route::post('/addQuiz', [ExamController::class, 'addQuiz'])->name('addQuiz');
Route::post('/saveEdit', [ExamController::class, 'saveEditQuiz'])->name('saveEdit');
Route::get('/jsonCount', [ExamController::class, 'quizCountJson'])->name('quizCountJson');




require __DIR__.'/auth.php';
