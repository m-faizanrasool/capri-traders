<?php

namespace App\Http\Controllers;

use App\Services\OTPService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Arr;
use App\Models\Role;
use App\Services\PhoneNumberService;
use Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => 'required',
            "email" => 'nullable|email|unique:users',
            "phone" => 'required|unique:users',
            "password" => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(["message" => $validator->errors()->first()], 404);
        }

        if ($request->verified) {
            $role = Role::firstWhere('key', 'customer');
            $User = $role->users()->create(request(['name', 'email', 'phone', 'password']));
            return $this->response($User);
        } else {
            OTPService::create($request->phone);
        }
    }

    public function login(Request $request)
    {
        $request->validate([
            "username" => 'required_without:phone',
            "phone" => 'required_without:username',
            "password" => 'required',
            "role" => 'required'
        ]);

        $credentials = request(['phone', 'username', 'password']);
        if (isset($credentials['username'])) {
            $key = filter_var($credentials['username'], FILTER_VALIDATE_EMAIL) ? 'email' : 'phone';
            $credentials[$key] = $credentials['username'];
            Arr::pull($credentials, 'username');
            if ($key === "phone") {
                $credentials[$key] = PhoneNumberService::getFormattedPhone($credentials[$key]);
            }
        }
        $credentials['role_id'] = Role::firstWhere('key', $request->role)->id;

        if (!Auth::attempt($credentials)) {
            $errorMessage = $request->email ? 'Incorrect Email or Password' : 'Incorrect Phone or Password';
            return response()->json(["message" => $errorMessage], 404);
        }

        $User = Auth::user();
        return $this->response($User);
    }

    private function response($User)
    {
        return response()->json(["user" => $User, "accessToken" => $User->createToken('auth-token')->plainTextToken]);
    }
}
