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
        if (!$schema->hasColumn('comments', 'updated_at')) {
            $schema->table('comments', function (Blueprint $table) {
                $table->timestamp('updated_at')->after('created_at');
            });
        }
    },
    'down' => function (Builder $schema) {
    },
];