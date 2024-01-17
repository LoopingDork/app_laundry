<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tb_paket;
use Validator;
class Tb_Pakets extends Controller
{
    public function addData(Request $request){
        $input = $request->all();

        $validator = Validator::make($input, [
            'id_outlet' => 'required',
            'alamat' => 'required',
            'tlp' => 'required'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $addData = Tb_outlet::create($input);

        if($addData){
            return response()->json([
                'messages' => 'Successfully get add outlets!' ,
                'data' => $addData
            ], 200);
        }
    }

    public function getData(){
        $getDatas = Tb_outlet::get();

        if($getDatas){
            return response()->json([
                'success' => true,
                'message' => 'Successfully get data',
                'data' => $getDatas
            ], 201);
        }
    }
}