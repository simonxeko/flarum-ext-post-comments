module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/addFlagsToComment.js":
/*!****************************************!*\
  !*** ./src/forum/addFlagsToComment.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Comment */ "./src/forum/components/Comment.js");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/PostControls */ "flarum/utils/PostControls");
/* harmony import */ var flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(_components_Comment__WEBPACK_IMPORTED_MODULE_2__["default"].prototype, 'attrs', function (attrs) {
    if (this.props.post.comment_flags().length) {
      attrs.className += ' Comment--flagged';
    }
  });

  _components_Comment__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.dismissFlag = function (data) {
    var comment = this.props.comment;
    delete comment.data.relationships.comment_flags;
    this.props.post.freshness = new Date();

    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.comment_flags) {
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.comment_flags.some(function (flag, i) {
        if (flag.comment() === comment) {
          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.comment_flags.splice(i, 1);

          if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.flagIndex === comment) {
            var next = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.comment_flags[i];
            if (!next) next = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.comment_flags[0];

            if (next) {
              var nextPost = next.comment();
              flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.cache.flagIndex = nextPost;
              m.route(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route.comment(nextPost));
            }
          }

          return true;
        }
      });
    }

    m.redraw();
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
      url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + comment.apiEndpoint() + '/comment_flags',
      method: 'DELETE',
      data: data
    });
  };

  _components_Comment__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.flagActionItems = function () {
    var _this = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default.a();
    var controls = flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_5___default.a.destructiveControls(this.props.post);
    Object.keys(controls.items).forEach(function (k) {
      var props = controls.get(k).props;
      props.className = 'Button';
      Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(props, 'onclick', function () {
        return _this.dismissFlag();
      });
    });
    items.add('controls', m("div", {
      className: "ButtonGroup"
    }, controls.toArray()));
    items.add('dismiss', m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "Button",
      icon: "far fa-eye-slash",
      onclick: this.dismissFlag.bind(this)
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-flags.forum.post.dismiss_flag_button')), -100);
    return items;
  };

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(_components_Comment__WEBPACK_IMPORTED_MODULE_2__["default"].prototype, 'content', function (vdom) {
    var _this2 = this;

    var post = this.props.post;
    var flags = post.flags();
    if (!flags.length) return;
    if (post.isHidden()) this.revealContent = true;
    vdom.unshift(m("div", {
      className: "Comment-flagged"
    }, m("div", {
      className: "Comment-flagged-flags"
    }, flags.map(function (flag) {
      return m("div", {
        className: "Comment-flagged-flag"
      }, _this2.flagReason(flag));
    })), m("div", {
      className: "Comment-flagged-actions"
    }, this.flagActionItems().toArray())));
  });

  _components_Comment__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.flagReason = function (flag) {
    if (flag.type() === 'user') {
      var user = flag.user();
      var reason = flag.reason();
      var detail = flag.reasonDetail();
      return [flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(reason ? 'flarum-flags.forum.post.flagged_by_with_reason_text' : 'flarum-flags.forum.post.flagged_by_text', {
        user: user,
        reason: reason
      }), detail ? m("span", {
        className: "Comment-flagged-detail"
      }, detail) : ''];
    }
  };
});

/***/ }),

