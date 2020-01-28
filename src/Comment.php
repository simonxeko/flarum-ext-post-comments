<?php

/*
 * This file is part of fof/polls.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Simonxeko\PostComments;

use Flarum\Database\AbstractModel;
use Flarum\Discussion\Discussion;
use Flarum\Post\Post;
use Flarum\User\User;

/**
 * @property int $id
 * @property string $question
 * @property bool $public_poll
 * @property Discussion $discussion
 * @property USer $user
 * @property int $discussion_id
 * @property int $user_id
 * @property \Carbon\Carbon $end_date
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
class Comment extends AbstractModel
{
    /**
     * {@inheritdoc}
     */
    public $timestamps = true;

    protected $dates = [
        'created_at'
    ];

    /**
     * @param $content
     * @param $discussionId
     * @param $postId
     * @param $actorId
     *
     * @return static
     */
    public static function build($content, $discussionId, $postId, $actorId)
    {
        $poll = new static();

        $poll->content = $content;
        $poll->discussion_id = $discussionId;
        $poll->post_id = $postId;
        $poll->user_id = $actorId;

        return $poll;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function discussion()
    {
        return $this->belongsTo(Discussion::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
