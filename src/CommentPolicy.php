<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Simonxeko\PostComments;

use Carbon\Carbon;
use Flarum\Discussion\Discussion;
use Flarum\Event\ScopeModelVisibility;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\AbstractPolicy;
use Flarum\User\User;
use Flarum\User\Guest;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Database\Eloquent\Builder;

class CommentPolicy extends AbstractPolicy
{
    /**
     * {@inheritdoc}
     */
    protected $model = Comment::class;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var Dispatcher
     */
    protected $events;

    /**
     * @param SettingsRepositoryInterface $settings
     * @param Dispatcher $events
     */
    public function __construct(SettingsRepositoryInterface $settings, Dispatcher $events)
    {
        $this->settings = $settings;
        $this->events = $events;
    }

    /**
     * @param User $actor
     * @param string $ability
     * @param \Flarum\Post\Post $post
     * @return bool|null
     */
    public function can(User $actor, $ability, Comment $comment)
    {
        if ($actor->can($ability.'Comments', $comment->discussion)) {
            return true;
        }
    }

    /**
     * @param User $actor
     * @param Builder $query
     */
    public function find(User $actor, $query)
    {
        // Make sure the post's discussion is visible as well.
        $query->whereExists(function ($query) use ($actor) {
            $query->selectRaw('1')
                ->from('discussions')
                ->whereColumn('discussions.id', 'posts.discussion_id');

            $this->events->dispatch(
                new ScopeModelVisibility(Discussion::query()->setQuery($query), $actor, 'view')
            );
        });

        // Hide private posts by default.
        $query->where(function ($query) use ($actor) {
            $query->where('posts.is_private', false)
                ->orWhere(function ($query) use ($actor) {
                    $this->events->dispatch(
                        new ScopeModelVisibility($query, $actor, 'viewPrivate')
                    );
                });
        });

        // Hide hidden posts, unless they are authored by the current user, or
        // the current user has permission to view hidden posts in the
        // discussion.
        if (! $actor->hasPermission('discussion.hidePosts')) {
            $query->where(function ($query) use ($actor) {
                $query->whereNull('posts.hidden_at')
                    ->orWhere('posts.user_id', $actor->id)
                    ->orWhereExists(function ($query) use ($actor) {
                        $query->selectRaw('1')
                            ->from('discussions')
                            ->whereColumn('discussions.id', 'posts.discussion_id')
                            ->where(function ($query) use ($actor) {
                                $query
                                    ->whereRaw('1=0')
                                    ->orWhere(function ($query) use ($actor) {
                                        $this->events->dispatch(
                                            new ScopeModelVisibility(Discussion::query()->setQuery($query), $actor, 'hidePosts')
                                        );
                                    });
                            });
                    });
            });
        }
    }

    /**
     * @param User $actor
     * @param Comment $post
     * @return bool|null
     */
    public function edit(User $actor, Comment $comment)
    {
        // A post is allowed to be edited if the user is the author, the post
        // hasn't been deleted by someone else, and the user is allowed to
        // create new replies in the discussion.
        if ($comment->user_id == $actor->id && (! $comment->hidden_at || $comment->hidden_user_id == $actor->id)) {
            // $allowEditing = $this->settings->get('allow_post_editing');
            $comment_is_last =  $comment->number >= $comment->discussion->last_post_number;
            return true;
            if ($allowEditing === '-1') {
                // || ($post->created_at->diffInMinutes(new Carbon) < $allowEditing)) {
                return true;
            }
        }
    }

    /**
     * @param User $actor
     * @param Comment $post
     * @return bool|null
     */
    public function delete(User $actor, Comment $comment)
    {
        // A post is allowed to be edited if the user is the author, the post
        // hasn't been deleted by someone else, and the user is allowed to
        // create new replies in the discussion.
        if ($comment->user_id == $actor->id && (! $comment->hidden_at || $comment->hidden_user_id == $actor->id)) {
            // $allowEditing = $this->settings->get('allow_post_editing');
            $comment_is_last =  $comment->number >= $comment->discussion->last_post_number;
            return true;
            if ($allowEditing === '-1') {
                // || ($post->created_at->diffInMinutes(new Carbon) < $allowEditing)) {
                return true;
            }
        }
    }

    /**
     * @param User $actor
     * @param Comment $post
     * @return bool|null
     */
    public function like(User $actor, Comment $post)
    {
        return !($actor instanceof Guest);
    }
}