/***/ "./src/forum/components/Comment.js":
/*!*****************************************!*\
  !*** ./src/forum/components/Comment.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comment; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__);






var Comment =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Comment, _Component);

  function Comment() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Comment.prototype;

  _proto.init = function init() {
    _Component.prototype.init.call(this);
  };

  Comment.initProps = function initProps(props) {
    _Component.initProps.call(this, props);
  };

  _proto.renderCommentFlag = function renderCommentFlag(comment_flag) {
    return m("span", null, "\u56E0 ", comment_flag.reason() || comment_flag.reasonDetail(), " \u88AB ", comment_flag.user().displayName(), " \u6A19\u8A18", m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button Button--link",
      icon: "fas fa-eye-slash",
      onclick: this.dismissFlag.bind(this)
    }, app.translator.trans('flarum-flags.forum.post.dismiss_flag_button')));
  };

  _proto.view = function view() {
    var comment = this.props.comment;
    var user = comment.user();
    var likes = comment.likes();
    var isLiked = app.session.user && likes && likes.some(function (user) {
      return user === app.session.user;
    });
    var comment_flags = comment.comment_flags();
    console.log("Flags", comment, likes, comment_flags);
    return m("div", {
      className: "comment-item"
    }, m("div", {
      style: comment.isHidden() ? 'opacity: 0.5' : ''
    }, m("div", {
      className: "comment-avatar"
    }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default()(user, {
      style: "width: 32px; height: 32px;"
    })), m("div", {
      className: "comment-content"
    }, m("strong", null, user.data.attributes.displayName), m("span", null, "\xA0\xA0"), m("em", null, flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3___default()(comment.data.attributes.createdAt)), m("span", null, "\xA0\xA0"), m("strong", {
      style: "color: #660000"
    }, comment_flags.length > 0 ? this.renderCommentFlag(comment_flags[0]) : ''), m("div", null, comment.data.attributes.content), comment.data.attributes.canLike ? m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button Button--link",
      icon: isLiked ? "fas fa-thumbs-up" : "far fa-thumbs-up",
      onclick: this.props.likeComment
    }, likes.length > 0 ? likes.length : app.translator.trans('flarum-likes.forum.post.like_link')) : '', m("div", {
      "class": "comment-actions"
    }, comment.data.attributes.canEdit ? m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button Button--link",
      icon: "fas fa-pencil-alt",
      onclick: this.props.editComment
    }, app.translator.trans('core.forum.post_controls.edit_button')) : '', comment.data.attributes.canDelete ? m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button Button--link",
      icon: "fas fa-trash",
      onclick: this.props.deleteComment
    }, app.translator.trans('core.forum.post_controls.delete_button')) : '', this.props.discussion.canReply && !comment.data.attributes.canEdit ? m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button Button--link",
      icon: "fas fa-reply",
      onclick: this.props.replyComment
    }, app.translator.trans('flarum-mentions.forum.post.reply_link')) : '', this.props.post.canFlag && !comment.data.attributes.canEdit ? m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button Button--link",
      icon: "fas fa-flag",
      onclick: this.props.flagComment
    }, app.translator.trans('flarum-flags.forum.post_controls.flag_button')) : '', comment.data.attributes.canHide ? comment.isHidden() ? m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button Button--link",
      icon: "far fa-eye",
      onclick: this.props.restoreComment
    }, app.translator.trans('core.forum.post_controls.restore_button')) : m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button Button--link",
      icon: "far fa-eye-slash",
      onclick: this.props.hideComment
    }, app.translator.trans('core.lib.badge.hidden_tooltip')) : ''))));
  };

  return Comment;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/CommentComposer.js":
/*!*************************************************!*\
  !*** ./src/forum/components/CommentComposer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommentComposer; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/ComposerBody */ "flarum/components/ComposerBody");
/* harmony import */ var flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/extractText */ "flarum/utils/extractText");
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_5__);







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


