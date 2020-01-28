<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Events;

use Simonxeko\PostComments\Comment;
use Flarum\User\User;

class Deleting
{
    /**
     * The post that is going to be deleted.
     *
     * @var \Simonxeko\PostComments\Comment
     */
    public $comment;

    /**
     * The user who is performing the action.
     *
     * @var User
     */
    public $actor;

    /**
     * Any user input associated with the command.
     *
     * @var array
     */
    public $data;

    /**
     * @param \Simonxeko\PostComments\Comment $comment
     * @param User $actor
     * @param array $data
     */
    public function __construct(Comment $comment, User $actor, array $data)
    {
        $this->comment = $comment;
        $this->actor = $actor;
        $this->data = $data;
    }
}
