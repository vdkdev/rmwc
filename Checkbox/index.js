'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = exports.CheckboxLabel = exports.CheckboxMixedmark = exports.CheckboxCheckmarkPath = exports.CheckboxCheckmark = exports.CheckboxBackground = exports.CheckboxNativeControl = exports.CheckboxRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mdc = require('@material/checkbox/dist/mdc.checkbox');

var _FormField = require('../FormField');

var _FormField2 = _interopRequireDefault(_FormField);

var _Base = require('../Base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxRoot = exports.CheckboxRoot = (0, _Base.simpleTag)({
  displayName: 'CheckboxRoot',
  classNames: function classNames(props) {
    return ['mdc-checkbox', {
      'mdc-checkbox--theme-dark': props.themeDark
    }];
  },
  consumeProps: ['themeDark']
});

var CheckboxNativeControl = exports.CheckboxNativeControl = (0, _Base.simpleTag)({
  displayName: 'CheckboxNativeControl',

  tag: 'input',
  classNames: 'mdc-checkbox__native-control',
  defaultProps: {
    type: 'checkbox'
  }
});

var CheckboxBackground = exports.CheckboxBackground = (0, _Base.simpleTag)({
  displayName: 'CheckboxBackground',
  classNames: 'mdc-checkbox__background'
});

var CheckboxCheckmark = exports.CheckboxCheckmark = (0, _Base.simpleTag)({
  displayName: 'CheckboxCheckmark',
  tag: 'svg',
  classNames: 'mdc-checkbox__checkmark',
  defaultProps: {
    viewBox: '0 0 24 24'
  }
});

var CheckboxCheckmarkPath = exports.CheckboxCheckmarkPath = (0, _Base.simpleTag)({
  displayName: 'CheckboxCheckmarkPath',
  tag: 'path',
  classNames: 'mdc-checkbox__checkmark__path',
  defaultProps: {
    fill: 'none',
    stroke: 'white',
    d: 'M1.73,12.91 8.1,19.28 22.79,4.59'
  }
});

var CheckboxMixedmark = exports.CheckboxMixedmark = (0, _Base.simpleTag)({
  displayName: 'CheckboxMixedmark',
  classNames: 'mdc-checkbox__mixedmark'
});

var CheckboxLabel = exports.CheckboxLabel = (0, _Base.simpleTag)({
  displayName: 'CheckboxLabel',
  tag: 'label'
});

/**
 * A Checkbox component
 */
var Checkbox = (0, _Base.withMDCToggle)({
  mdcConstructor: _mdc.MDCCheckbox
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
          id = _props.id,
          children = _props.children,
          checked = _props.checked,
          apiRef = _props.apiRef,
          indeterminate = _props.indeterminate,
          mdcElementRef = _props.mdcElementRef,
          generatedId = _props.generatedId,
          themeDark = _props.themeDark,
          rest = _objectWithoutProperties(_props, ['label', 'id', 'children', 'checked', 'apiRef', 'indeterminate', 'mdcElementRef', 'generatedId', 'themeDark']);

      var labelId = id || generatedId;
      var checkedProp = checked !== undefined ? { checked: checked } : {};
      var classes = (0, _classnames2.default)({ 'mdc-checkbox--disabled': rest.disabled });

      var checkbox = _react2.default.createElement(
        CheckboxRoot,
        {
          elementRef: mdcElementRef,
          className: classes,
          themeDark: themeDark
        },
        _react2.default.createElement(CheckboxNativeControl, Object.assign({ id: labelId }, checkedProp, rest)),
        _react2.default.createElement(
          CheckboxBackground,
          null,
          _react2.default.createElement(
            CheckboxCheckmark,
            null,
            _react2.default.createElement(CheckboxCheckmarkPath, null)
          ),
          _react2.default.createElement(CheckboxMixedmark, null)
        )
      );

      /**
       * We have to conditionally wrap our checkbox in a formfield
       * If we have a label
       */
      if (label.length || children) {
        return _react2.default.createElement(
          _FormField2.default,
          null,
          checkbox,
          _react2.default.createElement(
            CheckboxLabel,
            { id: labelId + 'label', htmlFor: labelId },
            label,
            children
          )
        );
      } else {
        return checkbox;
      }
    }
  }]);

  return _class;
}(_react2.default.Component), Object.defineProperty(_class, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Checkbox'
}), _temp));

exports.Checkbox = Checkbox;
exports.default = Checkbox;
