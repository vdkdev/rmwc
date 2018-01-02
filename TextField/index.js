'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = exports.TextFieldIcon = exports.TextFieldHelperText = exports.TextFieldBottomLine = exports.TextFieldTextarea = exports.TextFieldInput = exports.TextFieldLabel = exports.TextFieldRoot = undefined;

var _class, _temp;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mdc = require('@material/textfield/dist/mdc.textfield');

var _noop = require('../Base/noop');

var _Base = require('../Base');

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextFieldRoot = exports.TextFieldRoot = (0, _Base.simpleTag)({
  displayName: 'TextFieldRoot',
  classNames: function classNames(props) {
    return ['mdc-text-field', {
      'mdc-text-field--textarea': props.textarea,
      'mdc-text-field--fullwidth': props.fullwidth,
      'mdc-text-field--box': props.box
    }];
  },
  consumeProps: ['textarea', 'box', 'fullwidth']
});

var TextFieldLabel = exports.TextFieldLabel = (0, _Base.simpleTag)({
  displayName: 'TextFieldLabel',
  tag: 'label',
  classNames: function classNames(props) {
    return ['mdc-text-field__label', {
      'mdc-text-field__label--float-above': props.value
    }];
  },
  consumeProps: ['value']
});

var TextFieldInput = exports.TextFieldInput = (0, _Base.simpleTag)({
  displayName: 'TextFieldInput',
  tag: 'input',
  classNames: 'mdc-text-field__input',
  defaultProps: {
    type: 'text'
  }
});

var TextFieldTextarea = exports.TextFieldTextarea = (0, _Base.simpleTag)({
  displayName: 'TextFieldTextarea',
  tag: 'textarea',
  classNames: 'mdc-text-field__input'
});

var TextFieldBottomLine = exports.TextFieldBottomLine = (0, _Base.simpleTag)({
  displayName: 'TextFieldBottomLine',
  classNames: 'mdc-text-field__bottom-line'
});

/**
 * A help text component
 */
var TextFieldHelperText = exports.TextFieldHelperText = function (_simpleTag) {
  _inherits(TextFieldHelperText, _simpleTag);

  function TextFieldHelperText() {
    _classCallCheck(this, TextFieldHelperText);

    return _possibleConstructorReturn(this, (TextFieldHelperText.__proto__ || Object.getPrototypeOf(TextFieldHelperText)).apply(this, arguments));
  }

  _createClass(TextFieldHelperText, [{
    key: 'render',
    value: function render() {
      return _get(TextFieldHelperText.prototype.__proto__ || Object.getPrototypeOf(TextFieldHelperText.prototype), 'render', this).call(this);
    }
  }]);

  return TextFieldHelperText;
}((0, _Base.simpleTag)({
  displayName: 'TextFieldHelperText',
  tag: 'p',
  classNames: function classNames(props) {
    return ['mdc-text-field-helper-text', {
      'mdc-text-field-helper-text--persistent': props.persistent,
      'mdc-text-field-helper-text--validation-msg': props.validationMsg
    }];
  },
  consumeProps: ['persistent', 'validationMsg']
}));

/**
 * An Icon in a TextField
 */


var TextFieldIcon = exports.TextFieldIcon = function TextFieldIcon(props) {
  return React.createElement(_Icon.Icon, Object.assign({}, props, { className: (props.className, 'mdc-text-field__icon') }));
};

var TextField = (0, _Base.withMDC)({
  mdcConstructor: _mdc.MDCTextField,
  mdcElementRef: true,
  defaultProps: {
    inputRef: _noop.noop,
    disabled: false,
    box: undefined,
    fullwidth: undefined,
    label: undefined,
    textarea: undefined
  },
  onUpdate: function onUpdate(props, nextProps, api, inst) {
    if (props && props.textarea !== nextProps.textarea) {
      inst.mdcComponentReinit();
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
          _props$label = _props.label,
          label = _props$label === undefined ? '' : _props$label,
          className = _props.className,
          inputRef = _props.inputRef,
          box = _props.box,
          fullwidth = _props.fullwidth,
          withLeadingIcon = _props.withLeadingIcon,
          withTrailingIcon = _props.withTrailingIcon,
          mdcElementRef = _props.mdcElementRef,
          children = _props.children,
          textarea = _props.textarea,
          _props$rootProps = _props.rootProps,
          rootProps = _props$rootProps === undefined ? {} : _props$rootProps,
          rest = _objectWithoutProperties(_props, ['label', 'className', 'inputRef', 'box', 'fullwidth', 'withLeadingIcon', 'withTrailingIcon', 'mdcElementRef', 'children', 'textarea', 'rootProps']);

      var tagProps = Object.assign({}, rest, {
        elementRef: inputRef,
        id: rest.id || Date.now() + Math.random() + ''
      });

      var tag = textarea ? React.createElement(TextFieldTextarea, tagProps) : React.createElement(TextFieldInput, tagProps);

      return React.createElement(
        TextFieldRoot,
        Object.assign({}, rootProps, {
          className: (0, _classnames2.default)(className, rootProps.className, {
            'mdc-text-field--with-leading-icon': !!withLeadingIcon,
            'mdc-text-field--with-trailing-icon': !!withTrailingIcon
          }),
          textarea: textarea,
          box: box,
          fullwidth: fullwidth,
          elementRef: mdcElementRef
        }),
        withLeadingIcon,
        children,
        tag,
        !!label && React.createElement(
          TextFieldLabel,
          { htmlFor: tagProps.id, value: tagProps.value },
          label
        ),
        withTrailingIcon,
        React.createElement(TextFieldBottomLine, null)
      );
    }
  }]);

  return _class;
}(React.Component), Object.defineProperty(_class, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'TextField'
}), _temp));

exports.TextField = TextField;
exports.default = TextField;
