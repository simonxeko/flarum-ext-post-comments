<?php

/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Controllers;

use Flarum\Api\Controller\AbstractListController;
use Simonxeko\PostComments\Serializers\CommentFlagSerializer;
use Simonxeko\PostComments\CommentFlag;
use Flarum\User\AssertPermissionTrait;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ListFlagsController extends AbstractListController
{
    use AssertPermissionTrait;

    /**
     * {@inheritdoc}
     */
    public $serializer = CommentFlagSerializer::class;

    /**
     * {@inheritdoc}
     */
    public $include = [
        'user',
        'comment',
        'comment.user',
        'comment.discussion'
    ];

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');

        $this->assertRegistered($actor);

        $actor->read_flags_at = time();
        $actor->save();

        return CommentFlag::whereVisibleTo($actor)
            ->with($this->extractInclude($request))
            ->latest('comment_flags.created_at')
            ->groupBy('comment_id')
            ->get();
    }
}
