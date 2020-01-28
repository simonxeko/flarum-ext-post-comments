<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Commands;

use Flarum\Foundation\DispatchEventsTrait;
use Simonxeko\PostComments\Comment;
use Simonxeko\PostComments\Event\Saving;
use Simonxeko\PostComments\CommentRepository;
use Simonxeko\PostComments\CommentValidator;
use Flarum\User\AssertPermissionTrait;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class EditCommentHandler
{
    use DispatchEventsTrait;
    use AssertPermissionTrait;

    /**
     * @var \Flarum\Comment\CommentRepository
     */
    protected $comments;

    /**
     * @var \Flarum\Comment\CommentValidator
     */
    protected $validator;

    /**
     * @param Dispatcher $events
     * @param CommentRepository $comments
     * @param \Flarum\Comment\CommentValidator $validator
     */
    public function __construct(Dispatcher $events, CommentRepository $comments, CommentValidator $validator)
    {
        $this->events = $events;
        $this->Comments = $comments;
        $this->validator = $validator;
    }

    /**
     * @param EditComment $command
     * @return \Flarum\Comment\Comment
     * @throws \Flarum\User\Exception\PermissionDeniedException
     */
    public function handle(EditComment $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $Comment = $this->Comments->findOrFail($command->CommentId, $actor);

        if ($Comment instanceof CommentComment) {
            $attributes = Arr::get($data, 'attributes', []);

            if (isset($attributes['content'])) {
                $this->assertCan($actor, 'edit', $Comment);

                $Comment->revise($attributes['content'], $actor);
            }

            if (isset($attributes['isHidden'])) {
                $this->assertCan($actor, 'hide', $Comment);

                if ($attributes['isHidden']) {
                    $Comment->hide($actor);
                } else {
                    $Comment->restore();
                }
            }
        }

        $this->events->dispatch(
            new Saving($Comment, $actor, $data)
        );

        $this->validator->assertValid($Comment->getDirty());

        $Comment->save();

        $this->dispatchEventsFor($Comment, $actor);

        return $Comment;
    }
}
