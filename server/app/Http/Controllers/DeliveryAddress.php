<?php

namespace App\Http\Controllers;

use App\Http\Resources\DeliveryAddress as ResourcesDeliveryAddress;
use App\Models\DeliveryAddress as ModelsDeliveryAddress;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class DeliveryAddress extends Controller
{
    public function create(Request $request) {
        try {
            $this->validate(
                $request,
                [
                    'address' => 'required',
                    'zipcode' => 'required',
                    'city' => 'required',
                    'phone' => 'required'
                ]
            );
            $deliv = new ModelsDeliveryAddress();
            $deliv->address = $request->address;
            $deliv->zipcode = $request->zipcode;
            $deliv->city = $request->city;
            $deliv->phone = $request->phone;
            $deliv->save();
            DB::table('user_has_delivery_address')
                ->insert([
                    'deliveryAddressId' => $deliv->id,
                    'userId' => Auth::user()->id
                ]);
            $data = new ResourcesDeliveryAddress($deliv);
            return response()->json($data);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
    }

    public function getByUser() {
        $delivs = DB::table('users')
            ->join('user_has_delivery_address', 'users.id', '=', 'user_has_delivery_address.userId')
            ->join('delivery_address', 'delivery_address.id', '=', 'user_has_delivery_address.deliveryAddressId')
            ->where('users.id', '=', Auth::user()->id)
            ->get();
        $data = ResourcesDeliveryAddress::collection($delivs);
        return response()->json($data);
    }

    public function delete($id) {
        $deliv = ModelsDeliveryAddress::find($id);
        $deliv->delete();
    }
}
