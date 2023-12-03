<?php

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Option;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Poll;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(5)->has(Poll::factory(3)->has(Option::factory(4)))->create();
    }
}
