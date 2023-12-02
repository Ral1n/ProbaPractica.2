<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
        $user = \App\Models\User::factory()->hasPolls(5)->create([
            'email' => 'test@example.com',
        ]);

        dd($user);

        // $polls = \App\Models\Poll::factory()->count(10)->for($user)->create();

    }
}
