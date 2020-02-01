<?php

/*
 * This file is part of simonxeko/post-threads.
 *
 * Copyright (c) 2020 simonxeko.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Simonxeko\PostComments;
use Illuminate\Events\Dispatcher;
use Simonxeko\PostComments\CommentPolicy;

use Simonxeko\PostComments\Controllers\CreateCommentFlagController;
use Simonxeko\PostComments\Controllers\DeleteCommentFlagsController;
use Simonxeko\PostComments\Controllers\ListCommentFlagsController;
use Simonxeko\PostComments\Listeners\AddFlagsApiAttributes;
use Simonxeko\PostComments\Listeners\AddFlagsApiDates;
use Simonxeko\PostComments\Listeners\AddCommentFlagsRelationship;

// use Flarum\Discussion\Event\Saving; ??
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    (new Extend\Routes('api'))
        ->get('/comments','comments.index', Controllers\ListCommentsController::class)
        ->post('/comments','comments.create', Controllers\CreateCommentController::class)
        ->get('/comments/{id}','comments.show', Controllers\ShowCommentController::class)
        ->patch('/comments/{id}','comments.update', Controllers\UpdateCommentController::class)
        ->delete('/comments/{id}', 'comments.delete', Controllers\DeleteCommentController::class),
    (new Extend\Routes('api'))
        ->get('/comment_flags', 'comment_flags.index', ListCommentFlagsController::class)
        ->post('/comment_flags', 'comment_flags.create', CreateCommentFlagController::class)
        ->delete('/comments/{id}/comment_flags', 'comment_flags.delete', DeleteCommentFlagsController::class),
    new Extend\Compat(function (Dispatcher $events) {
        $events->subscribe(Listeners\AddPostCommentRelationship::class);
        $events->subscribe(Listeners\SaveCommentLikesToDatabase::class);
        $events->listen(ConfigureModelDates::class, AddCommentFlagsApiDates::class);
        $events->listen(Serializing::class, AddCommentFlagsApiAttributes::class);
        $events->subscribe(AddCommentFlagsRelationship::class);
        $events->subscribe(CommentPolicy::class);
    }),
];
