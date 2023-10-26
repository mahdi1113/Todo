<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function login(Request $request)
    {


        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        // return response()->json(['msg' => 'ok!!!!'],201);

        // $validitor = Validator::make($request->all(), [
        //     'email' => ['required', 'email'],
        //     'password' => ['required'],
        // ]);

        $validator = Validator::make($request->all(), [
            // 'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|size:8'
        ]);



        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        } else {
            if (Auth::attempt(['email'=> $request->email , 'password' => $request->password])) {
                $user = Auth::user();
                Auth::login($user,true);
                $token = $user->createToken('login')->accessToken;
                return response()->json(['msg' => 'با موفقیت وارد شدید.' , 'token' => $token , 'user' => $user] , 200);
                // return response()->json(['msg' => 'خطا نام کاربری یا رمز عبور شما اشتباه است'],200);
            }else{
                return response()->json(['msg' => 'خطا نام کاربری یا رمز عبور شما اشتباه است'],401);
            }
        }


        }
    }

