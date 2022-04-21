<?php

namespace App\Http\Controllers;

use App\Http\Resources\Command as ResourcesCommand;
use App\Models\Command as ModelsCommand;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class Command extends Controller
{
    public function index() {
        $commands = ModelsCommand::all();
        $data = ResourcesCommand::collection($commands);
        return response()->json($data);
    }

    public function create(Request $request) {
        try {
            $this->validate(
                $request,
                [
                    'date' => 'required',
                    'amount' => 'required',
                    'userId' => 'required',
                ]
            );
            $command = new ModelsCommand();
            $command->date = $request->date;
            $command->amount = DB::table('product')
                ->sum('price')
                ->join('command_has_product','product.id', '=', 'command_has_product.productId')
                ->join('command', 'command_has_product.id', '=', 'command.id')
                ->where('command.id', '=', $request->id)
                ->get();
            $command->userId = Auth::user()->id;
            $command->save();
            $data = new ResourcesCommand($command);
            return response()->json($data);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
    }

    public function addProductToCommand($productId, $commandId) {
        DB::table('command_has_product')
            ->insert(['commandId' => $commandId, 'productId' => $productId]);
        return response()->json("Add command successfully");
    }

    public function getCommandByUser() {
        $commands = DB::table('command')
            ->where('userId', '=', Auth::user()->id);
        $data = ResourcesCommand::collection($commands);
        return response()->json($data);
    }
}
