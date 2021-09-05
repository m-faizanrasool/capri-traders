<?php

namespace Database\Seeders;

use App\Models\Notification;
use Illuminate\Database\Seeder;

class NotificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Notification::create([
            'title' => 'Hi {NAME}',
            'message' => 'Your order has been {STATUS}.',
            'type' => 'status-update',
            'sound' => 'notification',
            'android_channel_id' => 'notification',
            'navigate_to' => '/orders'
        ]);

        Notification::create([
            'title' => 'Hi {NAME}',
            'message' => 'Your order has been cancelled due to: {REASON}.',
            'type' => 'cancel-order',
            'sound' => 'notification',
            'android_channel_id' => 'notification',
            'navigate_to' => '/orders'
        ]);
    }
}
