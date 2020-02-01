<?php

/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Commands;

use Flarum\User\User;

class DeleteCommentFlags
{
    /**
     * The ID of the post to delete flags for.
     *
     * @var int
     */
    public $commentId;

    /**
     * The user performing the action.
     *
     * @var User
     */
    public $actor;

    /**
     * @var array
     */
    public $data;

    /**
     * @param int $commentId The ID of the post to delete flags for.
     * @param User $actor The user performing the action.
     * @param array $data
     */
    public function __construct($commentId, User $actor, array $data = [])
    {
        $this->commentId = $commentId;
        $this->actor = $actor;
        $this->data = $data;
    }
}
