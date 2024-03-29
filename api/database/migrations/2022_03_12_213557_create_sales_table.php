<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->boolean('is_return')->nullable()->default(false);
            $table->unsignedSmallInteger('company_head_id')->index();
            $table->unsignedSmallInteger('party_id')->index();
            $table->timestamp('date')->index();
            $table->integer('bill_no')->index();
            $table->integer('po_no')->nullable();
            $table->integer('grn')->nullable();
            $table->enum('pay_mode', ['CREDIT', 'CASH'])->index();
            $table->enum('pay_status', ['PENDING', 'DONE'])->index();
            $table->string('remarks')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('company_head_id')->references('id')->on('company_heads');
            $table->foreign('party_id')->references('id')->on('parties');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sales');
    }
}