var CommentComposer =
/*#__PURE__*/
function (_ComposerBody) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CommentComposer, _ComposerBody);

  function CommentComposer() {
    return _ComposerBody.apply(this, arguments) || this;
  }

  var _proto = CommentComposer.prototype;

  _proto.init = function init() {
    var _this = this;

    _ComposerBody.prototype.init.call(this);

    this.editor.props.preview = function (e) {
      minimizeComposerIfFullScreen(e);
      m.route(app.route.discussion(_this.props.discussion, 'reply'));
    };
  };

  CommentComposer.initProps = function initProps(props) {
    _ComposerBody.initProps.call(this, props);

    props.placeholder = props.placeholder || flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default()(app.translator.trans('core.forum.composer_reply.body_placeholder'));
    props.submitLabel = props.submitLabel || app.translator.trans('core.forum.composer_reply.submit_button');
    props.confirmExit = props.confirmExit || flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default()(app.translator.trans('core.forum.composer_reply.discard_confirmation'));
  };

  _proto.headerItems = function headerItems() {
    var items = _ComposerBody.prototype.headerItems.call(this);

    var discussion = this.props.discussion;
    var post = this.props.post;
    var comment = this.props.comment;
    var to_user = this.props.to_user;

    var routeAndMinimize = function routeAndMinimize(element, isInitialized) {
      if (isInitialized) return;
      $(element).on('click', minimizeComposerIfFullScreen);
      m.route.apply(this, arguments);
    };

    items.add('title', m("h3", null, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()('fas fa-reply'), " ", ' ', m("a", {
      href: app.route.post(post),
      config: routeAndMinimize
    }, "@", to_user.displayName(), " #", comment ? comment.id() : post.id())));
    return items;
  }
  /**
   * Get the data to submit to the server when the reply is saved.
   *
   * @return {Object}
   */
  ;

  _proto.data = function data() {
    return {
      content: this.content(),
      relationships: {
        discussion: this.props.discussion,
        post: this.props.post
      }
    };
  };

  _proto.onsubmit = function onsubmit() {
    var discussion = this.props.discussion;
    var post = this.props.post;
    var target_frame = this.props.target_frame;
    if (target_frame) target_frame.loading = true;
    this.loading = true;
    m.redraw();
    var data = this.data();
    app.store.createRecord('comments').save(data).then(function (comment) {
      // If we're currently viewing the discussion which this reply was made
      // in, then we can update the comment stream and scroll to the comment.
      if (app.viewingDiscussion(discussion)) {
        app.current.stream.update().then(function () {
          return app.current.stream.goToNumber(comment.number());
        }).then(function () {
          if (target_frame) {
            target_frame.loading = false;
          }

          m.redraw();
        });
      } else {
        // Otherwise, we'll create an alert message to inform the user that
        // their reply has been posted, containing a button which will
        // transition to their new comment when clicked.
        var alert;
        var viewButton = flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
          className: 'Button Button--link',
          children: app.translator.trans('core.forum.composer_reply.view_button'),
          onclick: function onclick() {
            /// TODODODODOO
            /// TODODODODOO
            /// TODODODODOO
            /// TODODODODOO
            /// Replace to comment? (Works for display..)
            m.route(app.route.post(post));
            app.alerts.dismiss(alert);
          }
        });
        app.alerts.show(alert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2___default.a({
          type: 'success',
          message: app.translator.trans('core.forum.composer_reply.posted_message'),
          controls: [viewButton]
        }));
        if (target_frame) target_frame.loading = false;
      }

      app.composer.hide();
    }, this.loaded.bind(this));
  };

  return CommentComposer;
}(flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/CommentsList.js":
/*!**********************************************!*\
  !*** ./src/forum/components/CommentsList.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommentsList; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Comment */ "./src/forum/components/Comment.js");
/* harmony import */ var _EditCommentComposer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditCommentComposer */ "./src/forum/components/EditCommentComposer.js");
/* harmony import */ var _CommentComposer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentComposer */ "./src/forum/components/CommentComposer.js");
/* harmony import */ var _FlagPostModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FlagPostModal */ "./src/forum/components/FlagPostModal.js");







