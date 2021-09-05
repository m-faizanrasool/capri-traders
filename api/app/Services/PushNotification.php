<?php

namespace App\Services;

use App\Models\Notification;
use App\Models\User;
use App\Models\UserNotification;
use App\Services\FirebaseCloudMessaging;

class PushNotification
{
    private $firebaseCloudMessaging;

    public function __construct(FirebaseCloudMessaging $firebaseCloudMessaging)
    {
        $this->firebaseCloudMessaging = $firebaseCloudMessaging;
    }

    /**
     * @param string $title
     * @param string $message
     * @return null
     */
    public function notifyGlobal($title, $message)
    {
        $tokens = [];
        $receivers = User::whereNotNull('device_token')->get();

        foreach ($receivers as $receiver) {
            if ($receiver->device_token) {
                $this->createUserNotfication($title, $message, $receiver->id, $receiver->device_token);
                $tokens[] = $receiver->device_token;
            }
        }

        // 500 tokens on each try because firebase allows upto 500.
        for ($i = 0; $i < count($tokens) / 500; $i++) {
            $this->firebaseCloudMessaging->send(array_slice($tokens, $i * 500, 500), $title, $message, 'notification', 'notification');
        }
    }

    /**
     * @param int $receiver_id
     * @param string $type
     * @param array $variables
     * @return null
     */
    public function notifyUser($receiver_id, $type, $variables = [])
    {
        $receiver = User::findorFail($receiver_id);
        if ($receiver->device_token) {
            $notification = Notification::firstWhere('type', $type);
            $notification->title = $this->replacePlaceholders($notification->title, $variables);
            $notification->message = $this->replacePlaceholders($notification->message, $variables);

            $this->createUserNotfication($notification->title, $notification->message, $receiver_id, $receiver->device_token);

            $notification_data = ['navigate_to' => $notification->navigate_to];

            $this->firebaseCloudMessaging->send($receiver->device_token, $notification->title, $notification->message, $notification->android_channel_id, $notification->sound, $notification_data);
        }
    }

    private function replacePlaceholders($message, $variables)
    {
        foreach ($variables as $key => $value) {
            $message = str_replace('{' . $key . '}', $value, $message);
        }
        return $message;
    }

    private function createUserNotfication($title, $message, $receiver_id, $device_token)
    {
        UserNotification::create(
            compact('receiver_id', 'title', 'message', 'device_token')
        );
    }
}
