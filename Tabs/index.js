'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabBarScroller = exports.TabBarScrollerScrollFrame = exports.TabBarScrollerIndicatorInner = exports.TabBarScrollerIndicatorForward = exports.TabBarScrollerIndicatorBack = exports.TabBarScrollerRoot = exports.TabBar = exports.TabBar_ = exports.TabBarIndicatorEl = exports.TabBarRoot = exports.Tab = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mdc = require('@material/tabs/dist/mdc.tabs');

var _Base = require('../Base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = exports.Tab = (0, _Base.simpleTag)({
  displayName: 'Tab',
  classNames: 'mdc-tab'
});

var TabBarRoot = exports.TabBarRoot = (0, _Base.simpleTag)({
  displayName: 'TabBarRoot',
  tag: 'nav',
  classNames: 'mdc-tab-bar'
});

var TabBarIndicatorEl = exports.TabBarIndicatorEl = (0, _Base.simpleTag)({
  displayName: 'TabBarIndicatorEl',
  tag: 'span',
  classNames: 'mdc-tab-bar__indicator'
});

var mdcTabBarEvents = {
  'MDCTabBar:change': function MDCTabBarChange(evt, props, api) {
    evt.target.value = api.activeTabIndex;
    props.onChange(evt);
  }
};

var TabBar_ = (0, _Base.withMDC)({
  mdcConstructor: _mdc.MDCTabBar,
  mdcEvents: mdcTabBarEvents,

  defaultProps: {
    onChange: _Base.noop,
    activeTabIndex: 0
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
          children = _props.children,
          activeTabIndex = _props.activeTabIndex,
          rest = _objectWithoutProperties(_props, ['children', 'activeTabIndex']);

      return React.createElement(
        TabBarRoot,
        Object.assign({}, rest, {
          className: this.context.tabBarScrollerPresent && 'mdc-tab-bar-scroller__scroll-frame__tabs' }),
        children,
        React.createElement(TabBarIndicatorEl, null)
      );
    }
  }]);

  return _class;
}(React.Component), Object.defineProperty(_class, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'TabBar'
}), Object.defineProperty(_class, 'contextTypes', {
  enumerable: true,
  writable: true,
  value: {
    tabBarScrollerPresent: _propTypes2.default.bool
  }
}), _temp));

exports.TabBar_ = TabBar_;

var TabBar = exports.TabBar = function (_TabBar_) {
  _inherits(TabBar, _TabBar_);

  function TabBar() {
    _classCallCheck(this, TabBar);

    return _possibleConstructorReturn(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).apply(this, arguments));
  }

  _createClass(TabBar, [{
    key: 'mdcComponentInit',
    value: function mdcComponentInit() {
      if (!this.context.tabBarScrollerPresent) {
        _get(TabBar.prototype.__proto__ || Object.getPrototypeOf(TabBar.prototype), 'mdcComponentInit', this).call(this);
        // fixes no md-tab--active class on the tab at 0
        this.mdcApi.foundation_.adapter_.setTabActiveAtIndex(this.props.activeTabIndex, true);
        // OR      
        // this.mdcApi.foundation_.activeTabIndex_ = -1;
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState, nextContext) {
      var _this3 = this;

      if (nextContext.tabBarScrollerPresent && nextContext && nextContext.tabBarApi && this.mdcApi !== nextContext.tabBarApi) {
        //  set TabBar API created by TabBarScroller
        this.mdcApi = nextContext.tabBarApi;
        //  set activeTabIndex
        this.mdcApi.activeTabIndex = nextProps.activeTabIndex;
        //  fixes no md-tab--active class on the tab at 0
        this.mdcApi.foundation_.adapter_.setTabActiveAtIndex(nextProps.activeTabIndex, true);
        // remove old listeners
        this.mdcUnregisterAllListeners();
        // Hook event handlers
        Object.entries(mdcTabBarEvents).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              eventName = _ref2[0],
              handler = _ref2[1];

          _this3.mdcRegisterListener(eventName, handler);
        });
      } else if (this.mdcApi && (!this.props || this.props.activeTabIndex !== nextProps.activeTabIndex)) {
        this.mdcApi.activeTabIndex = nextProps.activeTabIndex;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (!this.mdcApi) return;
      // check if tabs have changed
      var childrenDidChange = prevProps && prevProps.children && this.props && this.props.children && JSON.stringify(prevProps.children.map(function (_ref3) {
        var key = _ref3.key;
        return key;
      })) !== JSON.stringify(this.props.children.map(function (_ref4) {
        var key = _ref4.key;
        return key;
      }));

      if (childrenDidChange && this.mdcApi.tabs_) {
        // destroy the foundation for all tabs 
        // manually to remove all  listeners 
        this.mdcApi.tabs_.forEach(function (mdcTab) {
          mdcTab.foundation_ && mdcTab.foundation_.destroy();
        });
        // when tab scroller is wrapping the component
        if (this.context.tabBarScrollerPresent) {
          // destroy the foundation
          this.mdcComponentDestroy();
          // trigger reinit on the scroller container
          this.context.tabBarScrollerReinit();
        } else {
          // reinit
          this.mdcComponentReinit();
        }
      }
    }
  }]);

  return TabBar;
}(TabBar_);

