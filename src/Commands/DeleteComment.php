<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Commands;

use Flarum\User\User;

class DeleteComment
{
    /**
     * The ID of the comment to delete.
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
     * Any other user input associated with the action. This is unused by
     * default, but may be used by extensions.
     *
     * @var array
     */
    public $data;

    /**
     * @param int $commentId The ID of the comment to delete.
     * @param User $actor The user performing the action.
     * @param array $data Any other user input associated with the action. This
     *     is unused by default, but may be used by extensions.
     */
    public function __construct($commentId, User $actor, array $data = [])
    {
        $this->commentId = $commentId;
        $this->actor = $actor;
        $this->data = $data;
    }
}
