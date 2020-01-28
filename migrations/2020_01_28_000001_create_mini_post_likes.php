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
        if ($schema->hasTable('comment-likes')) {
            return;
        }

        $schema->create(
            'comment-likes',
            function (Blueprint $table) {
                $table->integer('mini_post_id')->unsigned();
                $table->integer('user_id')->unsigned()->nullable();
                $table->foreign('mini_post_id')->references('id')->on('comment-likes')->onDelete('cascade');
                $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
                $table->primary(['mini_post_id', 'user_id']);
            }
        );
    },
    'down' => function (Builder $schema) {
        $schema->dropIfExists('comment-likes');
    },
];