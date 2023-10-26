<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function logout()
    {
        // $user = Auth::user();
        // $user = User::find(16);
        // $user = Auth::user();
        // $user->tokens->each(function ($token) {
        //     $token->revoke();
        // });

        // return response()->json($user);
        // return $user;

        // $user = Auth::user();
        // return response()->json($user);
        // if (Auth::check()) {
        //     Auth::user()->AauthAcessToken()->delete();
        //     return response()->json(['msg' => 'successss']);
        //  }
        // return response()->json('success');

        // return auth()->user();

        $user = Auth::user()->token();
        $user->revoke();
        return 'logged out';
    }

    public function test()
    {
        // $loggedInUser = Auth::user();
        // return response()->json($loggedInUser);
    }
}
