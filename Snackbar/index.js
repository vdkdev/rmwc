'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snackbar = exports.SnackbarActionButton = exports.SnackbarActionWrapper = exports.SnackbarText = exports.SnackbarRoot = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /**
                    * Shows in browser notifications
                    */


var _react = require('react');

var React = _interopRequireWildcard(_react);

var _mdc = require('@material/snackbar/dist/mdc.snackbar');

var _noop = require('../Base/noop');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Base = require('../Base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SnackbarRoot = exports.SnackbarRoot = (0, _Base.simpleTag)({
  displayName: 'SnackbarRoot',
  classNames: function classNames(props) {
    return ['mdc-snackbar', {
      'mdc-snackbar--align-start': props.alignStart
    }];
  },
  defaultProps: {
    "alignStart": false,
    'aria-live': 'assertive',
    'aria-atomic': true,
    'aria-hidden': true
  },
  consumeProps: ['alignStart']
});

var SnackbarText = exports.SnackbarText = (0, _Base.simpleTag)({
  displayName: 'SnackbarText',
  classNames: 'mdc-snackbar__text'
});

var SnackbarActionWrapper = exports.SnackbarActionWrapper = (0, _Base.simpleTag)({
  displayName: 'SnackbarActionWrapper',
  classNames: 'mdc-snackbar__action-wrapper'
});

var SnackbarActionButton = exports.SnackbarActionButton = (0, _Base.simpleTag)({
  displayName: 'SnackbarActionButton',
  tag: _Button2.default,
  classNames: 'mdc-snackbar__action-button'
});

var showSnackbar = function showSnackbar(props, api) {
  var message = props.message,
      timeout = props.timeout,
      actionHandler = props.actionHandler,
      actionText = props.actionText,
      multiline = props.multiline,
      actionOnBottom = props.actionOnBottom,
      onClose = props.onClose;

  var timer = setTimeout(function () {
    return onClose();
  }, timeout || 2750);
  var wrappedActionHandler = actionHandler && api.dismissesOnAction ? function () {
    actionHandler();
    clearTimeout(timer);
    onClose();
  } : actionHandler;

  api.show({
    message: message,
    timeout: timeout,
    actionHandler: wrappedActionHandler,
    actionText: actionText || ' ',
    multiline: multiline,
    actionOnBottom: actionOnBottom
  });
};

/**
 * @name Snackbar
 */
var Snackbar = (0, _Base.withMDC)({
  mdcConstructor: _mdc.MDCSnackbar,
  mdcElementRef: true,
  defaultProps: {
    show: false,
    onClose: _noop.noop,
    message: undefined,
    timeout: undefined,
    actionHandler: undefined,
    actionText: undefined,
    multiline: false,
    actionOnBottom: false,
    dismissesOnAction: true
  },
  onUpdate: function onUpdate(props, nextProps, api) {
    if (api) {
      var _show = nextProps.show,
          _dismissesOnAction = nextProps.dismissesOnAction;

      api.dismissesOnAction = _dismissesOnAction;

      if ((props === undefined || _show !== props.show) && _show) {
        showSnackbar(nextProps, api);
      }
    }
  }
})((_temp = _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          show = _props.show,
          message = _props.message,
          timeout = _props.timeout,
          actionHandler = _props.actionHandler,
          actionText = _props.actionText,
          multiline = _props.multiline,
          actionOnBottom = _props.actionOnBottom,
          mdcElementRef = _props.mdcElementRef,
          dismissesOnAction = _props.dismissesOnAction,
          onClose = _props.onClose,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['show', 'message', 'timeout', 'actionHandler', 'actionText', 'multiline', 'actionOnBottom', 'mdcElementRef', 'dismissesOnAction', 'onClose', 'children']);

      var isJSX = (typeof message === 'undefined' ? 'undefined' : _typeof(message)) === 'object';
      var snackbarTextStyle = {};
      if (isJSX) {
        snackbarTextStyle.display = 'none';
      }

      var snackbarActionWrapperStyle = !actionText ? {
        display: 'none'
      } : {};

      /**
       * The double SnackbarText below is a hack to allow for rendering JSX
       * The real message gets rendered in the hidden container, and the second one is
       * ignored and shows th rendered content :)
       */
      return React.createElement(
        SnackbarRoot,
        Object.assign({ elementRef: mdcElementRef }, rest),
        React.createElement(SnackbarText, { style: snackbarTextStyle }),
        isJSX && React.createElement(
          SnackbarText,
          null,
          message
        ),
        React.createElement(
          SnackbarActionWrapper,
          { style: snackbarActionWrapperStyle },
          React.createElement(SnackbarActionButton, null)
        ),
        children
      );
    }
  }]);

  return _class;
}(React.Component), Object.defineProperty(_class, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Snackbar'
}), _temp));

exports.Snackbar = Snackbar;
exports.default = Snackbar;
