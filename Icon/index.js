'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.IconRoot = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Provider = require('../Provider');

var _Base = require('../Base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconRoot = exports.IconRoot = (0, _Base.simpleTag)({ displayName: 'IconRoot', tag: 'i' });

var Icon = exports.Icon = function (_React$PureComponent) {
  _inherits(Icon, _React$PureComponent);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.providerOptions = (0, _Provider.getProviderOptions)(this.context);
    }
  }, {
    key: 'getStrategy',
    value: function getStrategy(content, strategy, defaultStrategy) {
      strategy = strategy || defaultStrategy;

      if (strategy === 'auto') {
        // check for URLS
        if (typeof content === 'string' && (content.startsWith('/') || content.startsWith('http://') || content.startsWith('https://'))) {
          return 'url';
        }

        // handle JSX components
        if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object') {
          return 'component';
        }

        // we dont know what it is, default to ligature for compat with material icons
        return 'ligature';
      }

      return strategy;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          use = _props.use,
          children = _props.children,
          strategy = _props.strategy,
          prefix = _props.prefix,
          basename = _props.basename,
          rest = _objectWithoutProperties(_props, ['use', 'children', 'strategy', 'prefix', 'basename']);

      var content = use || children;

      var _providerOptions = this.providerOptions,
          defaultBasename = _providerOptions.iconClassNameBase,
          defaultPrefix = _providerOptions.iconClassNamePrefix,
          defaultStrategy = _providerOptions.iconStrategy;


      var strategyToUse = this.getStrategy(content, strategy, defaultStrategy);
      var prefixToUse = prefix || defaultPrefix;
      var basenameToUse = basename === undefined ? defaultBasename : basename;

      var iconProps = strategyToUse === 'url' ? {
        tag: 'img',
        src: content
      } : {};

      var contentToRender = strategyToUse === 'ligature' || strategyToUse === 'component' ? content : null;

      var iconClassName = strategyToUse === 'className' && typeof content === 'string' ? '' + prefixToUse + content : null;

      return React.createElement(
        IconRoot,
        Object.assign({}, rest, iconProps, {
          className: (0, _classnames2.default)(basenameToUse, rest.className, iconClassName)
        }),
        contentToRender
      );
    }
  }]);

  return Icon;
}(React.PureComponent);

Object.defineProperty(Icon, 'defaultProps', {
  enumerable: true,
  writable: true,
  value: {
    use: undefined
  }
});
Object.defineProperty(Icon, 'contextTypes', {
  enumerable: true,
  writable: true,
  value: {
    RMWCOptions: _propTypes2.default.object
  }
});
exports.default = Icon;
