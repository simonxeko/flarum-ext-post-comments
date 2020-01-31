import Component from 'flarum/Component';
import CommentDisplay from './CommentDisplay';
import EditCommentComposer from './EditCommentComposer';
import CommentComposer from './CommentComposer';

export default class CommentsList extends Component {
  init() {
    super.init();
    // this.comments_data = m.prop(this.props.comments);
  }

  static initProps(props) {
    super.initProps(props);
  }

  
  insertMention(comment, component, quote) {
    const user = comment.user();
    const mention = '@' + (user ? user.username() : ''); // : comment.number()) + '#' + comment.id() + ' ';

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

  likeComment(context) {
    console.log("Comment", this);
    const likes = this.likes();

    let isLiked = app.session.user && likes && likes.some(user => user === app.session.user);

    isLiked = !isLiked;

    this.save({isLiked});

    // We've saved the fact that we do or don't like the comment, but in order
    // to provide instantaneous feedback to the user, we'll need to add or
    // remove the like from the relationship data manually.
    const data = this.data.relationships.likes.data;
    data.some((like, i) => {
      if (like.id === app.session.user.id()) {
        data.splice(i, 1);
        return true;
      }
    });

    if (isLiked) {
      data.unshift({type: 'users', id: app.session.user.id()});
    }
    context.props.context.props.post.freshness = new Date();
    m.redraw();
  }


  replyComment(context) {
    let component = app.composer.component;
    const post = context.props.post;
    if (component && component.props.comment && component.props.comment.id() === this.id()) {
      context.insertMention(comment, component);
    } else {
      if (app.session.user) {
        if (post.discussion().canReply()) {
          component = app.composer.component;
          if (!app.composingReplyTo(post.discussion()) || forceRefresh) {
            console.log("Add reply composer.", );
            component = new CommentComposer({
              user: app.session.user,
              discussion: post.discussion(),
              post: post,
              comment: this,
              to_user: this.user(),
              target_frame: context
            });
            app.composer.load(component);
          }
          app.composer.show();
          context.insertMention(this, component);
  
          if (app.viewingDiscussion(post.discussion()) && ! app.composer.isFullScreen()) {
            app.current.stream.goToNumber('reply');
          }
        }
      } else {
        app.modal.show(new LogInModal());
      }
    }
  } 

  editComment(context) {
    const deferred = m.deferred();

    const component = new EditCommentComposer({ comment: this, post: context.props.post, discussion: context.props.discussion });

    app.composer.load(component);
    app.composer.show();

    deferred.resolve(component);

    return deferred.promise;
  };

  deleteComment(context) {
    console.log("Context", context);
    context.props.context.loading = true;
    m.redraw();
    this.delete().then(() => {
      console.log("context.props.post", context.props.post);
      context.props.context.props.post.removeComment(this.id());
      context.props.context.props.post.data.attributes.content = "wtf";
      context.props.context.props.post.data.attributes.contentHtml = "wtf";
      context.props.context.props.post.freshness = new Date();
    }).then(() => {
      console.log("What?", context.view());
      context.props.context.loading = false;
      m.redraw();
      //m.route.set("/");
    });
  };

  view() {
    return <div class="comments-list">
      {
        this.props.comments.map((comment, i) => {
          return <CommentDisplay
            discussion={this.props.discussion}
            post={this.props.post}
            comment={comment}
            replyComment={this.replyComment.bind(comment, this)}
            likeComment={this.likeComment.bind(comment, this)}
            editComment={this.editComment.bind(comment, this)}
            deleteComment={this.deleteComment.bind(comment, this)}
          />
        })
      }
    </div>;
  }
}

