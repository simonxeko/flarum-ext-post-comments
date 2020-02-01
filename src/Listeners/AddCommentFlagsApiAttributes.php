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

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\CurrentUserSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Api\Serializer\CommentSerializer;
use Simonxeko\PostComments\CommentFlag;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;

class AddFlagsApiAttributes
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function handle(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
            $event->attributes['canViewFlags'] = $event->actor->hasPermissionLike('discussion.viewFlags');

            if ($event->attributes['canViewFlags']) {
                $event->attributes['flagCount'] = (int) $this->getFlagCount($event->actor);
            }

            $event->attributes['guidelinesUrl'] = $this->settings->get('flarum-flags.guidelines_url');
        }

        if ($event->isSerializer(CurrentUserSerializer::class)) {
            $event->attributes['newFlagCount'] = (int) $this->getNewFlagCount($event->model);
        }

        if ($event->isSerializer(CommentSerializer::class)) {
            $event->attributes['canFlag'] = $event->actor->can('flag', $event->model);
        }
    }

    /**
     * @param User $actor
     * @return int
     */
    protected function getFlagCount(User $actor)
    {
        return CommentFlag::whereVisibleTo($actor)->distinct()->count('comment_flags.comment_id');
    }

    /**
     * @param User $actor
     * @return int
     */
    protected function getNewFlagCount(User $actor)
    {
        $query = CommentFlag::whereVisibleTo($actor);

        if ($time = $actor->read_flags_at) {
            $query->where('comment_flags.created_at', '>', $time);
        }

        return $query->distinct()->count('comment_flags.comment_id');
    }
}
