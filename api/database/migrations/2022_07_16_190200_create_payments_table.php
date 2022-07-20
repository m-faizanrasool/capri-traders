<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('parent_id')->nullable()->constrained('payments');
            $table->unsignedSmallInteger('company_head_id')->index();
            $table->unsignedSmallInteger('party_id')->index();
            $table->json('sale_ids')->nullable();
            $table->enum('action', ['SENT', 'RECEIVED', 'DEDUCTED']);
            $table->enum('type', ['CASH', 'CHEQUE'])->index();
            $table->timestamp('date');
            $table->string('remarks')->nullable();
            $table->string('narration')->nullable();
            $table->integer('cheque_no')->nullable();
            $table->timestamp('cheque_date')->nullable();
            $table->unsignedDecimal('tax', 10, 2)->nullable();
            $table->unsignedDecimal('amount', 20, 2);

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
        Schema::dropIfExists('payments');
    }
}
