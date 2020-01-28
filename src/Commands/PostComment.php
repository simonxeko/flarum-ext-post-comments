<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Commands;

use Flarum\User\User;

class PostComment
{
    /**
     * The ID of the discussion to post the reply to.
     *
     * @var int
     */
    public $discussionId;

    /**
     * The ID of the discussion to post the reply to.
     *
     * @var int
     */
    public $postId;

    /**
     * The user who is performing the action.
     *
     * @var User
     */
    public $actor;

    /**
     * The attributes to assign to the new post.
     *
     * @var array
     */
    public $data;

    /**
     * The IP address of the actor.
     *
     * @var string
     */
    public $ipAddress;

    /**
     * @param int $discussionId The ID of the discussion to post the reply to.
     * @param int $postId The ID of the post the reply to.
     * @param User $actor The user who is performing the action.
     * @param array $data The attributes to assign to the new post.
     * @param string $ipAddress The IP address of the actor.
     */
    public function __construct($discussionId, $postId, User $actor, array $data, $ipAddress = null)
    {
        $this->discussionId = $discussionId;
        $this->postId = $postId;
        $this->actor = $actor;
        $this->data = $data;
        $this->ipAddress = $ipAddress;
    }
}
