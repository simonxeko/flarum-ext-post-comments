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
        if ($schema->hasTable('comments')) {
            return;
        }

        $schema->create(
            'comments',
            function (Blueprint $table) {
                $table->increments('id');

                $table->integer('discussion_id')->unsigned();
                $table->integer('post_id')->unsigned();
                $table->integer('number')->unsigned()->nullable();
                $table->integer('user_id')->unsigned()->nullable();
                $table->string('content');
                $table->timestamp('created_at');

                $table->boolean('is_hidden');

                $table->foreign('discussion_id')->references('id')->on('discussions')->onDelete('cascade');
                $table->foreign('post_id')->references('id')->on('posts')->onDelete('cascade');
                $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
                $table->primary('id');
            }
        );
    },
    'down' => function (Builder $schema) {
        $schema->dropIfExists('comments');
    },
];