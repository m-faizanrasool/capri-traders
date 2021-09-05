<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Carbon\Carbon;
use ErrorException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendCode;
use App\Services\OTPService;
use Illuminate\Auth\Events\Verified;
use App\Http\Middleware\PhoneFormat;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware(PhoneFormat::class, ['only' => ['update']]);
    }

    public function authenticated()
    {
        return response()->json(Auth::user());
    }

    private function _related()
    {
        $roles = Role::all();

        return compact('roles');
    }

    public function create()
    {
        return response()->json($this->_related());
    }

    public function index(Request $request)
    {
        $users = User::with(['role']);

        $users->where(function ($q) use ($request) {
            if ($request->role_id) {
                $q->where('role_id', $request->role_id);
            }
        });

        if ($request->search) {
            $search = $request->search;
            $users->where(function ($q) use ($search) {
                $q->where('name', 'LIKE', '%' . $search . '%');
                $q->orWhere('email', 'LIKE', '%' . $search . '%');
                $q->orWhere('phone', 'LIKE', '%' . $search . '%');
            });
        }

        $total = $users->count();
        $items_per_page = $request->items_per_page ?? 3;
        $users = $users->offset($request->page_index * $items_per_page)->limit($items_per_page)->get();

        return response()->json(compact('users', 'total'));
    }

    public function store(Request $request)
    {
        $request->validate([
            "name" => 'required',
            "email" => 'nullable|email|unique:users',
            "phone" => 'required|unique:users',
            "password" => 'required',
            "role_id" => 'required'
        ]);

        User::create(request(['name', 'email', 'phone', 'password', 'role_id', 'allowed_access']));

        return response()->json(["message" => 'Profile Updated Successfully!']);
    }

    public function update(Request $request, $id = 0)
    {
        if (!$id) {
            $id = Auth::id();
        }

        $request->validate([
            "name" => 'required',
            "email" => 'nullable|email|unique:users,email,' . $id,
            "phone" => 'required|unique:users,phone,' . $id,
        ]);

        $user = User::find($id);
        $user->fill(request(['name', 'email', 'phone', 'password', 'device_token', 'role_id', 'allowed_access']));
        $user->save();

        return response()->json(["message" => 'Profile Updated Successfully!']);
    }

    public function resetPassword(Request $request)
    {
        $otp = OTPService::verify($request->phone, $request->code);
        if ($otp['verified']) {
            $user = User::firstWhere('phone', $request->phone);
            $user->password = $request->password;
            $user->save();
        }
    }

    private function sendMail($user)
    {
        $data = array(
            'name'     =>  $user->name,
            'code'      =>  $user->confirmation_code
        );
        Mail::to($user->email)->send(new SendCode($data));
    }

    public function destroy($id)
    {
        User::find($id)->delete();
        return response()->json(["message" => 'User Deleted Successfully!']);
    }
}
