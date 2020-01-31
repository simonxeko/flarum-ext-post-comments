import ComposerBody from 'flarum/components/ComposerBody';
import Alert from 'flarum/components/Alert';
import Button from 'flarum/components/Button';
import icon from 'flarum/helpers/icon';
import extractText from 'flarum/utils/extractText';

function minimizeComposerIfFullScreen(e) {
  if (app.composer.isFullScreen()) {
    app.composer.minimize();
    e.stopPropagation();
  }
}

/**
 * The `CommentComposer` component displays the composer content for replying to a
 * discussion.
 *
 * ### Props
 *
 * - All of the props of ComposerBody
 * - `discussion`
 */
export default class CommentComposer extends ComposerBody {
  init() {
    super.init();

    this.editor.props.preview = e => {
      minimizeComposerIfFullScreen(e);

      m.route(app.route.discussion(this.props.discussion, 'reply'));
    };
  }

  static initProps(props) {
    super.initProps(props);

    props.placeholder = props.placeholder || extractText(app.translator.trans('core.forum.composer_reply.body_placeholder'));
    props.submitLabel = props.submitLabel || app.translator.trans('core.forum.composer_reply.submit_button');
    props.confirmExit = props.confirmExit || extractText(app.translator.trans('core.forum.composer_reply.discard_confirmation'));
  }

  headerItems() {
    const items = super.headerItems();
    const discussion = this.props.discussion;
    const post = this.props.post;
    const comment = this.props.comment;
    const to_user = this.props.to_user;

    const routeAndMinimize = function(element, isInitialized) {
      if (isInitialized) return;
      $(element).on('click', minimizeComposerIfFullScreen);
      m.route.apply(this, arguments);
    };

    items.add('title', (
      <h3>
        {icon('fas fa-reply')} {' '}
        <a href={app.route.post(post)} config={routeAndMinimize}>@{to_user.displayName()} #{comment ? comment.id() : post.id()}</a>
      </h3>
    ));

    return items;
  }

  /**
   * Get the data to submit to the server when the reply is saved.
   *
   * @return {Object}
   */
  data() {
    return {
      content: this.content(),
      relationships: {
          discussion: this.props.discussion,
          post: this.props.post
      }
    };
  }

  onsubmit() {
    const discussion = this.props.discussion;
    const post = this.props.post;
    const target_frame = this.props.target_frame;

    if (target_frame) target_frame.loading = true;
    this.loading = true;
    m.redraw();

    const data = this.data();

    app.store.createRecord('comments').save(data).then(
      comment => {
        // If we're currently viewing the discussion which this reply was made
        // in, then we can update the comment stream and scroll to the comment.
        if (app.viewingDiscussion(discussion)) {
          app.current.stream.update().then(() => app.current.stream.goToNumber(comment.number())).then(() => { if(target_frame) {target_frame.loading = false;} m.redraw(); } );

        } else {
          // Otherwise, we'll create an alert message to inform the user that
          // their reply has been posted, containing a button which will
          // transition to their new comment when clicked.
          let alert;
          const viewButton = Button.component({
            className: 'Button Button--link',
            children: app.translator.trans('core.forum.composer_reply.view_button'),
            onclick: () => {
                /// TODODODODOO
                /// TODODODODOO
                /// TODODODODOO
                /// TODODODODOO
                /// Replace to comment? (Works for display..)
              m.route(app.route.post(post));
              app.alerts.dismiss(alert);
            }
          });
          app.alerts.show(
            alert = new Alert({
              type: 'success',
              message: app.translator.trans('core.forum.composer_reply.posted_message'),
              controls: [viewButton]
            })
          );
          if (target_frame) target_frame.loading = false;
        }

        app.composer.hide();
      },
      this.loaded.bind(this)
    );
  }
}
