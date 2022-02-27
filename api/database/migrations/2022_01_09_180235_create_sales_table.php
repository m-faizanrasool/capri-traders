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
            $table->unsignedBigInteger('company_head_id');
            $table->timestamp('date')->index();
            $table->integer('bill_no')->index();
            $table->integer('po_no');
            $table->integer('grn');
            $table->string('party_name')->index();
            $table->enum('pay_mode', ['CREDIT', 'CASH'])->index();
            $table->enum('pay_status', ['PENDING', 'DONE'])->index();
            $table->string('remarks')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('company_head_id')->references('id')->on('company_heads');
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
