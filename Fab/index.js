'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fab = exports.FabIcon = exports.FabRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon');

var _Provider = require('../Provider');

var _Base = require('../Base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FabRoot = exports.FabRoot = (0, _Base.withRipple)((0, _Base.simpleTag)({
  displayName: 'FabRoot',
  tag: 'button',
  classNames: function classNames(props) {
    return ['mdc-fab', {
      'mdc-fab--mini': props.mini
    }];
  },
  defaultProps: {
    cssOnly: false,
    mini: false
  },
  consumeProps: ['mini', 'cssOnly']
}));

var FabIcon = exports.FabIcon = (0, _Base.simpleTag)({
  displayName: 'FabIcon',
  tag: _Icon.Icon,
  classNames: 'mdc-fab__icon'
});

var Fab = exports.Fab = function (_React$Component) {
  _inherits(Fab, _React$Component);

  function Fab() {
    _classCallCheck(this, Fab);

    return _possibleConstructorReturn(this, (Fab.__proto__ || Object.getPrototypeOf(Fab)).apply(this, arguments));
  }

  _createClass(Fab, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.providerOptions = (0, _Provider.getProviderOptions)(this.context);
    }
  }, {
    key: 'render',
    value: function render() {
      var buttonDefaultRipple = this.providerOptions.buttonDefaultRipple;

      var _props = this.props,
          ripple = _props.ripple,
          className = _props.className,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['ripple', 'className', 'children']);

      var shouldRipple = ripple === undefined ? buttonDefaultRipple : ripple;
      var rippleProps = shouldRipple ? { ripple: true } : {};

      var classes = (0, _classnames2.default)(this.providerOptions.iconPrefix, className);
      return React.createElement(
        FabRoot,
        Object.assign({ className: classes }, rippleProps, rest),
        React.createElement(
          FabIcon,
          null,
          children
        )
      );
    }
  }]);

  return Fab;
}(React.Component);

Object.defineProperty(Fab, 'contextTypes', {
  enumerable: true,
  writable: true,
  value: {
    RMWCOptions: _propTypes2.default.object
  }
});
exports.default = Fab;
