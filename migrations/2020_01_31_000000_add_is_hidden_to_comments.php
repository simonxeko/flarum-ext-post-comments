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
        if (!$schema->hasColumn('comments', 'is_hidden')) {
            $schema->table('comments', function (Blueprint $table) {
                $table->boolean('is_hidden');
            });
        }
        $schema->table('comment_likes', function (Blueprint $table) {
            $table->primary(['comment_id', 'user_id']);
        });
    },
    'down' => function (Builder $schema) {
    },
];