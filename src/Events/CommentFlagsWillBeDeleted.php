<?php

/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Events;

use Simonxeko\PostComments\Comment;
use Flarum\User\User;

class CommentFlagsWillBeDeleted
{
    /**
     * @var Post
     */
    public $comment;

    /**
     * @var User
     */
    public $actor;

    /**
     * @var array
     */
    public $data;

    /**
     * @param Post $comment
     * @param User $actor
     * @param array $data
     */
    public function __construct(Comment $comment, User $actor, array $data = [])
    {
        $this->comment = $comment;
        $this->actor = $actor;
        $this->data = $data;
    }
}
