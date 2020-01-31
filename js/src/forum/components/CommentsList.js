import Component from 'flarum/Component';
import CommentDisplay from './CommentDisplay';
import EditCommentComposer from './EditCommentComposer';

export default class CommentsList extends Component {
  init() {
    super.init();
    // this.comments_data = m.prop(this.props.comments);
  }

  static initProps(props) {
    super.initProps(props);
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
    return <div class="clear: both; border: 1px solid #EEE; border-radius:5px; padding: 15px">
      {
        this.props.comments.map((comment, i) => {
          return <CommentDisplay
            comment={comment}
            editComment={this.editComment.bind(comment, this)}
            deleteComment={this.deleteComment.bind(comment, this)}
          />
        })
      }
    </div>;
  }
}