var CommentsList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CommentsList, _Component);

  function CommentsList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = CommentsList.prototype;

  _proto.init = function init() {
    _Component.prototype.init.call(this); // this.comments_data = m.prop(this.props.comments);

  };

  CommentsList.initProps = function initProps(props) {
    _Component.initProps.call(this, props);
  };

  _proto.insertMention = function insertMention(comment, component, quote) {
    var user = comment.user();
    var mention = '@' + (user ? user.username() : ''); // : comment.number()) + '#' + comment.id() + ' ';
    // If the composer is empty, then assume we're starting a new reply.
    // In which case we don't want the user to have to confirm if they
    // close the composer straight away.

    if (!component.content()) {
      component.props.originalContent = mention;
    }

    var cursorPosition = component.editor.getSelectionRange()[0];
    var preceding = component.editor.value().slice(0, cursorPosition);
    var precedingNewlines = preceding.length == 0 ? 0 : 3 - preceding.match(/(\n{0,2})$/)[0].length;
    component.editor.insertAtCursor(Array(precedingNewlines).join('\n') + ( // Insert up to two newlines, depending on preceding whitespace
    quote ? '> ' + mention + quote.trim().replace(/\n/g, '\n> ') + '\n\n' : mention));
  };

  _proto.likeComment = function likeComment(context) {
    console.log("Comment", this);
    var likes = this.likes();
    var isLiked = app.session.user && likes && likes.some(function (user) {
      return user === app.session.user;
    });
    isLiked = !isLiked;
    this.save({
      isLiked: isLiked
    }); // We've saved the fact that we do or don't like the comment, but in order
    // to provide instantaneous feedback to the user, we'll need to add or
    // remove the like from the relationship data manually.

    var data = this.data.relationships.likes.data;
    data.some(function (like, i) {
      if (like.id === app.session.user.id()) {
        data.splice(i, 1);
        return true;
      }
    });

    if (isLiked) {
      data.unshift({
        type: 'users',
        id: app.session.user.id()
      });
    }

    context.props.context.props.post.freshness = new Date();
    m.redraw();
  };

  _proto.replyComment = function replyComment(context) {
    var component = app.composer.component;
    var post = context.props.post;

    if (component && component.props.comment && component.props.comment.id() === this.id()) {
      context.insertMention(comment, component);
    } else {
      if (app.session.user) {
        if (post.discussion().canReply()) {
          component = app.composer.component;

          if (!app.composingReplyTo(post.discussion()) || forceRefresh) {
            console.log("Add reply composer.");
            component = new _CommentComposer__WEBPACK_IMPORTED_MODULE_4__["default"]({
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

          if (app.viewingDiscussion(post.discussion()) && !app.composer.isFullScreen()) {
            app.current.stream.goToNumber('reply');
          }
        }
      } else {
        app.modal.show(new LogInModal());
      }
    }
  };

  _proto.editComment = function editComment(context) {
    var deferred = m.deferred();
    var component = new _EditCommentComposer__WEBPACK_IMPORTED_MODULE_3__["default"]({
      comment: this,
      post: context.props.post,
      discussion: context.props.discussion
    });
    app.composer.load(component);
    app.composer.show();
    deferred.resolve(component);
    return deferred.promise;
  };

  _proto.deleteComment = function deleteComment(context) {
    var _this = this;

    console.log("Context", context);
    context.props.context.loading = true;
    m.redraw();
    this["delete"]().then(function () {
      console.log("context.props.post", context.props.post);
      context.props.context.props.post.removeComment(_this.id());
      context.props.context.props.post.data.attributes.content = "wtf";
      context.props.context.props.post.data.attributes.contentHtml = "wtf";
      context.props.context.props.post.freshness = new Date();
    }).then(function () {
      console.log("What?", context.view());
      context.props.context.loading = false;
      m.redraw(); //m.route.set("/");
    });
  };

  _proto.hideComment = function hideComment(context) {
    var hidden_date = new Date();
    this.pushAttributes({
      hidden_at: hidden_date
    });
    this.save({
      isHidden: true
    });
    this.data.attributes.hiddenAt = hidden_date;
    this.data.attributes.isHidden = true;
    context.props.context.props.post.freshness = new Date();
    m.redraw();
  };

  _proto.restoreComment = function restoreComment(context) {
    this.pushAttributes({
      hidden_at: null
    });
    this.save({
      isHidden: false
    });
    this.data.attributes.hiddenAt = null;
    this.data.attributes.isHidden = false;
    context.props.context.props.post.freshness = new Date();
    m.redraw();
  };

  _proto.flagComment = function flagComment(context) {
    app.modal.show(new _FlagPostModal__WEBPACK_IMPORTED_MODULE_5__["default"]({
      comment: this
    }));
  };

  _proto.view = function view() {
    var _this2 = this;

    return m("div", {
      "class": "comments-list"
    }, this.props.comments.map(function (comment, i) {
      return m(_Comment__WEBPACK_IMPORTED_MODULE_2__["default"], {
        discussion: _this2.props.discussion,
        post: _this2.props.post,
        comment: comment,
        flagComment: _this2.flagComment.bind(comment, _this2),
        hideComment: _this2.hideComment.bind(comment, _this2),
        restoreComment: _this2.restoreComment.bind(comment, _this2),
        replyComment: _this2.replyComment.bind(comment, _this2),
        likeComment: _this2.likeComment.bind(comment, _this2),
        editComment: _this2.editComment.bind(comment, _this2),
        deleteComment: _this2.deleteComment.bind(comment, _this2)
      });
    }));
  };

  return CommentsList;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/EditCommentComposer.js":
/*!*****************************************************!*\
  !*** ./src/forum/components/EditCommentComposer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditCommentComposer; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/ComposerBody */ "flarum/components/ComposerBody");
/* harmony import */ var flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);




function minimizeComposerIfFullScreen(e) {
  if (app.composer.isFullScreen()) {
    app.composer.minimize();
    e.stopPropagation();
  }
}
/**
 * The `EditPostComposer` component displays the composer content for editing a
 * post. It sets the initial content to the content of the post that is being
 * edited, and adds a header control to indicate which post is being edited.
 *
 * ### Props
 *
 * - All of the props for ComposerBody
 * - `post`
 */


var EditCommentComposer =
/*#__PURE__*/
function (_ComposerBody) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EditCommentComposer, _ComposerBody);

  function EditCommentComposer() {
    return _ComposerBody.apply(this, arguments) || this;
  }

  var _proto = EditCommentComposer.prototype;

  _proto.init = function init() {
    var _this = this;

    _ComposerBody.prototype.init.call(this);

    this.editor.props.preview = function (e) {
      minimizeComposerIfFullScreen(e);
      m.route(app.route.post(_this.props.post));
    };
  };

  EditCommentComposer.initProps = function initProps(props) {
    _ComposerBody.initProps.call(this, props);

    props.submitLabel = props.submitLabel || app.translator.trans('core.forum.composer_edit.submit_button');
    props.confirmExit = props.confirmExit || app.translator.trans('core.forum.composer_edit.discard_confirmation');
    props.originalContent = props.originalContent || props.comment.content();
    props.user = props.user || props.comment.user();
    props.comment.editedContent = props.originalContent;
  };

  _proto.headerItems = function headerItems() {
    var items = _ComposerBody.prototype.headerItems.call(this);

    var comment = this.props.comment;
    var post = this.props.post;
    var discussion = this.props.discussion;

    var routeAndMinimize = function routeAndMinimize(element, isInitialized) {
      if (isInitialized) return;
      $(element).on('click', minimizeComposerIfFullScreen);
      m.route.apply(this, arguments);
    };

    items.add('title', m("h3", null, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()('fas fa-pencil-alt'), " ", ' ', m("a", {
      href: app.route.discussion(discussion, post.number()),
      config: routeAndMinimize
    }, app.translator.trans('core.forum.composer_edit.post_link', {
      number: comment.number(),
      discussion: discussion.title()
    }))));
    return items;
  }
  /**
   * Get the data to submit to the server when the comment is saved.
   *
   * @return {Object}
   */
  ;

  _proto.data = function data() {
    return {
      content: this.content()
    };
  };

  _proto.onsubmit = function onsubmit() {
    var _this2 = this;

    this.loading = true;
    var data = this.data();
    this.props.comment.save(data).then(function () {
      return app.composer.hide();
    }, this.loaded.bind(this)).then(function () {
      _this2.props.post.freshness = new Date();
      m.redraw();
    });
  };

  return EditCommentComposer;
}(flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/FlagPostModal.js":
/*!***********************************************!*\
  !*** ./src/forum/components/FlagPostModal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FlagPostModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);




var FlagPostModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FlagPostModal, _Modal);

  function FlagPostModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = FlagPostModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.success = false;
    this.reason = m.prop('');
    this.reasonDetail = m.prop('');
  };

  _proto.className = function className() {
    return 'FlagPostModal Modal--small';
  };

  _proto.title = function title() {
    return app.translator.trans('flarum-flags.forum.flag_post.title');
  };

  _proto.content = function content() {
    if (this.success) {
      return m("div", {
        className: "Modal-body"
      }, m("div", {
        className: "Form Form--centered"
      }, m("p", {
        className: "helpText"
      }, app.translator.trans('flarum-flags.forum.flag_post.confirmation_message')), m("div", {
        className: "Form-group"
      }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "Button Button--primary Button--block",
        onclick: this.hide.bind(this)
      }, app.translator.trans('flarum-flags.forum.flag_post.dismiss_button')))));
    }

    var guidelinesUrl = app.forum.attribute('guidelinesUrl');
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form Form--centered"
    }, m("div", {
      className: "Form-group"
    }, m("div", null, m("label", {
      className: "checkbox"
    }, m("input", {
      type: "radio",
      name: "reason",
      checked: this.reason() === 'off_topic',
      value: "off_topic",
      onclick: m.withAttr('value', this.reason)
    }), m("strong", null, app.translator.trans('flarum-flags.forum.flag_post.reason_off_topic_label')), app.translator.trans('flarum-flags.forum.flag_post.reason_off_topic_text')), m("label", {
      className: "checkbox"
    }, m("input", {
      type: "radio",
      name: "reason",
      checked: this.reason() === 'inappropriate',
      value: "inappropriate",
      onclick: m.withAttr('value', this.reason)
    }), m("strong", null, app.translator.trans('flarum-flags.forum.flag_post.reason_inappropriate_label')), app.translator.trans('flarum-flags.forum.flag_post.reason_inappropriate_text', {
      a: guidelinesUrl ? m("a", {
        href: guidelinesUrl,
        target: "_blank"
      }) : undefined
    })), m("label", {
      className: "checkbox"
    }, m("input", {
      type: "radio",
      name: "reason",
      checked: this.reason() === 'spam',
      value: "spam",
      onclick: m.withAttr('value', this.reason)
    }), m("strong", null, app.translator.trans('flarum-flags.forum.flag_post.reason_spam_label')), app.translator.trans('flarum-flags.forum.flag_post.reason_spam_text')), m("label", {
      className: "checkbox"
    }, m("input", {
      type: "radio",
      name: "reason",
      checked: this.reason() === 'other',
      value: "other",
      onclick: m.withAttr('value', this.reason)
    }), m("strong", null, app.translator.trans('flarum-flags.forum.flag_post.reason_other_label')), this.reason() === 'other' ? m("textarea", {
      className: "FormControl",
      value: this.reasonDetail(),
      oninput: m.withAttr('value', this.reasonDetail)
    }) : ''))), m("div", {
      className: "Form-group"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button Button--primary Button--block",
      type: "submit",
      loading: this.loading,
      disabled: !this.reason()
    }, app.translator.trans('flarum-flags.forum.flag_post.submit_button')))));
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this = this;

    e.preventDefault();
    this.loading = true;
    app.store.createRecord('comment_flags').save({
      reason: this.reason() === 'other' ? null : this.reason(),
      reasonDetail: this.reasonDetail(),
      relationships: {
        user: app.session.user,
        comment: this.props.comment
      }
    }).then(function () {
      return _this.success = true;
    })["catch"](function () {}).then(this.loaded.bind(this));
  };

  return FlagPostModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/DiscussionControls */ "flarum/utils/DiscussionControls");
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CommentComposer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/CommentComposer */ "./src/forum/components/CommentComposer.js");
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/LogInModal */ "flarum/components/LogInModal");
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models_Comment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/Comment */ "./src/forum/models/Comment.js");
/* harmony import */ var _models_CommentFlag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/CommentFlag */ "./src/forum/models/CommentFlag.js");
/* harmony import */ var _components_CommentsList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/CommentsList */ "./src/forum/components/CommentsList.js");
/* harmony import */ var _addFlagsToComment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./addFlagsToComment */ "./src/forum/addFlagsToComment.js");











