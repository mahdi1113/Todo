<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TestController extends Controller
{
    public function t()
    {
        // $loggedInUser = ;
        $user = auth()->user();
        // $user = Auth::guard('api')->user();

        // $this->assertEquals($user->name, $authenticatedUser->name);
        return response()->json($user);
    }
}
