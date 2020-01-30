import Component from 'flarum/Component';
import Button from 'flarum/components/Button';
import humanTime from 'flarum/helpers/humanTime';
import avatar from 'flarum/helpers/avatar';

export default class CommentDisplay extends Component {
  init() {
    super.init();
  }

  static initProps(props) {
    super.initProps(props);
  }

  view() {
      const comment = this.props.comment;
      const user = comment.user();
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
            <div>{comment.data.attributes.content}</div>
            <Button className={`Button Button--link`} icon="fas fa-comment">
                Like
            </Button>
            <Button className={`Button Button--link`} icon="fas fa-pencil-alt">
                Edit
            </Button>
            <Button className={`Button Button--link`} icon="fas fa-trash" onclick={this.props.deleteComment}>
                Delete
            </Button>
            <Button className={`Button Button--link`} icon="fas fa-eye-slash">
                Hide
            </Button>
        </div>
    </div>);
  }
}
