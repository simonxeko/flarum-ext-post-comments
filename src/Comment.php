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
use Flarum\Database\ScopeVisibilityTrait;
use Flarum\Discussion\Discussion;
# use Flarum\Events\GetModelIsPrivate;
use Simonxeko\PostComments\Events\Revised;
use Flarum\Foundation\EventGeneratorTrait;
use Flarum\Post\Post;
use Flarum\User\User;
use Carbon\Carbon;
use Simonxeko\PostComments\Events\Posted;

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
    use EventGeneratorTrait;
    use ScopeVisibilityTrait;
    /**
     * {@inheritdoc}
     */
    public $timestamps = true;

    protected $dates = [
        'created_at',
        'updated_at',
        'hidden_at'
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
        $comment = new static();

        $comment->content = $content;
        $comment->discussion_id = $discussionId;
        $comment->post_id = $postId;
        $comment->user_id = $actorId;

        return $comment;
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

    /**
     * Create a new instance in reply to a discussion.
     *
     * @param int $discussionId
     * @param string $content
     * @param int $userId
     * @param string $ipAddress
     * @return static
     */
    public static function reply($discussionId, $postId, $content, $userId, $ipAddress)
    {
        $comment = new static;

        $comment->created_at = Carbon::now();
        $comment->discussion_id = $discussionId;
        $comment->post_id = $postId;
        $comment->user_id = $userId;
        #$comment->type = static::$type;
        # $comment->ip_address = $ipAddress;

        // Set content last, as the parsing may rely on other post attributes.
        $comment->content = $content;

        $comment->raise(new Posted($comment));

        return $comment;
    }

    /**
     * Revise the post's content.
     *
     * @param string $content
     * @param User $actor
     * @return $this
     */
    public function revise($content, User $actor)
    {
        // TODO add permission check
        if ($this->content !== $content) {
            $this->content = $content;

            $this->updated_at = Carbon::now();
            # $this->edited_user_id = $actor->id;

            $this->raise(new Revised($this));
        }

        return $this;
    }

    /**
     * Hide the post's content.
     *
     * @param User $actor
     * @return $this
     */
    public function hide(User $actor)
    {
        $this->hidden_at = Carbon::now();
        return $this;
    }

    /**
     * Restore the post's content.
     *
     * @param User $actor
     * @return $this
     */
    public function restore()
    {
        $this->hidden_at = null;
        return $this;
    }
}
