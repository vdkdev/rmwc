'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = exports.MenuItems = exports.MenuRoot = exports.MenuAnchor = exports.MenuItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _mdc = require('@material/menu/dist/mdc.menu');

var _List = require('../List');

var _Base = require('../Base');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = exports.MenuItem = function MenuItem(props) {
  return React.createElement(_List.ListItem, Object.assign({ role: 'menuitem', tabIndex: '0' }, props));
};

var MenuAnchor = exports.MenuAnchor = (0, _Base.simpleTag)({
  displayName: 'MenuAnchor',
  classNames: 'mdc-menu-anchor'
});

var MenuRoot = exports.MenuRoot = (0, _Base.simpleTag)({
  displayName: 'MenuRoot',
  classNames: 'mdc-simple-menu',
  defaultProps: {
    tabIndex: '-1'
  }
});

var MenuItems = exports.MenuItems = (0, _Base.simpleTag)({
  displayName: 'MenuItems',
  tag: _List.List,
  classNames: 'mdc-simple-menu__items',
  defaultProps: {
    "role": 'menu',
    'aria-hidden': 'true'
  }
});

var handleMenuChange = function handleMenuChange(evt, props) {
  evt.target.value = false;
  props.onClose(evt);
};

var Menu = (0, _Base.withMDC)({
  mdcConstructor: _mdc.MDCSimpleMenu,
  mdcElementRef: true,
  mdcEvents: {
    'MDCSimpleMenu:cancel': function MDCSimpleMenuCancel(evt, props, api) {
      handleMenuChange(evt, props);
    },
    'MDCSimpleMenu:selected': function MDCSimpleMenuSelected(evt, props, api) {
      handleMenuChange(evt, props);
      props.onSelected(evt);
    }
  },
  defaultProps: {
    open: false,
    onSelected: _Base.noop,
    onClose: _Base.noop
  },
  onUpdate: function onUpdate(props, nextProps, api) {
    if (api && nextProps.open !== undefined && api.open !== nextProps.open) {
      api.open = nextProps.open;
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
          children = _props.children,
          open = _props.open,
          onClose = _props.onClose,
          onSelected = _props.onSelected,
          mdcElementRef = _props.mdcElementRef,
          rest = _objectWithoutProperties(_props, ['children', 'open', 'onClose', 'onSelected', 'mdcElementRef']);

      return React.createElement(
        MenuRoot,
        Object.assign({ elementRef: mdcElementRef }, rest),
        React.createElement(
          MenuItems,
          null,
          children
        )
      );
    }
  }]);

  return _class;
}(React.Component), Object.defineProperty(_class, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Menu'
}), _temp));
exports.Menu = Menu;
