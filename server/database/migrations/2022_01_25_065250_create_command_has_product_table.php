<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommandHasProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('command_has_product', function (Blueprint $table) {
            $table->bigInteger('commandId')->unsigned();
            $table->bigInteger('productId')->unsigned();
            $table->foreign('productId')->references('id')->on('product');
            $table->foreign('commandId')->references('id')->on('command');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('command_has_product');
    }
}
