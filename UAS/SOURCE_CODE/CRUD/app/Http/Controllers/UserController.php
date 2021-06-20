<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
 
class UserController extends Controller
{
    public function index()
    {
        $users = \App\User::all();
 
        return $users->toJson();
    }
 
    public function registrasi(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
        ]);
 
        $project = \App\User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => $validatedData['password'],
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'User created successfully!'
        ];
 
        return response()->json($msg);
    }
 
    public function getArticle($id) // for edit and show
    {
        $users = \App\Article::find($id);
 
        return $users->toJson();
    }
 
    //yg ini aku nggk berfungsi karena emang nggk aku fungsikan hehe
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'user' => 'required',
          'email' => 'required',
          'password' => 'required',
        ]);
 
        $article = \App\Article::find($id);
        $article->user = $validatedData['user'];
        $article->email = $validatedData['email'];
        $article->password = $validatedData['password'];
        $article->save();
 
        $msg = [
            'success' => true,
            'message' => 'Article updated successfully'
        ];
 
        return response()->json($msg);
    }
 
    public function delete($id)
    {
        $users = \App\User::find($id);
        if(!empty($users)){
            $users->delete();
            $msg = [
                'success' => true,
                'message' => 'User deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'User deleted failed!'
            ];
            return response()->json($msg);
        }
    }

    function login (Request $request){
        
        $validatedData = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $users = \App\User::where('email',$validatedData['email'])->first();
        $password = \App\User::where('password',$validatedData['password'])->first();

        if(!empty($users && $password)){
            $msg = [
                'success' => true
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false
            ];
            return response()->json($msg);
        }
        
    }
}