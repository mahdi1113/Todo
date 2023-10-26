<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $todos = Todo::latest()->get();
        // $user = Auth::user();
        return response()->json($todos);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $validate = $request->validate([
        //     'title' => 'required',
        // ]);

        $validator = Validator::make($request->all(), [
            'title' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        } else {
            Todo::create([
                'title' => $request->title,
                'complated' => false,
            ]);
            return response()->json(['msg' => 'فعالیت مورد نظر با موفقیت ایجاد شد'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $todo = Todo::find($id);
        return response()->json($todo);
    }

    public function update(Request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            'title' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        } else {
            $todo = Todo::find($id);
            $todo->update([
                'title' => $request->title,
            ]);
            return response()->json(['msg' => 'فعالیت مورد نظر با موفقیت آپدیت شد'], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $todo = Todo::find($id);
        $todo->delete();

        return response()->json(['msg' => 'فعالیت مورد نظر با موفقیت حذف شد'], 200);
    }

    public function status($id)
    {
        $todo = Todo::find($id);
        if($todo->complated){
            $todo->update([
                'complated' => false,
            ]);
            return response()->json(['msg' => 'فعالیت مورد نظر با موفقیت آپدیت شد'], 200);
        }else{
            $todo->update([
                'complated' => true,
            ]);
            return response()->json(['msg' => 'فعالیت مورد نظر با موفقیت آپدیت شد'], 200);
        }
    }
}



// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Validator;

// class FormController extends Controller
// {
//     public function validateForm(Request $request)
//     {
//         $validator = Validator::make($request->all(), [
//             'title' => 'required',
//         ]);

//         if ($validator->fails()) {
//             return response()->json(['errors' => $validator->errors()], 422);
//         }

//         // اعتبار سنجی موفقیت‌آمیز بوده است.
//         // ادامه عملی
