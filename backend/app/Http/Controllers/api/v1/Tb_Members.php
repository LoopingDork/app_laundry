<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tb_member;
use Validator;
class Tb_Members extends Controller
{
    public function registration(Request $request){
        $input = $request->all();

        $validator = Validator::make($input, [
            'nama_pengguna' => 'required',
            'alamat' => 'required',
            'jenis_kelamin' => 'required',
            'tlp' => 'required'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $addData = Tb_member::create($input);

        if($addData){
            return response()->json([
                'messages' => 'Successfully register member!' ,
                'data' => $addData
            ], 200);
        }
    }
    
    public function getData(){
        $getDatas = Tb_member::get();

        if($getDatas){
            return response()->json([
                'success' => true,
                'message' => 'Successfully get member',
                'data' => $getDatas
            ], 201);
        }
    }
}