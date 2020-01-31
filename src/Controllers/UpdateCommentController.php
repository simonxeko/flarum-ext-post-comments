<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Controllers;

use Flarum\Api\Controller\AbstractShowController;
use Simonxeko\PostComments\Serializers\CommentSerializer;
use Simonxeko\PostComments\Commands\EditComment;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class UpdateCommentController extends AbstractShowController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = CommentSerializer::class;

    /**
     * {@inheritdoc}
     */
    public $include = [
        'editedUser',
        'discussion'
    ];

    /**
     * @var Dispatcher
     */
    protected $bus;

    /**
     * @param Dispatcher $bus
     */
    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $id = Arr::get($request->getQueryParams(), 'id');
        $actor = $request->getAttribute('actor');
        $data = Arr::get($request->getParsedBody(), 'data', []);
        return $this->bus->dispatch(
            new EditComment($id, $actor, $data)
        );
    }
}
