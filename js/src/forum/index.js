import { extend } from 'flarum/extend';
import Button from 'flarum/components/Button';
import CommentPost from 'flarum/components/CommentPost';
import DiscussionControls from 'flarum/utils/DiscussionControls';
import CommentComposer from './components/CommentComposer';
import LogInModal from 'flarum/components/LogInModal';
import Model from 'flarum/Model';
import Comment from './models/Comment';
import CommentFlag from './models/CommentFlag';
import CommentsList from './components/CommentsList';
import addFlagsToComment from './addFlagsToComment';

/**
 * TODO:
 *  - Permission
 *  - Hide
 *  - Notification
 *  - Layout adjustment
 * **/ 

function insertMention(post, component, quote) {
  const user = post.user();
  const mention = '@' + (user ? user.username() : post.number()) + '#' + post.id() + ' ';

  // If the composer is empty, then assume we're starting a new reply.
  // In which case we don't want the user to have to confirm if they
  // close the composer straight away.
  if (!component.content()) {
    component.props.originalContent = mention;
  }

  const cursorPosition = component.editor.getSelectionRange()[0];
  const preceding = component.editor.value().slice(0, cursorPosition);
  const precedingNewlines = preceding.length == 0 ? 0 : 3 - preceding.match(/(\n{0,2})$/)[0].length;

  component.editor.insertAtCursor(
    Array(precedingNewlines).join('\n') + // Insert up to two newlines, depending on preceding whitespace
    (quote
      ? '> ' + mention + quote.trim().replace(/\n/g, '\n> ') + '\n\n'
      : mention)
  );
}

function reply(post, quote, context) {
  const component = app.composer.component;
  if (component && component.props.post && component.props.post.discussion() === post.discussion()) {
    insertMention(post, component, quote);
  } else {
    
    if (app.session.user) {
      if (post.discussion().canReply()) {
        let component = app.composer.component;
        if (!app.composingReplyTo(post.discussion()) || forceRefresh) {
          console.log("Add reply composer.", );
          component = new CommentComposer({
            user: app.session.user,
            discussion: post.discussion(),
            post: post,
            to_user: post.user(),
            target_frame: context 
          });
          app.composer.load(component);
        }
        app.composer.show();

        if (app.viewingDiscussion(post.discussion()) && ! app.composer.isFullScreen()) {
          app.current.stream.goToNumber('reply');
        }
      }
    } else {
      app.modal.show(new LogInModal());
    }

  }
} 

app.initializers.add('simonxeko/post-comments', () => {
  console.log('[simonxeko/post-comments] Hello, forum! 123');
  app.store.models.posts.prototype.comments = Model.hasMany('comments');
  app.store.models.posts.prototype.removeComment = function(id) {
    const relationships = this.data.relationships;
    const comments = relationships && relationships.comments;
    if (comments) {
      comments.data.some((data, i) => {
        if (id === data.id) {
          comments.data.splice(i, 1);
          return true;
        }
      });
    }
  };

  app.store.models.comments = Comment;
  app.store.models.comment_flags = CommentFlag;

  extend(CommentPost.prototype, 'actionItems', function (items) {

    const post = this.props.post;

    if (post.isHidden() || (app.session.user && !post.discussion().canReply())) return;

    items.replace('reply',
      Button.component({
        className: 'Button Button--link',
        children: app.translator.trans('flarum-mentions.forum.post.reply_link'),
        onclick: () => reply(post, null, this)
      })
    );
  });

  extend(CommentPost.prototype, 'footerItems', function(items) {
    const post = this.props.post;
    if (post) {
      if (post.data.attributes.contentHtml) {
        const comments = this.props.post.comments();
        if (comments.length > 0) {
          items.add('comments', <CommentsList context={this} discussion={this.props.post.discussion()} post={this.props.post} comments={this.props.post.comments()} />);
        }
      }
    }
  });

  addFlagsToComment();

});
