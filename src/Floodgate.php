<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Simonxek\PostComment;

use DateTime;
use Simonxek\PostComment\Events\CheckingForFlooding;
use Simonxek\PostComment\Exceptions\FloodingException;
use Flarum\User\User;
use Illuminate\Contracts\Eventss\Dispatcher;

class Floodgate
{
    /**
     * @var Dispatcher
     */
    protected $events;

    public function __construct(Dispatcher $events)
    {
        $this->events = $events;
    }

    /**
     * @param User $actor
     * @throws FloodingException
     */
    public function assertNotFlooding(User $actor)
    {
        if ($this->isFlooding($actor)) {
            throw new FloodingException;
        }
    }

    /**
     * @param User $actor
     * @return bool
     */
    public function isFlooding(User $actor): bool
    {
        $isFlooding = $this->events->until(
            new CheckingForFlooding($actor)
        );

        return $isFlooding ?? Post::where('user_id', $actor->id)->where('created_at', '>=', new DateTime('-10 seconds'))->exists();
    }
}
