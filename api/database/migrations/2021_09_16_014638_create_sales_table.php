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
            $table->string('company_head');
            $table->integer('bill_no');
            $table->integer('po_no');
            $table->integer('grn');
            $table->string('party_name');
            $table->string('pay_mode');
            $table->string('remarks')->nullable();
            $table->string('pay_status');
            $table->timestamps();
            $table->softDeletes();
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
