<?php

/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Listeners;

use Flarum\Api\Controller;
use Flarum\Api\Event\WillGetData;
use Flarum\Api\Event\WillSerializeData;
use Simonxeko\PostComments\Serializers\CommentSerializer;
use Flarum\Event\GetApiRelationship;
use Flarum\Event\GetModelRelationship;
use Simonxeko\PostComments\Controllers\CreateCommentFlagController;
use Simonxeko\PostComments\Serializers\CommentFlagSerializer;
use Simonxeko\PostComments\CommentFlag;
use Simonxeko\PostComments\Events\Deleted;
use Simonxeko\PostComments\Comment;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Database\Eloquent\Collection;

class AddCommentFlagsRelationship
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(GetModelRelationship::class, [$this, 'getModelRelationship']);
        $events->listen(Deleted::class, [$this, 'commentWasDeleted']);
        $events->listen(GetApiRelationship::class, [$this, 'getApiRelationship']);
        $events->listen(WillGetData::class, [$this, 'includeFlagsRelationship']);
        $events->listen(WillSerializeData::class, [$this, 'prepareApiData']);
    }

    /**
     * @param GetModelRelationship $event
     * @return \Illuminate\Database\Eloquent\Relations\HasMany|null
     */
    public function getModelRelationship(GetModelRelationship $event)
    {
        if ($event->isRelationship(Comment::class, 'flags')) {
            return $event->model->hasMany(Flag::class, 'post_id');
        }
    }

    /**
     * @param Deleted $event
     */
    public function commentWasDeleted(Deleted $event)
    {
        $event->comment->flags()->delete();
    }

    /**
     * @param GetApiRelationship $event
     * @return \Tobscure\JsonApi\Relationship|null
     */
    public function getApiRelationship(GetApiRelationship $event)
    {
        if ($event->isRelationship(CommentSerializer::class, 'flags')) {
            return $event->serializer->hasMany($event->model, FlagSerializer::class, 'flags');
        }
    }

    /**
     * @param WillGetData $event
     */
    public function includeFlagsRelationship(WillGetData $event)
    {
        if ($event->isController(Controller\ShowDiscussionController::class)) {
            $event->addInclude([
                'posts.comments.flags',
                'posts.comments.flags.user'
            ]);
        }

        if ($event->isController(Controller\ListPostsController::class)
            || $event->isController(Controller\ShowPostController::class)) {
            $event->addInclude([
                'comments.flags',
                'comments.flags.user'
            ]);
        }
    }

    /**
     * @param WillSerializeData $event
     */
    public function prepareApiData(WillSerializeData $event)
    {
        // For any API action that allows the 'flags' relationship to be
        // included, we need to preload this relationship onto the data (Comment
        // models) so that we can selectively expose only the flags that the
        // user has permission to view.
        if ($event->isController(Controller\ShowDiscussionController::class)) {
            if ($event->data->relationLoaded('comments')) {
                $comments = $event->data->getRelation('comments');
            }
        }

        if ($event->isController(Controller\ListPostsController::class)) {
            $comments = $event->data->all();
        }

        if ($event->isController(Controller\ShowPostController::class)) {
            $comments = [$event->data];
        }

        if ($event->isController(CreateFlagController::class)) {
            $comments = [$event->data->post];
        }

        if (isset($comments)) {
            $actor = $event->request->getAttribute('actor');
            $commentsWithPerission = [];

            foreach ($comments as $comment) {
                if (is_object($comment)) {
                    $comment->setRelation('flags', null);

                    if ($actor->can('viewFlags', $comment->post->discussion)) {
                        $commentsWithPerission[] = $comment;
                    }
                }
            }

            if (count($commentsWithPerission)) {
                (new Collection($commentsWithPerission))
                    ->load('flags', 'flags.user');
            }
        }
    }
}
