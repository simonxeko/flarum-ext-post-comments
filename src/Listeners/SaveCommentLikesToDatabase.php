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

use Simonxeko\PostComments\Events\CommentWasLiked;
use Simonxeko\PostComments\Events\CommentWasUnliked;
use Simonxeko\PostComments\Events\Deleted;
use Simonxeko\PostComments\Events\Saving;
use Flarum\User\AssertPermissionTrait;
use Illuminate\Contracts\Events\Dispatcher;

class SaveCommentLikesToDatabase
{
    use AssertPermissionTrait;

    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Saving::class, [$this, 'whenCommentIsSaving']);
        $events->listen(Deleted::class, [$this, 'whenCommentIsDeleted']);
    }

    /**
     * @param Saving $event
     */
    public function whenCommentIsSaving(Saving $event)
    {
        $comment = $event->comment;
        $data = $event->data;

        if ($comment->exists && isset($data['attributes']['isLiked'])) {
            $actor = $event->actor;
            $liked = (bool) $data['attributes']['isLiked'];

            $this->assertCan($actor, 'like', $comment);

            $currentlyLiked = $comment->likes()->where('user_id', $actor->id)->exists();

            if ($liked && ! $currentlyLiked) {
                $comment->likes()->attach($actor->id);

                $comment->raise(new CommentWasLiked($comment, $actor));
            } elseif ($currentlyLiked) {
                $comment->likes()->detach($actor->id);

                $comment->raise(new CommentWasUnliked($comment, $actor));
            }
        }
    }

    /**
     * @param Deleted $event
     */
    public function whenCommentsIsDeleted(Deleted $event)
    {
        $event->comments->likes()->detach();
    }
}
