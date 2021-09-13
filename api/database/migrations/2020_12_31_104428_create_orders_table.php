<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('hash');
            $table->unsignedBigInteger('customer_id');
            $table->unsignedBigInteger('address_id');
            $table->unsignedBigInteger('rider_id')->nullable();
            $table->unsignedDecimal('subtotal', 10, 2);
            $table->unsignedDecimal('discount', 10, 2)->default(0)->nullable();
            $table->unsignedDecimal('delivery_charges', 10, 2)->default(0)->nullable();
            $table->unsignedDecimal('total', 10, 2);
            $table->unsignedSmallInteger('total_products');
            $table->unsignedSmallInteger('total_quantity');
            $table->string('cancel_reason')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('customer_id')->references('id')->on('users');
            $table->foreign('address_id')->references('id')->on('addresses');
            $table->foreign('rider_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
