'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RMWCProvider = exports.getProviderOptions = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Default provider options
var providerDefaults = {
  buttonDefaultRipple: true,
  iconClassNameBase: 'material-icons',
  iconClassNamePrefix: '',
  iconStrategy: 'auto'
};

// A function for safely getting context options
// this is so we can use the provider defaults even
// when RMWCProvider isnt being used
var getProviderOptions = exports.getProviderOptions = function getProviderOptions(context) {
  return context && context.RMWCOptions ? context.RMWCOptions : providerDefaults;
};

/**
 * Provides default options for children
 * Prop override options in providerDefaults with the same name
 */

var RMWCProvider = exports.RMWCProvider = function (_React$Component) {
  _inherits(RMWCProvider, _React$Component);

  function RMWCProvider(props) {
    _classCallCheck(this, RMWCProvider);

    var _this = _possibleConstructorReturn(this, (RMWCProvider.__proto__ || Object.getPrototypeOf(RMWCProvider)).call(this, props));

    _this.options = _this.buildOptions(props);
    return _this;
  }

  _createClass(RMWCProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        RMWCOptions: this.options
      };
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      this.options = this.buildOptions(nextProps);
    }
  }, {
    key: 'buildOptions',
    value: function buildOptions(props) {
      return Object.assign({}, providerDefaults, props || {});
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return RMWCProvider;
}(React.Component);

Object.defineProperty(RMWCProvider, 'childContextTypes', {
  enumerable: true,
  writable: true,
  value: {
    RMWCOptions: _propTypes2.default.object
  }
});
exports.default = RMWCProvider;
