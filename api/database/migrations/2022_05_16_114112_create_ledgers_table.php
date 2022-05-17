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
            $table->string('type')->nullable()->index();
            $table->unsignedBigInteger('type_id')->nullable()->index();
            $table->timestamp('date');
            $table->timestamps();

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
        Schema::dropIfExists('ledgers');
    }
}
