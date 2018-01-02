'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMDC = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _noop = require('./noop');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * HOC that adds ripples to any component
 */
var withMDC = function withMDC(_ref) {
  var MDCConstructor = _ref.mdcConstructor,
      _ref$mdcEvents = _ref.mdcEvents,
      mdcEvents = _ref$mdcEvents === undefined ? {} : _ref$mdcEvents,
      _ref$mdcElementRef = _ref.mdcElementRef,
      mdcElementRef = _ref$mdcElementRef === undefined ? false : _ref$mdcElementRef,
      _ref$defaultProps = _ref.defaultProps,
      defaultProps = _ref$defaultProps === undefined ? {} : _ref$defaultProps,
      _ref$onMount = _ref.onMount,
      onMount = _ref$onMount === undefined ? _noop.noop : _ref$onMount,
      _ref$onUpdate = _ref.onUpdate,
      onUpdate = _ref$onUpdate === undefined ? _noop.noop : _ref$onUpdate,
      _ref$didUpdate = _ref.didUpdate,
      didUpdate = _ref$didUpdate === undefined ? _noop.noop : _ref$didUpdate,
      _ref$shouldInit = _ref.shouldInit,
      shouldInit = _ref$shouldInit === undefined ? function () {
    return true;
  } : _ref$shouldInit;
  return function (Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        Object.defineProperty(_this, 'mdcApi', {
          enumerable: true,
          writable: true,
          value: undefined
        });
        Object.defineProperty(_this, 'mdcListeners', {
          enumerable: true,
          writable: true,
          value: []
        });
        Object.defineProperty(_this, 'mdcRootElement', {
          enumerable: true,
          writable: true,
          value: undefined
        });
        Object.defineProperty(_this, 'elementRefProps', {
          enumerable: true,
          writable: true,
          value: {}
        });

        _this.mdcSetRootElement = _this.mdcSetRootElement.bind(_this);
        _this.elementRefProps = mdcElementRef ? {
          mdcElementRef: _this.mdcSetRootElement
        } : {};
        return _this;
      }

      _createClass(_class, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.mdcComponentInit();
        }
      }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps) {
          onUpdate(this.props, nextProps, this.mdcApi, this);
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          didUpdate(prevProps, this.props, this.mdcApi, this);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.mdcComponentDestroy();
        }
      }, {
        key: 'mdcComponentInit',
        value: function mdcComponentInit() {
          var _this2 = this;

          if (MDCConstructor && !this.props.cssOnly) {
            var el = this.mdcGetRootElement();

            // a stupid hack for the test environment where this ends up undefined
            if (process.env.NODE_ENV === 'test') {
              if (el) {
                el.dataset = {};
              }
            }

            try {
              this.mdcApi = new MDCConstructor(el);
              this.props.apiRef(this.mdcApi);
            } catch (err) {
              console.warn(MDCConstructor.name + ' failed to initialize because of the following error:', err);
            }
          }
          onMount(this.props, this.mdcApi, this);

          Object.entries(mdcEvents).forEach(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                eventName = _ref3[0],
                handler = _ref3[1];

            _this2.mdcRegisterListener(eventName, handler);
          });

          onUpdate(undefined, this.props, this.mdcApi, this);
          didUpdate(undefined, this.props, this.mdcApi, this);
        }
      }, {
        key: 'mdcComponentReinit',
        value: function mdcComponentReinit() {
          this.mdcComponentDestroy();
          this.mdcComponentInit();
        }
      }, {
        key: 'mdcComponentDestroy',
        value: function mdcComponentDestroy() {
          this.mdcUnregisterAllListeners();
          this.mdcApi && this.mdcApi.destroy();
        }
      }, {
        key: 'mdcRegisterListener',
        value: function mdcRegisterListener(eventName, func) {
          var _this3 = this;

          var wrappedHandler = function wrappedHandler(evt) {
            return func(evt, _this3.props, _this3.mdcApi);
          };
          this.mdcApi && this.mdcApi.listen(eventName, wrappedHandler);
          this.mdcListeners.push(function () {
            return _this3.mdcApi && _this3.mdcApi.unlisten(eventName, wrappedHandler);
          });
        }
      }, {
        key: 'mdcUnregisterAllListeners',
        value: function mdcUnregisterAllListeners() {
          this.mdcListeners.forEach(function (unlisten) {
            return unlisten();
          });
          this.mdcListeners.length = 0;
        }
      }, {
        key: 'mdcSetRootElement',
        value: function mdcSetRootElement(el) {
          this.mdcRootElement = el;
          return el;
        }
      }, {
        key: 'mdcGetRootElement',
        value: function mdcGetRootElement() {
          return this.mdcRootElement || _reactDom2.default.findDOMNode(this);
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props,
              apiRef = _props.apiRef,
              rest = _objectWithoutProperties(_props, ['apiRef']);

          return React.createElement(Component, Object.assign({}, this.elementRefProps, rest));
        }
      }]);

      return _class;
    }(React.Component), Object.defineProperty(_class, 'defaultProps', {
      enumerable: true,
      writable: true,
      value: Object.assign({
        apiRef: _noop.noop
      }, defaultProps)
    }), Object.defineProperty(_class, 'displayName', {
      enumerable: true,
      writable: true,
      value: 'withMDC(' + Component.displayName + ')'
    }), _temp;
  };
};
exports.withMDC = withMDC;
