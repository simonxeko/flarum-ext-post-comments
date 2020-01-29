<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Commands;

use Flarum\Foundation\DispatchEventsTrait;
use Simonxeko\PostComments\Events\Deleting;
use Simonxeko\PostComments\CommentRepository;
use Flarum\User\AssertPermissionTrait;
use Illuminate\Contracts\Events\Dispatcher;

class DeleteCommentHandler
{
    use DispatchEventsTrait;
    use AssertPermissionTrait;

    /**
     * @var \Simonxeko\PostComments\CommentRepository
     */
    protected $comments;

    /**
     * @param Dispatcher $events
     * @param \Simonxeko\PostComments\CommentRepository $comments
     */
    public function __construct(Dispatcher $events, CommentRepository $comments)
    {
        $this->events = $events;
        $this->comments = $comments;
    }

    /**
     * @param DeleteComment $command
     * @return \Simonxeko\PostComments\Comment
     * @throws \Flarum\User\Exception\PermissionDeniedException
     */
    public function handle(DeleteComment $command)
    {
        $actor = $command->actor;
        $comment = $this->comments->findOrFail($command->commentId, $actor);

        $this->assertCan($actor, 'delete', $comment);

        $this->events->dispatch(
            new Deleting($comment, $actor, $command->data)
        );

        $comment->delete();

        $this->dispatchEventsFor($comment, $actor);

        return $comment;
    }
}
