<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Api\Controller;

use Simonxeko\PostComment\Serializers\CommentSerializer;
use Flarum\Discussion\Command\ReadDiscussion;
use Simonxeko\PostComment\Command\PostComment;
use Simonxeko\PostComment\Floodgate;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class CreateCommentController extends AbstractCreateController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = CommentSerializer::class;

    /**
     * {@inheritdoc}
     */
    public $include = [
        'user',
        'discussion',
        'discussion.posts',
        'discussion.posts.comments'
    ];

    /**
     * @var Dispatcher
     */
    protected $bus;

    /**
     * @var \Simonxeko\PostComment\Floodgate
     */
    protected $floodgate;

    /**
     * @param Dispatcher $bus
     * @param \Simonxeko\PostComment\Floodgate $floodgate
     */
    public function __construct(Dispatcher $bus, Floodgate $floodgate)
    {
        $this->bus = $bus;
        $this->floodgate = $floodgate;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        $data = Arr::get($request->getParsedBody(), 'data', []);
        $discussionId = Arr::get($data, 'relationships.discussion.data.id');
        $postId = Arr::get($data, 'relationships.post.data.id');
        $ipAddress = Arr::get($request->getServerParams(), 'REMOTE_ADDR', '127.0.0.1');

        if (! $request->getAttribute('bypassFloodgate')) {
            $this->floodgate->assertNotFlooding($actor);
        }

        $comment = $this->bus->dispatch(
            new PostComment($discussionId, $postId, $actor, $data, $ipAddress)
        );

        // After replying, we assume that the user has seen all of the posts
        // in the discussion; thus, we will mark the discussion as read if
        // they are logged in.
        /* if ($actor->exists) {
            $this->bus->dispatch(
                new ReadDiscussion($discussionId, $actor, $post->number)
            );
        }*/

        $discussion = $post->discussion;
        $discussion->posts = $discussion->posts()->whereVisibleTo($actor)->orderBy('created_at')->pluck('id');
        $post->comments = $post->comments()->whereVisibleTo($actor)->orderBy('created_at')->pluck('id');

        return $post;
    }
}
