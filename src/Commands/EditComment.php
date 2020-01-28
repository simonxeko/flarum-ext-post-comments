<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Commands;

use Flarum\User\User;

class EditComment
{
    /**
     * The ID of the post to edit.
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
     * The attributes to update on the post.
     *
     * @var array
     */
    public $data;

    /**
     * @param int $commentId The ID of the post to edit.
     * @param User $actor The user performing the action.
     * @param array $data The attributes to update on the post.
     */
    public function __construct($commentId, User $actor, array $data)
    {
        $this->comment = $commentId;
        $this->actor = $actor;
        $this->data = $data;
    }
}
