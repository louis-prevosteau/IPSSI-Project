<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductHasCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_has_category', function (Blueprint $table) {
            $table->bigInteger('productId')->unsigned();
            $table->bigInteger('categoryId')->unsigned();
            $table->foreign('productId')->references('id')->on('product');
            $table->foreign('categoryId')->references('id')->on('category');
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
        Schema::dropIfExists('product_has_category');
    }
}
