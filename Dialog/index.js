'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultDialogTemplate = exports.Dialog = exports.DialogFooterButton = exports.DialogFooter = exports.DialogBody = exports.DialogHeaderTitle = exports.DialogHeader = exports.DialogSurface = exports.DialogBackdrop = exports.DialogRoot = undefined;

var _class, _temp;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _mdc = require('@material/dialog/dist/mdc.dialog');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Base = require('../Base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DialogRoot = exports.DialogRoot = (0, _Base.simpleTag)({
  displayName: 'DialogRoot',
  defaultProps: {
    role: 'alertdialog'
  },
  tag: 'aside',
  classNames: function classNames(props) {
    return ['mdc-dialog', {
      'mdc-dialog--theme-dark': props.themeDark
    }];
  },
  consumeProps: ['themeDark']
});

var DialogBackdrop = exports.DialogBackdrop = (0, _Base.simpleTag)({
  displayName: 'DialogBackdrop',
  classNames: 'mdc-dialog__backdrop'
});

var DialogSurface = exports.DialogSurface = (0, _Base.simpleTag)({
  displayName: 'DialogSurface',
  classNames: 'mdc-dialog__surface'
});

var DialogHeader = exports.DialogHeader = (0, _Base.simpleTag)({
  displayName: 'DialogHeader',
  tag: 'header',
  classNames: 'mdc-dialog__header'
});

var DialogHeaderTitle = exports.DialogHeaderTitle = (0, _Base.simpleTag)({
  displayName: 'DialogHeaderTitle',
  tag: 'h2',
  classNames: 'mdc-dialog__header__title'
});

var DialogBody = exports.DialogBody = (0, _Base.simpleTag)({
  displayName: 'DialogBody',
  tag: 'section',
  classNames: function classNames(props) {
    return ['mdc-dialog__body', {
      'mdc-dialog__body--scrollable': props.scrollable
    }];
  },
  consumeProps: ['scrollable']
});

var DialogFooter = exports.DialogFooter = (0, _Base.simpleTag)({
  displayName: 'DialogFooter',
  tag: 'footer',
  classNames: 'mdc-dialog__footer'
});

var DialogFooterButton = exports.DialogFooterButton = function (_simpleTag) {
  _inherits(DialogFooterButton, _simpleTag);

  function DialogFooterButton() {
    _classCallCheck(this, DialogFooterButton);

    return _possibleConstructorReturn(this, (DialogFooterButton.__proto__ || Object.getPrototypeOf(DialogFooterButton)).apply(this, arguments));
  }

  _createClass(DialogFooterButton, [{
    key: 'render',
    value: function render() {
      return _get(DialogFooterButton.prototype.__proto__ || Object.getPrototypeOf(DialogFooterButton.prototype), 'render', this).call(this);
    }
  }]);

  return DialogFooterButton;
}((0, _Base.simpleTag)({
  displayName: 'DialogFooterButton',
  tag: _Button2.default,
  classNames: function classNames(props) {
    return ['mdc-dialog__footer__button', {
      'mdc-dialog__footer__button--cancel': props.cancel,
      'mdc-dialog__footer__button--accept': props.accept
    }];
  },
  defaultProps: {
    accept: false,
    cancel: false
  },
  consumeProps: ['accept', 'cancel']
}));

var Dialog = (0, _Base.withMDC)({
  mdcConstructor: _mdc.MDCDialog,
  mdcElementRef: true,
  mdcEvents: {
    'MDCDialog:accept': function MDCDialogAccept(evt, props) {
      props.onAccept(evt);
      props.onClose(evt);
    },
    'MDCDialog:cancel': function MDCDialogCancel(evt, props) {
      props.onCancel(evt);
      props.onClose(evt);
    }
  },
  defaultProps: {
    open: false,
    themeDark: false,
    onAccept: _Base.noop,
    onCancel: _Base.noop,
    onClose: _Base.noop
  },
  onUpdate: function onUpdate(props, nextProps, api) {
    if (api && api.open !== !!nextProps.open) {
      nextProps.open ? api.show() : api.close();
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
          open = _props.open,
          onAccept = _props.onAccept,
          onCancel = _props.onCancel,
          onClose = _props.onClose,
          children = _props.children,
          mdcElementRef = _props.mdcElementRef,
          rest = _objectWithoutProperties(_props, ['open', 'onAccept', 'onCancel', 'onClose', 'children', 'mdcElementRef']);

      var template = children || React.createElement(DefaultDialogTemplate, null);

      return React.cloneElement(template, Object.assign({}, template.props, rest, {
        elementRef: mdcElementRef
      }));
    }
  }]);

  return _class;
}(React.Component), Object.defineProperty(_class, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Dialog'
}), _temp));

exports.Dialog = Dialog;

var DefaultDialogTemplate = exports.DefaultDialogTemplate = function (_React$Component2) {
  _inherits(DefaultDialogTemplate, _React$Component2);

  function DefaultDialogTemplate() {
    _classCallCheck(this, DefaultDialogTemplate);

    return _possibleConstructorReturn(this, (DefaultDialogTemplate.__proto__ || Object.getPrototypeOf(DefaultDialogTemplate)).apply(this, arguments));
  }

  _createClass(DefaultDialogTemplate, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          title = _props2.title,
          header = _props2.header,
          body = _props2.body,
          footer = _props2.footer,
          scrollable = _props2.scrollable,
          acceptLabel = _props2.acceptLabel,
          cancelLabel = _props2.cancelLabel,
          children = _props2.children,
          rest = _objectWithoutProperties(_props2, ['title', 'header', 'body', 'footer', 'scrollable', 'acceptLabel', 'cancelLabel', 'children']);

      return React.createElement(
        DialogRoot,
        rest,
        React.createElement(
          DialogSurface,
          null,
          (!!title || !!header) && React.createElement(
            DialogHeader,
            null,
            !!title && React.createElement(
              DialogHeaderTitle,
              null,
              title
            ),
            !!header && { header: header }
          ),
          (!!body || children) && React.createElement(
            DialogBody,
            { scrollable: scrollable },
            body,
            children
          ),
          (!!cancelLabel || !!acceptLabel) && React.createElement(
            DialogFooter,
            null,
            !!footer && { footer: footer },
            !!cancelLabel && React.createElement(
              DialogFooterButton,
              { cancel: true },
              cancelLabel
            ),
            !!acceptLabel && React.createElement(
              DialogFooterButton,
              { accept: true },
              acceptLabel
            )
          )
        ),
        React.createElement(DialogBackdrop, null)
      );
    }
  }]);

  return DefaultDialogTemplate;
}(React.Component);

Object.defineProperty(DefaultDialogTemplate, 'defaultProps', {
  enumerable: true,
  writable: true,
  value: {
    title: undefined,
    header: undefined,
    body: undefined,
    footer: undefined,
    scrollable: undefined,
    acceptLabel: 'Accept',
    cancelLabel: 'Cancel'
  }
});
exports.default = Dialog;
