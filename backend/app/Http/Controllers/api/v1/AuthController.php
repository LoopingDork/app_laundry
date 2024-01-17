<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
class AuthController extends Controller
{
    public function login(Request $request){
        $input = $request->all();

        $validator = Validator::make($input, [
            'username' => 'required',
            'password' => 'required'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $credentials = $request->only('username', 'password');

        if(! Auth::attempt($credentials)){
            return response()->json([
                'message' => 'Anauthorized'
            ], 401);
        }

        $user = User::where('username', $request->username)->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Login success',
            'data' => $user,
            'token' => $token,
        ], 200);

    }

    public function getAllUser(){
        $getAll = User::get();

        if($getAll){
            return response()->json([
                'message' => 'Successfully get All User!',
                'data' => $getAll
            ], 200);
        }
    }

    public function logout()
    {    
        Auth::user()->tokens()->delete();
        return response()->json([
            'message' => 'Logout success'
        ], 200);
    }
}
