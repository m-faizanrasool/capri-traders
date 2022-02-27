<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_items', function (Blueprint $table) {
             $table->id();
            $table->unsignedBigInteger('item_id');
            $table->unsignedBigInteger('purchase_id');
            $table->unsignedSmallInteger('unit_id');
            $table->unsignedDecimal('unit_quantity', 10, 2);
            $table->unsignedDecimal('rate', 10, 2);
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('item_id')->references('id')->on('items');
            $table->foreign('purchase_id')->references('id')->on('purchases');
            $table->foreign('unit_id')->references('id')->on('units');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('purchase_items');
    }
}
