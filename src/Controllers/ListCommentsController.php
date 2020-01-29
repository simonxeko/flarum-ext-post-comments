<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Controllers;

use Flarum\Api\Controller\AbstractListController;
use Simonxeo\PostComments\Serializers\CommentSerializer;
use Flarum\Event\ConfigurePostsQuery;
use Simonxeko\PostComments\CommentRepository;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Tobscure\JsonApi\Exception\InvalidParameterException;

class ListCommentsController extends AbstractListController
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
        'user.groups',
        'editedUser',
        'hiddenUser',
        'discussion'
    ];

    /**
     * {@inheritdoc}
     */
    public $sortFields = ['createdAt'];

    /**
     * @var \Simonxeko\PostComments\CommentRepository
     */
    protected $comments;

    /**
     * @param \Simonxeko\PostComments\CommentRepository $comments
     */
    public function __construct(CommentRepository $comments)
    {
        $this->comments = $comments;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        $filter = $this->extractFilter($request);
        $include = $this->extractInclude($request);

        if ($postIds = Arr::get($filter, 'id')) {
            $postIds = explode(',', $postIds);
        } else {
            $postIds = $this->getPostIds($request);
        }

        $comments = $this->comments->findByIds($postIds, $actor);

        return $comments->load($include);
    }

    /**
     * {@inheritdoc}
     */
    protected function extractOffset(ServerRequestInterface $request)
    {
        $actor = $request->getAttribute('actor');
        $queryParams = $request->getQueryParams();
        $sort = $this->extractSort($request);
        $limit = $this->extractLimit($request);
        $filter = $this->extractFilter($request);

        if (($near = Arr::get($queryParams, 'page.near')) > 1) {
            if (count($filter) > 1 || ! isset($filter['discussion']) || $sort) {
                throw new InvalidParameterException(
                    'You can only use page[near] with filter[discussion] and the default sort order'
                );
            }

            $offset = $this->comments->getIndexForNumber($filter['discussion'], $near, $actor);

            return max(0, $offset - $limit / 2);
        }

        return parent::extractOffset($request);
    }

    /**
     * @param ServerRequestInterface $request
     * @return array
     * @throws InvalidParameterException
     */
    private function getPostIds(ServerRequestInterface $request)
    {
        $filter = $this->extractFilter($request);
        $sort = $this->extractSort($request);
        $limit = $this->extractLimit($request);
        $offset = $this->extractOffset($request);

        $query = $this->comments->query();

        $this->applyFilters($query, $filter);

        $query->skip($offset)->take($limit);

        foreach ((array) $sort as $field => $order) {
            $query->orderBy(Str::snake($field), $order);
        }

        return $query->pluck('id')->all();
    }

    /**
     * @param Builder $query
     * @param array $filter
     */
    private function applyFilters(Builder $query, array $filter)
    {
        if ($discussionId = Arr::get($filter, 'discussion')) {
            $query->where('discussion_id', $discussionId);
        }

        if ($number = Arr::get($filter, 'number')) {
            $query->where('number', $number);
        }

        if ($userId = Arr::get($filter, 'user')) {
            $query->where('user_id', $userId);
        }

        if ($type = Arr::get($filter, 'type')) {
            $query->where('type', $type);
        }

        event(new ConfigurePostsQuery($query, $filter));
    }
}
