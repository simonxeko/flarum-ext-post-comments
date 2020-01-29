<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Commands;

use Carbon\Carbon;
use Flarum\Post\PostRepository;
use Flarum\Foundation\DispatchEventsTrait;
use Flarum\Notification\NotificationSyncer;
use Simonxeko\PostComments\Comment;
use Simonxeko\PostComments\Events\Saving;
use Simonxeko\PostComments\CommentValidator;
use Flarum\User\AssertPermissionTrait;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class PostCommentHandler
{
    use DispatchEventsTrait;
    use AssertPermissionTrait;

    /**
     * @var PostRepository
     */
    protected $posts;

    /**
     * @var \Flarum\Notification\NotificationSyncer
     */
    protected $notifications;

    /**
     * @var \Simonxeko\PostComments\CommentValidator
     */
    protected $validator;

    /**
     * @param Dispatcher $events
     * @param PostRepository $posts
     * @param \Flarum\Notification\NotificationSyncer $notifications
     * @param CommentValidator $validator
     */
    public function __construct(
        Dispatcher $events,
        PostRepository $posts,
        NotificationSyncer $notifications,
        CommentValidator $validator
    ) {
        $this->events = $events;
        $this->posts = $posts;
        $this->notifications = $notifications;
        $this->validator = $validator;
    }

    /**
     * @param PostComment $command
     * @return CommentPost
     * @throws \Flarum\User\Exception\PermissionDeniedException
     */
    public function handle(PostComment $command)
    {
        $actor = $command->actor;

        // Make sure the user has permission to reply to this discussion. First,
        // make sure the discussion exists and that the user has permission to
        // view it; if not, fail with a ModelNotFound exception so we don't give
        // away the existence of the discussion. If the user is allowed to view
        // it, check if they have permission to reply.
        $post = $this->posts->findOrFail($command->postId, $actor);

        // If this is the first post in the discussion, it's technically not a
        // "reply", so we won't check for that permission.
        /* if ($post->post_number_index > 0) {
            $this->assertCan($actor, 'reply', $post);
        }*/

        // Create a new Post entity, persist it, and dispatch domain events.
        // Before persistence, though, fire an event to give plugins an
        // opportunity to alter the post entity based on data in the command.
        $comment = Comment::reply(
            $command->discussionId,
            $command->postId,
            Arr::get($command->data, 'attributes.content'),
            $actor->id,
            $command->ipAddress
        );

        if ($actor->isAdmin() && ($time = Arr::get($command->data, 'attributes.createdAt'))) {
            $comment->created_at = new Carbon($time);
        }

        $this->events->dispatch(
            new Saving($comment, $actor, $command->data)
        );

        $this->validator->assertValid($comment->getAttributes());

        $comment->save();

        $this->notifications->onePerUser(function () use ($comment, $actor) {
            $this->dispatchEventsFor($comment, $actor);
        });

        return $post;
    }
}
