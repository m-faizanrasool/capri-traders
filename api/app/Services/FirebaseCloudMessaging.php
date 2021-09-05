<?php

namespace App\Services;

use Kreait\Firebase\Messaging;
use Kreait\Firebase\Messaging\Notification;
use Kreait\Firebase\Messaging\CloudMessage;
use Kreait\Firebase\Messaging\AndroidConfig;
use Kreait\Firebase\Messaging\ApnsConfig;

class FirebaseCloudMessaging
{
    private $messaging;

    public function __construct(Messaging $messaging)
    {
        $this->messaging = $messaging;
    }

    /**
     * @param string $tokens
     * @param string $title
     * @param string $message
     * @param string $channel_id
     * @param string $sound
     * @param array $data
     * @return null
     */
    public function send($tokens, $title, $message, $channel_id, $sound, $data = [], $badge = false)
    {
        $data['channelID'] = $channel_id;
        $notification = Notification::fromArray([
            'title' => $title,
            'body' => $message
        ]);

        $android_config = AndroidConfig::fromArray([
            'notification' => [
                'channel_id' => $channel_id,
                'sound' => $sound
            ]
        ]);

        $aps = [
            'sound' => $sound . 'wav',
            'content-available' => 1
        ];

        if ($badge) {
            $aps['badge'] = $badge;
        }

        $apns_config = ApnsConfig::fromArray(['payload' => ['aps' => $aps]]);

        try {
            if (is_array($tokens)) {
                $message = CloudMessage::new()->withNotification($notification)->withData($data)->withAndroidConfig($android_config)->withApnsConfig($apns_config);
                $this->messaging->sendMulticast($message, $tokens);
            } else {
                $message = CloudMessage::withTarget('token', $tokens)->withNotification($notification)->withData($data)->withAndroidConfig($android_config)->withApnsConfig($apns_config);
                $this->messaging->send($message);
            }
        } catch (\Exception $e) {
        }
    }
}
