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
    new Extend\Compat(function (Dispatcher $events) {
        $events->subscribe(Listeners\AddPostCommentRelationship::class);
        $events->subscribe(CommentPolicy::class);
        // $events->listen(Saving::class, Listeners\SaveCommentsToDatabase::class);
    }),
];
