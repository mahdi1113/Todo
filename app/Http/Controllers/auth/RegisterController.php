<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    public function Register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|size:8|confirmed'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        } else {

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password)
            ]);

            return response()->json(['msg' => 'کاربر گرامی شما با موفقیت ثبت نام شدید.'],201);

            // Auth::login($user);

            // $token = $user->createToken('AppName')->accessToken;

            // return [
            //     'status' => true,
            //     'message' => 'ok',
            //     'token' => $user->createToken('create')->accessToken
            // ];

            // return response()->json(['token' => $token]);
        }
    }
}
