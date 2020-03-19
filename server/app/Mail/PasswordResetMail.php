<?php

namespace App\Mail;

use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PasswordResetMail extends Mailable
{
    use Queueable, SerializesModels;

    private  $user = null;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $code = $this->user->passwordResetToken()->token;
        $level = 'success';
        $actionText = 'click';
        $actionUrl = '';
        $displayableActionUrl = 'this is dispal';
        $introLines = [];
        $outroLines = [];
        $data = compact(
            'code',
            'level',
            'introLines',
            'outroLines',
            'actionText',
            'actionUrl',
            'displayableActionUrl',
            ''

        );
        return $this->markdown('vendor.notifications.email',$data);
    }
}
