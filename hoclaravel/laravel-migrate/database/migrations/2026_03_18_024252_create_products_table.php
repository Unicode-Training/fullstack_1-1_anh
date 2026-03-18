<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id(); //name: id, bigint, primary, auto_increment
            $table->string('name', 200); //varchar(200)
            $table->integer('price')->default(0); //int
            $table->text('description')->nullable(); //text
            $table->boolean('status')->default(true); //tinyint
            $table->timestamps(); //created_at, updated_at, type timestamp
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
