<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/login', [\App\Http\Controllers\api\v1\AuthController::class, 'login']);
Route::get('/getAllUser', [\App\Http\Controllers\api\v1\AuthController::class, 'getAllUser']);

Route::middleware('auth:sanctum')->get('/me', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [\App\Http\Controllers\api\v1\AuthController::class, 'logout']);
});
Route::post('/memberRegistration', [\App\Http\Controllers\api\v1\Tb_Members::class, 'registration']);
Route::get('/record_member', [\App\Http\Controllers\api\v1\Tb_Members::class, 'getData']);
Route::post('/tambah_outlets', [\App\Http\Controllers\api\v1\Tb_Outlets::class, 'addData']);
Route::get('/record_outlets', [\App\Http\Controllers\api\v1\Tb_Outlets::class, 'getData']);