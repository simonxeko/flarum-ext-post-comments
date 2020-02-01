<?php

/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Commands;

use Simonxeko\PostComments\CommentFlag;
use Simonxeko\PostComments\Comment;
use Simonxeko\PostComments\CommentRepository;
use Flarum\User\AssertPermissionTrait;
use Tobscure\JsonApi\Exception\InvalidParameterException;

class CreateFlagHandler
{
    use AssertPermissionTrait;

    /**
     * @var CommentRepository
     */
    protected $comments;

    /**
     * @param CommentRepository $comments
     */
    public function __construct(CommentRepository $comments)
    {
        $this->comments = $comments;
    }

    /**
     * @param CreateFlag $command
     * @return Flag
     * @throws InvalidParameterException
     */
    public function handle(CreateFlag $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $postId = array_get($data, 'relationships.post.data.id');
        $comment = $this->comments->findOrFail($postId, $actor);

        if (! ($comment instanceof Comment)) {
            throw new InvalidParameterException;
        }

        $this->assertCan($actor, 'flag', $comment);

        Flag::unguard();

        $flag = Flag::firstOrNew([
            'comment_id' => $comment->id,
            'user_id' => $actor->id
        ]);

        $flag->comment_id = $comment->id;
        $flag->user_id = $actor->id;
        $flag->type = 'user';
        $flag->reason = array_get($data, 'attributes.reason');
        $flag->reason_detail = array_get($data, 'attributes.reasonDetail');
        $flag->created_at = time();

        $flag->save();

        return $flag;
    }
}