Object.defineProperty(TabBar, 'contextTypes', {
  enumerable: true,
  writable: true,
  value: {
    tabBarApi: _propTypes2.default.object,
    tabBarScrollerPresent: _propTypes2.default.bool,
    tabBarScrollerReinit: _propTypes2.default.func
  }
});
var TabBarScrollerRoot = exports.TabBarScrollerRoot = (0, _Base.simpleTag)({
  displayName: 'TabBarScrollerRoot',
  tag: 'div',
  classNames: 'mdc-tab-bar-scroller'
});

var TabBarScrollerIndicatorBack = exports.TabBarScrollerIndicatorBack = (0, _Base.simpleTag)({
  displayName: 'TabBarScrollerIndicatorBack',
  tag: 'div',
  classNames: ['mdc-tab-bar-scroller__indicator', 'mdc-tab-bar-scroller__indicator--back']
});
var TabBarScrollerIndicatorForward = exports.TabBarScrollerIndicatorForward = (0, _Base.simpleTag)({
  displayName: 'TabBarScrollerIndicatorForward',
  tag: 'div',
  classNames: ['mdc-tab-bar-scroller__indicator', 'mdc-tab-bar-scroller__indicator--forward']
});

var TabBarScrollerIndicatorInner = exports.TabBarScrollerIndicatorInner = (0, _Base.simpleTag)({
  displayName: 'TabBarScrollerIndicatorInner',
  tag: 'a',
  classNames: ['mdc-tab-bar-scroller__indicator__inner', 'material-icons']
});

var TabBarScrollerScrollFrame = exports.TabBarScrollerScrollFrame = (0, _Base.simpleTag)({
  displayName: 'TabBarScrollerScrollFrameEl',
  tag: 'div',
  classNames: 'mdc-tab-bar-scroller__scroll-frame'
});

var TabBarScroller_ = (0, _Base.withMDC)({
  mdcConstructor: _mdc.MDCTabBarScroller
})(function (_React$Component2) {
  _inherits(_class2, _React$Component2);

  function _class2() {
    _classCallCheck(this, _class2);

    return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
  }

  _createClass(_class2, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          rest = _objectWithoutProperties(_props2, ['children']);

      return React.createElement(
        TabBarScrollerRoot,
        rest,
        React.createElement(
          TabBarScrollerIndicatorBack,
          null,
          React.createElement(
            TabBarScrollerIndicatorInner,
            null,
            'navigate_before'
          )
        ),
        React.createElement(
          TabBarScrollerScrollFrame,
          null,
          children
        ),
        React.createElement(
          TabBarScrollerIndicatorForward,
          null,
          React.createElement(
            TabBarScrollerIndicatorInner,
            null,
            'navigate_next'
          )
        )
      );
    }
  }]);

  return _class2;
}(React.Component));

var TabBarScroller = exports.TabBarScroller = function (_TabBarScroller_) {
  _inherits(TabBarScroller, _TabBarScroller_);

  function TabBarScroller(props) {
    _classCallCheck(this, TabBarScroller);

    var _this5 = _possibleConstructorReturn(this, (TabBarScroller.__proto__ || Object.getPrototypeOf(TabBarScroller)).call(this, props));

    _this5.reinitTabScroller = _this5.reinitTabScroller.bind(_this5);
    return _this5;
  }

  _createClass(TabBarScroller, [{
    key: 'reinitTabScroller',
    value: function reinitTabScroller() {
      _get(TabBarScroller.prototype.__proto__ || Object.getPrototypeOf(TabBarScroller.prototype), 'mdcComponentReinit', this).call(this);
      this.forceUpdate();
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        tabBarScrollerReinit: this.reinitTabScroller,
        tabBarApi: this.mdcApi && this.mdcApi.tabBar_,
        tabBarScrollerPresent: true
      };
    }
  }, {
    key: 'mdcComponentInit',
    value: function mdcComponentInit() {
      _get(TabBarScroller.prototype.__proto__ || Object.getPrototypeOf(TabBarScroller.prototype), 'mdcComponentInit', this).call(this);
      this.forceUpdate();
    }
  }]);

  return TabBarScroller;
}(TabBarScroller_);

Object.defineProperty(TabBarScroller, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'TabBarScroller'
});
Object.defineProperty(TabBarScroller, 'childContextTypes', {
  enumerable: true,
  writable: true,
  value: {
    tabBarScrollerReinit: _propTypes2.default.func,
    tabBarApi: _propTypes2.default.object,
    tabBarScrollerPresent: _propTypes2.default.bool
  }
});
exports.default = TabBar;
