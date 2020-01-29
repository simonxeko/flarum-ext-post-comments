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
    var to_user = this.props.to_user;

    var routeAndMinimize = function routeAndMinimize(element, isInitialized) {
      if (isInitialized) return;
      $(element).on('click', minimizeComposerIfFullScreen);
      m.route.apply(this, arguments);
    };

    items.add('title', m("h3", null, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()('fas fa-reply'), " ", ' ', m("a", {
      href: app.route.post(post),
      config: routeAndMinimize
    }, "@", to_user.displayName(), "#", post.id())));
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
    this.loading = true;
    m.redraw();
    var data = this.data();
    app.store.createRecord('comments').save(data).then(function (comment) {
      // If we're currently viewing the discussion which this reply was made
      // in, then we can update the comment stream and scroll to the comment.
      if (app.viewingDiscussion(discussion)) {
        app.current.stream.update().then(function () {
          return app.current.stream.goToNumber(comment.number());
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
      }

      app.composer.hide();
    }, this.loaded.bind(this));
  };

  return CommentComposer;
}(flarum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1___default.a);



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
/* harmony import */ var _models_Comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/Comment */ "./src/forum/models/Comment.js");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/DiscussionControls */ "flarum/utils/DiscussionControls");
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CommentComposer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/CommentComposer */ "./src/forum/components/CommentComposer.js");
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/LogInModal */ "flarum/components/LogInModal");
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_Post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/Post */ "flarum/components/Post");
/* harmony import */ var flarum_components_Post__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Post__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_11__);













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

function reply(post, quote) {
  var component = app.composer.component;

  if (component && component.props.post && component.props.post.discussion() === post.discussion()) {
    insertMention(post, component, quote);
  } else {
    if (app.session.user) {
      if (post.discussion().canReply()) {
        var _component = app.composer.component;

        if (!app.composingReplyTo(post.discussion()) || forceRefresh) {
          console.log("Add reply composer.");
          _component = new _components_CommentComposer__WEBPACK_IMPORTED_MODULE_5__["default"]({
            user: app.session.user,
            discussion: post.discussion(),
            post: post,
            to_user: post.user()
          });
          app.composer.load(_component);
        }

        app.composer.show();

        if (app.viewingDiscussion(post.discussion()) && !app.composer.isFullScreen()) {
          app.current.stream.goToNumber('reply');
        }
      }
    } else {
      app.modal.show(new flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_6___default.a());
    }
  }
}

app.initializers.add('simonxeko/post-comments', function () {
  console.log('[simonxeko/post-comments] Hello, forum! 123');
  app.store.models.posts.prototype.comments = flarum_Model__WEBPACK_IMPORTED_MODULE_9___default.a.hasMany('comments');

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

  app.store.models.comments = _models_Comment__WEBPACK_IMPORTED_MODULE_2__["default"];
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'actionItems', function (items) {
    var post = this.props.post;
    if (post.isHidden() || app.session.user && !post.discussion().canReply()) return;
    items.replace('reply', flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a.component({
      className: 'Button Button--link',
      children: app.translator.trans('Comment'),
      onclick: function onclick() {
        return reply(post);
      }
    }));
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'footerItems', function (items) {
    var _this2 = this;

    console.log("who is me?", this);
    var post = this.props.post;

    var deleteComment = function deleteComment(context) {
      var _this = this;

      context.loading = true;
      this["delete"]().then(function () {
        post.removeComment(_this.id());
      }).then(function () {
        context.loading = false;
        m.redraw();
      });
    }; // app.current.stream.update().then(() => app.current.stream.goToNumber(post.number()));


    var commentDisplay = function commentDisplay(comment) {
      var userId = comment.data.relationships.user.data.id;
      var user = app.store.data.users[userId];
      return m("div", {
        style: "border-bottom: 1px solid #EEE; padding: 15px 0;"
      }, m("div", {
        style: "float: left; padding-right: 15px;"
      }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_11___default()(user, {
        style: "width: 32px; height: 32px;"
      })), m("div", null, m("strong", null, user.data.attributes.displayName), m("span", null, "\xA0\xA0"), m("em", null, flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_10___default()(comment.data.attributes.createdAt))), m("div", null, m("div", null, comment.data.attributes.content), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "Button Button--link",
        icon: "fas fa-comment"
      }, "Like"), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "Button Button--link",
        icon: "fas fa-pencil-alt"
      }, "Edit"), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "Button Button--link",
        icon: "fas fa-trash",
        onclick: deleteComment.bind(comment, _this2)
      }, "Delete"), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "Button Button--link",
        icon: "fas fa-eye-slash"
      }, "Hide")));
    };

    if (post) {
      if (post.data.attributes.contentHtml) {
        var postLength = post.data.attributes.contentHtml.replace(/<[^>]*>?/gm, '').length;
        var authorID = parseInt(this.props.post.data.relationships.user.data.id); //const comment = this.props.post.data.relationships.comment;

        var comments = this.props.post.comments(); // console.log("comments()", post.comments());

        if (comments.length > 0) {
          /* items.add('comments', <Button className={`Button`} icon="fas fa-comment">
            {comments.data.length}
          </Button>);*/
          items.add('comments', m("div", {
            style: "clear: both; border: 1px solid #EEE; border-radius:5px; padding: 15px"
          }, comments.map(function (comment, i) {
            return commentDisplay(comment);
          })));
        }
      }
    }
  });
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
  canDelete: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('canDelete')
});

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

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

/***/ "flarum/components/Post":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Post']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Post'];

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

/***/ "flarum/helpers/listItems":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/listItems']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/listItems'];

/***/ }),

/***/ "flarum/utils/DiscussionControls":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['utils/DiscussionControls']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/DiscussionControls'];

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