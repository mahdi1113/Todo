<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// use App\Http\Controllers\PostController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\auth\LogoutController;
use App\Http\Controllers\auth\RegisterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('/posts',[PostController::class,'index']);

Route::get('/todos',[TodoController::class, 'index'])->middleware(['auth:api']);
Route::delete('/todos/delete/{id}',[TodoController::class, 'destroy']);
Route::post('/todos/store',[TodoController::class, 'store']);
Route::get('/todos/show/{id}',[TodoController::class, 'show']);
Route::put('/todos/update/{id}',[TodoController::class, 'update']);
Route::post('/todos/status/{id}',[TodoController::class, 'status']);

Route::post('/register',[RegisterController::class, 'Register']);
Route::post('/login',[LoginController::class,'login']);
Route::get('logout',[LogoutController::class,'logout'])->middleware(['auth:api']);
// Route::
// Route::post('test',[TestController::class, 't'])->middleware(['auth:api']);


