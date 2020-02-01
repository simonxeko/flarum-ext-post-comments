import Model from 'flarum/Model';

class CommentFlag extends Model {}

Object.assign(CommentFlag.prototype, {
  type: Model.attribute('type'),
  reason: Model.attribute('reason'),
  reasonDetail: Model.attribute('reasonDetail'),
  createdAt: Model.attribute('createdAt', Model.transformDate),

  comment: Model.hasOne('comment'),
  user: Model.hasOne('user')
});

export default CommentFlag;
