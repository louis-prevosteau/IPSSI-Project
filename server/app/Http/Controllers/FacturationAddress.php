<?php

namespace App\Http\Controllers;

use App\Http\Resources\FacturationAddress as ResourcesFacturationAddress;
use App\Models\FacturationAddress as ModelsFacturationAddress;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class FacturationAddress extends Controller
{
    public function create(Request $request) {
        try {
            $this->validate(
                $request,
                [
                    'addres' => 'required',
                    'zipcode' => 'required',
                    'city' => 'required',
                    'phone' => 'required'
                ]
            );
            $fact = new ModelsFacturationAddress();
            $fact->addres = $request->addres;
            $fact->zipcode = $request->zipcode;
            $fact->city = $request->city;
            $fact->phone = $request->phone;
            $fact->save();
            DB::table('user_has_facturation_address')
                ->insert([
                    'facturationAddressId' => $fact->id,
                    'userId' => Auth::user()->id
                ]);
            $data = new ResourcesFacturationAddress($fact);
            return response()->json($data);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
    }

    public function getByUser() {
        $facts = DB::table('users')
            ->join('user_has_facturation_address', 'users.id', '=', 'user_has_facturation_address.userId')
            ->join('facturation_address', 'facturation_address.id', '=', 'user_has_facturation_address.facturationAddressId')
            ->where('users.id', '=', Auth::user()->id)
            ->get();
        $data = ResourcesFacturationAddress::collection($facts);
        return response()->json($data);
    }

    public function delete($id) {
        $fact = ModelsFacturationAddress::find($id);
        $fact->delete();
    }
}
