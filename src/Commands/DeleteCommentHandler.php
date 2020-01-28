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
use Simonxeko\PostComments\Events\CommentRepository;
use Flarum\User\AssertPermissionTrait;
use Illuminate\Contracts\Events\Dispatcher;

class DeleteCommentHandler
{
    use DispatchEventsTrait;
    use AssertPermissionTrait;

    /**
     * @var \Simonxeko\PostComments\PostRepository
     */
    protected $comments;

    /**
     * @param Dispatcher $events
     * @param \Simonxeko\PostComments\PostRepository $comments
     */
    public function __construct(Dispatcher $events, PostRepository $comments)
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

        $post = $this->comments->findOrFail($command->postId, $actor);

        $this->assertCan($actor, 'delete', $post);

        $this->events->dispatch(
            new Deleting($post, $actor, $command->data)
        );

        $post->delete();

        $this->dispatchEventsFor($post, $actor);

        return $post;
    }
}
