<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Simonxeko\PostComments;

use Flarum\Foundation\AbstractValidator;

class CommentValidator extends AbstractValidator
{
    protected $rules = [
        'content' => [
            'required',
            'max:65535'
        ]
    ];
}
