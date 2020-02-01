<?php

/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

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
        if ($schema->hasTable('comment_flags')) {
            return;
        }
        $schema->create(
            'comment_flags',
            function (Blueprint $table) {
                
                $table->increments('id')->unsigned();
                $table->integer('comment_id')->unsigned();
                $table->string('type');
                $table->integer('user_id')->unsigned()->nullable();
                $table->string('reason')->nullable();
                $table->string('reason_detail')->nullable();
                $table->dateTime('created_at');

                $table->foreign('comment_id')->references('id')->on('comments')->onDelete('cascade');
                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
                $table->index('created_at');
            }
        );
    },
    'down' => function (Builder $schema) {
        $schema->dropIfExists('comment_flags');
    },
];