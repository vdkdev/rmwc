'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ripple = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mdc = require('@material/ripple/dist/mdc.ripple');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ripple = exports.Ripple = function (_React$Component) {
  _inherits(Ripple, _React$Component);

  function Ripple() {
    _classCallCheck(this, Ripple);

    return _possibleConstructorReturn(this, (Ripple.__proto__ || Object.getPrototypeOf(Ripple)).apply(this, arguments));
  }

  _createClass(Ripple, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.el = _reactDom2.default.findDOMNode(this);
      this.initRipple();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.checkProps(nextProps);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var didChange = ['primary', 'accent', 'unbounded'].some(function (key) {
        return _this2.props[key] !== prevProps[key];
      });
      if (didChange) {
        this.destroyRipple();
        this.initRipple();
        this.forceUpdate();
      }
    }
  }, {
    key: 'checkProps',
    value: function checkProps(nextProps) {
      if (this.api.unbounded !== nextProps.unbounded) {
        this.api.unbounded = nextProps.unbounded;
      }
    }
  }, {
    key: 'initRipple',
    value: function initRipple() {
      // a stupid hack for the test environment where this ends up undefined
      if (process.env.NODE_ENV === 'test' && this.el) {
        this.el.dataset = {};
      }

      this.api = new _mdc.MDCRipple(this.el);
      this.checkProps(this.props);
    }
  }, {
    key: 'destroyRipple',
    value: function destroyRipple() {
      this.api.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var child = React.Children.only(this.props.children);
      var _props = this.props,
          accent = _props.accent,
          primary = _props.primary;

      /**
       * Collect the ripple classes so we make sure React doesnt
       * destroy them when we re-render.
       */

      var rippleClasses = (this.el ? this.el.getAttribute('class').split(' ') : []).filter(function (cls) {
        if (~['mdc-ripple-surface--primary', 'mdc-ripple-surface--accent', 'mdc-ripple-surface'].indexOf(cls)) {
          return false;
        }

        return cls.startsWith('mdc-ripple');
      });

      var classes = _classnames2.default.apply(undefined, [child.props.className].concat(_toConsumableArray(rippleClasses), [{
        'mdc-ripple-surface--primary': primary,
        'mdc-ripple-surface--accent': accent
      }]));

      var dedupedClasses = Array.from(new Set(classes.split(' '))).join(' ');

      return React.cloneElement(child, Object.assign({}, child.props, {
        className: dedupedClasses
      }));
    }
  }]);

  return Ripple;
}(React.Component);

Object.defineProperty(Ripple, 'defaultProps', {
  enumerable: true,
  writable: true,
  value: {
    primary: false,
    accent: false,
    unbounded: false
  }
});
exports.default = Ripple;