/**
 * TODO:
 *  - Permission
 *  - Hide
 *  - Notification
 *  - Layout adjustment
 * **/

function insertMention(post, component, quote) {
  var user = post.user();
  var mention = '@' + (user ? user.username() : post.number()) + '#' + post.id() + ' '; // If the composer is empty, then assume we're starting a new reply.
  // In which case we don't want the user to have to confirm if they
  // close the composer straight away.

  if (!component.content()) {
    component.props.originalContent = mention;
  }

  var cursorPosition = component.editor.getSelectionRange()[0];
  var preceding = component.editor.value().slice(0, cursorPosition);
  var precedingNewlines = preceding.length == 0 ? 0 : 3 - preceding.match(/(\n{0,2})$/)[0].length;
  component.editor.insertAtCursor(Array(precedingNewlines).join('\n') + ( // Insert up to two newlines, depending on preceding whitespace
  quote ? '> ' + mention + quote.trim().replace(/\n/g, '\n> ') + '\n\n' : mention));
}

function reply(post, quote, context) {
  var component = app.composer.component;

  if (component && component.props.post && component.props.post.discussion() === post.discussion()) {
    insertMention(post, component, quote);
  } else {
    if (app.session.user) {
      if (post.discussion().canReply()) {
        var _component = app.composer.component;

        if (!app.composingReplyTo(post.discussion()) || forceRefresh) {
          console.log("Add reply composer.");
          _component = new _components_CommentComposer__WEBPACK_IMPORTED_MODULE_4__["default"]({
            user: app.session.user,
            discussion: post.discussion(),
            post: post,
            to_user: post.user(),
            target_frame: context
          });
          app.composer.load(_component);
        }

        app.composer.show();

        if (app.viewingDiscussion(post.discussion()) && !app.composer.isFullScreen()) {
          app.current.stream.goToNumber('reply');
        }
      }
    } else {
      app.modal.show(new flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_5___default.a());
    }
  }
}

