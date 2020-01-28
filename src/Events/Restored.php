<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Events;

use Flarum\Post\CommentPost;
use Flarum\User\User;

class Restored
{
    /**
     * @var \Simonxeko\PostComments\Comment
     */
    public $comment;

    /**
     * @var User
     */
    public $actor;

    /**
     * @param \Simonxeko\PostComments\Comment $post
     */
    public function __construct(Comment $comment, User $actor = null)
    {
        $this->comment = $comment;
        $this->actor = $actor;
    }
}
