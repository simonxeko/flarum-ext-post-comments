<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Controllers;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\Api\Serializer\PostSerializer;
use Simonxeko\PostComments\CommentsRepository;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ShowPostController extends AbstractShowController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = PostSerializer::class;

    /**
     * {@inheritdoc}
     */
    public $include = [
        'user',
        'user.groups',
        'editedUser',
        'hiddenUser',
        'discussion'
    ];

    /**
     * @var \Simonxeko\PostComments\CommentsRepository
     */
    protected $comments;

    /**
     * @param \Simonxeko\PostComments\CommentsRepository $comments
     */
    public function __construct(CommentsRepository $comments)
    {
        $this->comments = $comments;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        return $this->comments->findOrFail(Arr::get($request->getQueryParams(), 'id'), $request->getAttribute('actor'));
    }
}
