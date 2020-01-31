<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Simonxeko\PostComments\Serializers;
use Flarum\Api\Serializer\BasicDiscussionSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\User\Gate;
use Simonxeko\PostComments\Comment;

class CommentSerializer extends BasicCommentSerializer
{
    /**
     * @var \Flarum\User\Gate
     */
    protected $gate;

    /**
     * @param \Flarum\User\Gate $gate
     */
    public function __construct(Gate $gate)
    {
        $this->gate = $gate;
    }

    /**
     * {@inheritdoc}
     */
    protected function getDefaultAttributes($comment)
    {
        $attributes = parent::getDefaultAttributes($comment);

        unset($attributes['content']);

        $gate = $this->gate->forUser($this->actor);

        $canEdit = $this->actor->can('edit', $comment);

        if ($comment instanceof Comment) {
            $attributes['content'] = $comment->content;
            /* if ($gate->allows('viewIps', $comment)) {
                $attributes['ipAddress'] = $comment->ip_address;
            }*/
        }

        if ($comment->updared_at) {
            $attributes['editedAt'] = $this->formatDate($comment->updated_at);
        }

        if ($comment->created_at) {
            $attributes['createdAt'] = $this->formatDate($comment->created_at);
        }

        if ($comment->hidden_at) {
            $attributes['isHidden'] = true;
            $attributes['hiddenAt'] = $this->formatDate($comment->hidden_at);
        }

        $attributes += [
            'canLike' => $this->actor->can('like', $comment),
            'canEdit'   => $canEdit,
            'canDelete' => $this->actor->can('delete', $comment),
            'canHide'   => $this->actor->can('hide', $comment)
        ];

        return $attributes;
    }

    /**
     * @return \Tobscure\JsonApi\Relationship
     */
    protected function user($comment)
    {
        return $this->hasOne($comment, UserSerializer::class);
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
    protected function editedUser($comment)
    {
        return $this->hasOne($post, BasicUserSerializer::class);
    }

    /**
     * @return \Tobscure\JsonApi\Relationship
     */
    protected function hiddenUser($post)
    {
        return $this->hasOne($post, BasicUserSerializer::class);
    }
}