app.initializers.add('simonxeko/post-comments', function () {
  console.log('[simonxeko/post-comments] Hello, forum! 123');
  app.store.models.posts.prototype.comments = flarum_Model__WEBPACK_IMPORTED_MODULE_6___default.a.hasMany('comments');

  app.store.models.posts.prototype.removeComment = function (id) {
    var relationships = this.data.relationships;
    var comments = relationships && relationships.comments;

    if (comments) {
      comments.data.some(function (data, i) {
        if (id === data.id) {
          comments.data.splice(i, 1);
          return true;
        }
      });
    }
  };

  app.store.models.comments = _models_Comment__WEBPACK_IMPORTED_MODULE_7__["default"];
  app.store.models.comment_flags = _models_CommentFlag__WEBPACK_IMPORTED_MODULE_8__["default"];
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'actionItems', function (items) {
    var _this = this;

    var post = this.props.post;
    if (post.isHidden() || app.session.user && !post.discussion().canReply()) return;
    items.replace('reply', flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a.component({
      className: 'Button Button--link',
      children: app.translator.trans('flarum-mentions.forum.post.reply_link'),
      onclick: function onclick() {
        return reply(post, null, _this);
      }
    }));
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'footerItems', function (items) {
    var post = this.props.post;

    if (post) {
      if (post.data.attributes.contentHtml) {
        var comments = this.props.post.comments();

        if (comments.length > 0) {
          items.add('comments', m(_components_CommentsList__WEBPACK_IMPORTED_MODULE_9__["default"], {
            context: this,
            discussion: this.props.post.discussion(),
            post: this.props.post,
            comments: this.props.post.comments()
          }));
        }
      }
    }
  });
  Object(_addFlagsToComment__WEBPACK_IMPORTED_MODULE_10__["default"])();
});

