<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLedgersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ledgers', function (Blueprint $table) {
            $table->id();
            $table->unsignedSmallInteger('company_head_id')->index();
            $table->unsignedSmallInteger('party_id')->index();
            $table->unsignedBigInteger('sale_id')->nullable()->index();
            $table->unsignedBigInteger('purchase_id')->nullable()->index();
            $table->unsignedBigInteger('payment_id')->nullable()->index();
            $table->timestamp('date')->index();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('company_head_id')->references('id')->on('company_heads');
            $table->foreign('party_id')->references('id')->on('parties');
            $table->foreign('sale_id')->references('id')->on('sales');
            $table->foreign('purchase_id')->references('id')->on('purchases');
            $table->foreign('payment_id')->references('id')->on('payments');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ledgers');
    }
}
