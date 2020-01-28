<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Serializers;

use Simonxeko\PostComments\Comment;
use Flarum\Api\Serializer\AbstractSerializer;
use InvalidArgumentException;

class BasicPostSerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'posts';

    /**
     * {@inheritdoc}
     *
     * @param \Simonxeko\PostComments\Comment $comment
     * @throws InvalidArgumentException
     */
    protected function getDefaultAttributes($comment)
    {
        if (! ($comment instanceof Post)) {
            throw new InvalidArgumentException(
                get_class($this).' can only serialize instances of '.Post::class
            );
        }

        $attributes = [
            'number'      => (int) $comment->number,
            'createdAt'   => $this->formatDate($comment->created_at),
            'contentType' => $comment->type
        ];

        if ($comment instanceof Comment) {
            $attributes['contentHtml'] = $comment->formatContent($this->request);
        } else {
            $attributes['content'] = $comment->content;
        }

        return $attributes;
    }

    /**
     * @return \Tobscure\JsonApi\Relationship
     */
    protected function user($comment)
    {
        return $this->hasOne($comment, BasicUserSerializer::class);
    }

    /**
     * @return \Tobscure\JsonApi\Relationship
     */
    protected function discussion($comment)
    {
        return $this->hasOne($comment, BasicDiscussionSerializer::class);
    }

    /**
     * @return \Tobscure\JsonApi\Relationship
     */
    protected function post($comment)
    {
        return $this->hasOne($comment, BasicDiscussionSerializer::class);
    }
}
