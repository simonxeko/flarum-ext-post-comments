<?php

/*
 * This file is part of fof/polls.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Listeners;

use Flarum\Api\Controller;
use Flarum\Api\Controller\ShowDiscussionController;
use Flarum\Api\Controller\ShowPostController;
use Flarum\Api\Controller\ListPostsController;
use Flarum\Event\GetApiRelationship;
use Flarum\Event\GetModelRelationship;
use Flarum\Api\Event\WillSerializeData;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Event\WillGetData;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Api\Serializer\PostSerializer;
use Flarum\User\User;
use Flarum\Post\Post;
use Flarum\Post\CommentPost;
use Simonxeko\PostComments\Serializers\CommentSerializer;
use Simonxeko\PostComments\Comment;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Database\Eloquent\Collection;

class AddPostCommentRelationship
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(GetModelRelationship::class, [$this, 'getModelRelationship']);
        $events->listen(GetApiRelationship::class, [$this, 'getApiRelationship']);
        $events->listen(WillGetData::class, [$this, 'includeRelationship']);
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
    }

    /**
     * @param GetModelRelationship $event
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function getModelRelationship(GetModelRelationship $event)
    {
        if ($event->isRelationship(Post::class, 'comments')) {
            return $event->model->hasMany(Comment::class, 'post_id');
        }

        if ($event->isRelationship(Comment::class, 'likes')) {
            return $event->model->belongsToMany(User::class, 'comment_likes', 'comment_id', 'user_id', null, null, 'likes');
        }
    }

    /**
     * @param GetApiRelationship $event
     *
     * @return \Tobscure\JsonApi\Relationship
     */
    public function getApiRelationship(GetApiRelationship $event)
    {
        if ($event->isRelationship(PostSerializer::class, 'comments')) {
            return $event->serializer->hasMany($event->model, CommentSerializer::class, 'comments');
        }

        if ($event->isRelationship(CommentSerializer::class, 'likes')) {
            return $event->serializer->hasMany($event->model, BasicUserSerializer::class, 'likes');
        }
    }

    /**
     * @param Serializing $event
     */
    public function prepareApiAttributes(Serializing $event)
    {
        if ($event->isSerializer(UserSerializer::class)) {
            $event->attributes['canEditComment'] = $event->actor->can('discussion.comment');
            $event->attributes['canSelfEditComment'] = $event->actor->can('selfEditComment');
        }
    }

    /**
     * @param WillGetData $event
     */
    public function includeRelationship(WillGetData $event)
    {
        if ($event->isController(Controller\ShowDiscussionController::class)) {
            $event->addInclude([
                'posts.comments',
                'posts.comments.user',
                'posts.comments.likes'
            ]);
        }
        if ($event->isController(Controller\ShowPostController::class)
            || $event->isController(Controller\CreatePostController::class)
            || $event->isController(Controller\UpdatePostController::class)
        ) {
            $event->addInclude('comments');
            $event->addInclude('comments.user');
            $event->addInclude('comments.likes');
        }

        if ($event->isController(Controller\ListPostsController::class)) {
            $event->addInclude('comments');
            $event->addInclude('comments.user');
            $event->addInclude('comments.likes');
        }
    }
}
