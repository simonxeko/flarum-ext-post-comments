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

class CommentWasUnliked
{
    /**
     * @var Comment
     */
    public $comment;

    /**
     * @var User
     */
    public $user;

    /**
     * @param Comment $comment
     * @param User $user
     */
    public function __construct(Comment $comment, User $user)
    {
        $this->comment = $comment;
        $this->user = $user;
    }
}
