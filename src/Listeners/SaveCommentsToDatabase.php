<?php

/*
 * This file is part of fof/Comments.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Listeners;

use Carbon\Carbon;
use Flarum\Discussion\Event\Saving;
use Flarum\User\AssertPermissionTrait;
use Simonxeko\PostComments\Events\CommentWasCreated;
use Simonxeko\PostComments\Comment;
use Simonxeko\PostComments\Validators\CommentValidator;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class SaveCommentsToDatabase
{
    use AssertPermissionTrait;

    /**
     * @var CommentValidator
     */
    protected $validator;

    /**
     * @var CommentOptionValidator
     */
    protected $optionValidator;

    /**
     * SaveCommentToDatabase constructor.
     *
     * @param Dispatcher          $events
     * @param CommentValidator       $validator
     * @param CommentOptionValidator $optionValidator
     */
    public function __construct(CommentValidator $validator)
    {
        $this->validator = $validator;
    }

    public function handle(Saving $event)
    {
        if ($event->post->exists || !isset($event->data['attributes']['comment'])) {
            return;
        }

        $this->assertCan($event->actor, 'startComments');

        $attributes = $event->data['attributes']['comment'];
        $options = Arr::get($attributes, 'relationships.options', []);

        $this->validator->assertValid($attributes);

        foreach ($options as $option) {
            $this->optionValidator->assertValid(['answer' => $option]);
        }

        $event->discussion->afterSave(function ($discussion) use ($options, $attributes, $event) {
            // $endDate = Arr::get($attributes, 'endDate');

            $Comment = Comment::build(
                Arr::get($attributes, 'comment'),
                $discussion->id,
                $post->id,
                $event->actor->id,
                $endDate !== null ? Carbon::createFromTimeString($endDate) : null,
                Arr::get($attributes, 'publicComment')
            );

            $Comment->save();

            app()->make('events')->fire(new CommentWasCreated($event->actor, $Comment));

            foreach ($options as $answer) {
                if (empty($answer)) {
                    continue;
                }

                $option = CommentOption::build($answer);

                $Comment->options()->save($option);
            }
        });
    }
}
