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
use Flarum\Api\Event\Serializing;
use Flarum\Api\Event\WillGetData;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Post\Post;
use Flarum\Event\GetApiRelationship;
use Flarum\Event\GetModelRelationship;
use Simonxeko\PostComments\Api\Serializers\CommentSerializer;
use Simonxeko\PostComments\Comment;
use Illuminate\Contracts\Events\Dispatcher;

class AddDiscussionPollRelationship
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
            return $event->model->hasMany(Comment::class);
        }
    }

    /**
     * @param GetApiRelationship $event
     *
     * @return \Tobscure\JsonApi\Relationship
     */
    public function getApiRelationship(GetApiRelationship $event)
    {
        if ($event->isRelationship(DiscussionSerializer::class, 'comments')) {
            return $event->serializer->hasMany($event->model, CommentSerializer::class, 'comments');
        }
    }

    /**
     * @param Serializing $event
     */
    public function prepareApiAttributes(Serializing $event)
    {
        if ($event->isSerializer(UserSerializer::class)) {
            $event->attributes['canEditPolls'] = $event->actor->can('discussion.polls');
            $event->attributes['canStartPolls'] = $event->actor->can('startPolls');
            $event->attributes['canSelfEditPolls'] = $event->actor->can('selfEditPolls');
            $event->attributes['canVotePolls'] = $event->actor->can('votePolls');
        }
    }

    /**
     * @param WillGetData $event
     */
    public function includeRelationship(WillGetData $event)
    {
        if ($event->isController(Controller\ShowDiscussionController::class)
            || $event->isController(Controller\CreateDiscussionController::class)
            || $event->isController(Controller\UpdateDiscussionController::class)
        ) {
            $event->addInclude('comments');
            $event->addInclude('comments.options');
            $event->addInclude('comments.votes');
            $event->addInclude('comments.votes.user');
            $event->addInclude('comments.votes.option');
        }

        if ($event->isController(Controller\ListDiscussionsController::class)) {
            $event->addInclude('comments');
        }
    }
}
