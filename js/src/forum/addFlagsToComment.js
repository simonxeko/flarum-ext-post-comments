import { extend } from 'flarum/extend';
import app from 'flarum/app';
import Comment from './components/Comment';
import Button from 'flarum/components/Button';
import ItemList from 'flarum/utils/ItemList';
import PostControls from 'flarum/utils/PostControls';


export default function() {
  extend(Comment.prototype, 'attrs', function(attrs) {
    if (this.props.post.comment_flags().length) {
      attrs.className += ' Comment--flagged';
    }
  });

  Comment.prototype.dismissFlag = function(data) {
    const comment = this.props.comment;

    delete comment.data.relationships.comment_flags;

    this.props.post.freshness = new Date();

    if (app.cache.comment_flags) {
      app.cache.comment_flags.some((flag, i) => {
        if (flag.comment() === comment) {
          app.cache.comment_flags.splice(i, 1);

          if (app.cache.flagIndex === comment) {
            let next = app.cache.comment_flags[i];

            if (!next) next = app.cache.comment_flags[0];

            if (next) {
              const nextPost = next.comment();
              app.cache.flagIndex = nextPost;
              m.route(app.route.comment(nextPost));
            }
          }

          return true;
        }
      });
    }

    m.redraw();

    return app.request({
      url: app.forum.attribute('apiUrl') + comment.apiEndpoint() + '/comment_flags',
      method: 'DELETE',
      data
    });
  };

  Comment.prototype.flagActionItems = function() {
    const items = new ItemList();

    const controls = PostControls.destructiveControls(this.props.post);

    Object.keys(controls.items).forEach(k => {
      const props = controls.get(k).props;

      props.className = 'Button';

      extend(props, 'onclick', () => this.dismissFlag());
    });

    items.add('controls', (
      <div className="ButtonGroup">
        {controls.toArray()}
      </div>
    ));

    items.add('dismiss', (
      <Button className="Button" icon="far fa-eye-slash" onclick={this.dismissFlag.bind(this)}>
        {app.translator.trans('flarum-flags.forum.post.dismiss_flag_button')}
      </Button>
    ), -100);

    return items;
  };

  extend(Comment.prototype, 'content', function(vdom) {
    const post = this.props.post;
    const flags = post.flags();

    if (!flags.length) return;

    if (post.isHidden()) this.revealContent = true;

    vdom.unshift(
      <div className="Comment-flagged">
        <div className="Comment-flagged-flags">
          {flags.map(flag =>
            <div className="Comment-flagged-flag">
              {this.flagReason(flag)}
            </div>
          )}
        </div>
        <div className="Comment-flagged-actions">
          {this.flagActionItems().toArray()}
        </div>
      </div>
    );
  });

  Comment.prototype.flagReason = function(flag) {
    if (flag.type() === 'user') {
      const user = flag.user();
      const reason = flag.reason();
      const detail = flag.reasonDetail();

      return [
        app.translator.trans(reason ? 'flarum-flags.forum.post.flagged_by_with_reason_text' : 'flarum-flags.forum.post.flagged_by_text', {user, reason}),
        detail ? <span className="Comment-flagged-detail">{detail}</span> : ''
      ];
    }
  };
}
