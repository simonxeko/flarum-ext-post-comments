import { extend } from 'flarum/extend';
import Button from 'flarum/components/Button';
import Comment from './models/Comment';
import CommentPost from 'flarum/components/CommentPost';
import DiscussionControls from 'flarum/utils/DiscussionControls';
import CommentComposer from './components/CommentComposer';
import LogInModal from 'flarum/components/LogInModal';
import Post from 'flarum/components/Post';
import listItems from 'flarum/helpers/listItems';
import Model from 'flarum/Model';
import humanTime from 'flarum/helpers/humanTime';
import avatar from 'flarum/helpers/avatar';

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

function reply(post, quote) {
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
            to_user: post.user() 
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

  extend(CommentPost.prototype, 'actionItems', function (items) {

    const post = this.props.post;

    if (post.isHidden() || (app.session.user && !post.discussion().canReply())) return;

    items.replace('reply',
      Button.component({
        className: 'Button Button--link',
        children: app.translator.trans('Comment'),
        onclick: () => reply(post)
      })
    );
  });

  extend(CommentPost.prototype, 'footerItems', function(items) {
    console.log("who is me?", this);
    const post = this.props.post;
    const deleteComment = function(context) {
      context.loading = true;
      this.delete().then(() => {
        post.removeComment(this.id());
      }).then(() => {
        context.loading = false;
        m.redraw();
      });
    };
    // app.current.stream.update().then(() => app.current.stream.goToNumber(post.number()));
    const commentDisplay = (comment) => {
      const userId = comment.data.relationships.user.data.id;
      const user = app.store.data.users[userId];
      return (<div style="border-bottom: 1px solid #EEE; padding: 15px 0;">
        <div style="float: left; padding-right: 15px;">
          {avatar(user, {style: "width: 32px; height: 32px;"})}
        </div>
        <div>
          <strong>{user.data.attributes.displayName}</strong>
          <span>&nbsp;&nbsp;</span>
          <em>{humanTime(comment.data.attributes.createdAt)}</em>
        </div>
        <div>
          <div>
            {comment.data.attributes.content}
          </div>
          <Button className={`Button Button--link`} icon="fas fa-comment">
            Like
          </Button>
          <Button className={`Button Button--link`} icon="fas fa-pencil-alt">
            Edit
          </Button>
          <Button className={`Button Button--link`} icon="fas fa-trash" onclick={deleteComment.bind(comment, this)}>
            Delete
          </Button>
          <Button className={`Button Button--link`} icon="fas fa-eye-slash">
            Hide
          </Button>
        </div>
      </div>);
    };
    if (post) {
      if (post.data.attributes.contentHtml) {
        const postLength = post.data.attributes.contentHtml.replace(/<[^>]*>?/gm, '').length;
        const authorID = parseInt(this.props.post.data.relationships.user.data.id);
        //const comment = this.props.post.data.relationships.comment;
        const comments = this.props.post.comments();
        // console.log("comments()", post.comments());
        if (comments.length > 0) {
          /* items.add('comments', <Button className={`Button`} icon="fas fa-comment">
            {comments.data.length}
          </Button>);*/
          items.add('comments', <div style="clear: both; border: 1px solid #EEE; border-radius:5px; padding: 15px">
            {comments.map((comment, i) => {
              return commentDisplay(comment);
            })}
          </div>);
        }
      }
    }
  });

});
