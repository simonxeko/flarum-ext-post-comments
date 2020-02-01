import Component from 'flarum/Component';
import Button from 'flarum/components/Button';
import humanTime from 'flarum/helpers/humanTime';
import avatar from 'flarum/helpers/avatar';

export default class Comment extends Component {
  init() {
    super.init();
  }

  static initProps(props) {
    super.initProps(props);
  }

  renderCommentFlag(comment_flag) {
    return (<span>
      因 {comment_flag.reason() || comment_flag.reasonDetail()} 被 {comment_flag.user().displayName()} 標記
      <Button className={`Button Button--link`} icon="fas fa-eye-slash" onclick={this.dismissFlag.bind(this)}>
          {app.translator.trans('flarum-flags.forum.post.dismiss_flag_button')}
      </Button>
    </span>);
  }

  view() {
      const comment = this.props.comment;
      const user = comment.user();
      const likes = comment.likes();
      const isLiked = app.session.user && likes && likes.some(user => user === app.session.user);
      const comment_flags = comment.comment_flags();
      console.log("Flags", comment, likes, comment_flags);
      return (<div className="comment-item">
        <div>
          <div className="comment-avatar">
              {avatar(user, {style: "width: 32px; height: 32px;"})}
          </div>
          <div className="comment-content">
            <strong>{user.data.attributes.displayName}</strong>
            <span>&nbsp;&nbsp;</span>
            <em>{humanTime(comment.data.attributes.createdAt)}</em>
            <span>&nbsp;&nbsp;</span>
            <strong style="color: #660000">{ comment_flags.length > 0 ? this.renderCommentFlag(comment_flags[0]) : ''}</strong>
            <div>{comment.data.attributes.content}</div>
            { comment.data.attributes.canLike ? (
              <Button className={`Button Button--link`} icon={isLiked ? "fas fa-thumbs-up" : "far fa-thumbs-up"} onclick={this.props.likeComment}>
                {likes.length > 0 ? likes.length : app.translator.trans('flarum-likes.forum.post.like_link') }
              </Button>) : ''}
            <div class="comment-actions">
              { comment.data.attributes.canEdit ? (
                <Button className={`Button Button--link`} icon="fas fa-pencil-alt" onclick={this.props.editComment}>
                  {app.translator.trans('core.forum.post_controls.edit_button')}
              </Button>) : ''}
              { comment.data.attributes.canDelete ? (
              <Button className={`Button Button--link`} icon="fas fa-trash" onclick={this.props.deleteComment}>
                  {app.translator.trans('core.forum.post_controls.delete_button')}
              </Button>) : '' }
              { this.props.discussion.canReply && !comment.data.attributes.canEdit ? (
              <Button className={`Button Button--link`} icon="fas fa-reply" onclick={this.props.replyComment}>
                  {app.translator.trans('flarum-mentions.forum.post.reply_link')}
              </Button>) : '' }
              { this.props.post.canFlag && !comment.data.attributes.canEdit ? (
              <Button className={`Button Button--link`} icon="fas fa-flag" onclick={this.props.flagComment}>
                  {app.translator.trans('flarum-flags.forum.post_controls.flag_button')}
              </Button>) : '' }
              { comment.data.attributes.canHide ? (
              <Button className={`Button Button--link`} icon="far fa-eye-slash" onclick={this.props.hideComment}>
                  {app.translator.trans('core.lib.badge.hidden_tooltip')}
              </Button>) : '' }
            </div>
          </div>
        </div>
    </div>);
  }
}