/***/ }),

/***/ "./src/forum/models/Comment.js":
/*!*************************************!*\
  !*** ./src/forum/models/Comment.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comment; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/computed */ "flarum/utils/computed");
/* harmony import */ var flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/string */ "flarum/utils/string");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_string__WEBPACK_IMPORTED_MODULE_4__);






var Comment =
/*#__PURE__*/
function (_Model) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Comment, _Model);

  function Comment() {
    return _Model.apply(this, arguments) || this;
  }

  return Comment;
}(flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a);



Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Comment.prototype, {
  number: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('number'),
  discussion: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('discussion'),
  post: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('post'),
  createdAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('createdAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate),
  user: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('user'),
  contentType: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('contentType'),
  content: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('content'),
  contentHtml: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('contentHtml'),
  contentPlain: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('contentHtml', flarum_utils_string__WEBPACK_IMPORTED_MODULE_4__["getPlainContent"]),
  editedAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('editedAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate),
  editedUser: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('editedUser'),
  isEdited: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('editedAt', function (editedAt) {
    return !!editedAt;
  }),
  hiddenAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('hiddenAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate),
  hiddenUser: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('hiddenUser'),
  isHidden: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('hiddenAt', function (hiddenAt) {
    return !!hiddenAt;
  }),
  canEdit: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('canEdit'),
  canHide: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('canHide'),
  canDelete: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('canDelete'),
  likes: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasMany('likes'),
  comment_flags: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasMany('comment_flags')
});

/***/ }),

