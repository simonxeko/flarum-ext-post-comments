<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Events;

use Flarum\User\User;

class CheckingForFlooding
{
    /**
     * @var User
     */
    public $actor;

    /**
     * @param User|null $actor
     */
    public function __construct(User $actor = null)
    {
        $this->actor = $actor;
    }
}
