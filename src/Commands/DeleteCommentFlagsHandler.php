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

use Simonxeko\PostComments\Events\CommentFlagsWillBeDeleted;
use Simonxeko\PostComments\CommentFlag;
use Simonxeko\PostComments\CommentRepository;
use Flarum\User\AssertPermissionTrait;
use Illuminate\Contracts\Events\Dispatcher;

class DeleteCommentFlagsHandler
{
    use AssertPermissionTrait;

    /**
     * @var CommentRepository
     */
    protected $comments;

    /**
     * @var Dispatcher
     */
    protected $events;

    /**
     * @param CommentRepository $comments
     * @param Dispatcher $events
     */
    public function __construct(CommentRepository $comments, Dispatcher $events)
    {
        $this->comments = $comments;
        $this->events = $events;
    }

    /**
     * @param DeleteFlags $command
     * @return CommentFlag
     */
    public function handle(DeleteCommentFlags $command)
    {
        $actor = $command->actor;

        $comment = $this->comments->findOrFail($command->postId, $actor);

        $this->assertCan($actor, 'viewFlags', $comment->discussion);

        $this->events->dispatch(new CommentFlagsWillBeDeleted($comment, $actor, $command->data));

        $comment->comment_flags()->delete();

        return $comment;
    }
}
