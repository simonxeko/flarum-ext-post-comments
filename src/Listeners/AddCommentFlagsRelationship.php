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
    }

    /**
     * @param GetModelRelationship $event
     * @return \Illuminate\Database\Eloquent\Relations\HasMany|null
     */
    public function getModelRelationship(GetModelRelationship $event)
    {
        if ($event->isRelationship(Comment::class, 'comment_flags')) {
            return $event->model->hasMany(CommentFlag::class, 'comment_id');
        }
    }

    /**
     * @param Deleted $event
     */
    public function commentWasDeleted(Deleted $event)
    {
        $event->comment->comment_flags()->delete();
    }

    /**
     * @param GetApiRelationship $event
     * @return \Tobscure\JsonApi\Relationship|null
     */
    public function getApiRelationship(GetApiRelationship $event)
    {
        if ($event->isRelationship(CommentSerializer::class, 'comment_flags')) {
            return $event->serializer->hasMany($event->model, CommentFlagSerializer::class, 'comment_flags');
        }
    }

    /**
     * @param WillGetData $event
     */
    public function includeFlagsRelationship(WillGetData $event)
    {
        if ($event->isController(Controller\ShowDiscussionController::class)) {
            $event->addInclude([
                'posts.comments.comment_flags',
                'posts.comments.comment_flags.user'
            ]);
        }

        if ($event->isController(Controller\ListPostsController::class)
            || $event->isController(Controller\ShowPostController::class)) {
            $event->addInclude([
                'comments.comment_flags',
                'comments.comment_flags.user'
            ]);
        }
    }
}
