<?php

/*
 * This file is part of fof/follow-tags.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

use Flarum\Database\Migration;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;


return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('comment_likes')) {
            return;
        }

        $schema->create(
            'comment_likes',
            function (Blueprint $table) {
                $table->integer('comment_id')->unsigned();
                $table->integer('user_id')->unsigned();
                $table->primary(['comment_id', 'user_id']);
                $table->foreign('comment_id')->references('id')->on('comments')->onDelete('cascade');
                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            }
        );
    },
    'down' => function (Builder $schema) {
        $schema->dropIfExists('comment_likes');
    },
];