/***/ "./src/forum/models/CommentFlag.js":
/*!*****************************************!*\
  !*** ./src/forum/models/CommentFlag.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);




var CommentFlag =
/*#__PURE__*/
function (_Model) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(CommentFlag, _Model);

  function CommentFlag() {
    return _Model.apply(this, arguments) || this;
  }

  return CommentFlag;
}(flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a);

Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(CommentFlag.prototype, {
  type: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('type'),
  reason: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('reason'),
  reasonDetail: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('reasonDetail'),
  createdAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('createdAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate),
  comment: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('comment'),
  user: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('user')
});

/* harmony default export */ __webpack_exports__["default"] = (CommentFlag);

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Alert":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Alert']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Alert'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/CommentPost":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/CommentPost']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/CommentPost'];

/***/ }),

/***/ "flarum/components/ComposerBody":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/ComposerBody']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/ComposerBody'];

/***/ }),

/***/ "flarum/components/LogInModal":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LogInModal']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LogInModal'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/humanTime":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/humanTime']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/humanTime'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/utils/DiscussionControls":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['utils/DiscussionControls']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/DiscussionControls'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/PostControls":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/PostControls']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/PostControls'];

/***/ }),

/***/ "flarum/utils/computed":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/computed']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/computed'];

/***/ }),

/***/ "flarum/utils/extractText":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['utils/extractText']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/extractText'];

/***/ }),

/***/ "flarum/utils/string":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/string']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/string'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map