'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = exports.ListDivider = exports.ListGroupSubheader = exports.ListGroup = exports.ListItemEndDetail = exports.ListItemStartDetail = exports.ListItemSecondaryText = exports.ListItemText = exports.ListItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Base = require('../Base');

var _Icon = require('../Icon');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = exports.ListItem = (0, _Base.withRipple)((_temp = _class = function (_simpleTag) {
  _inherits(_class, _simpleTag);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      return _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'render', this).call(this);
    }
  }]);

  return _class;
}((0, _Base.simpleTag)({
  displayName: 'ListItemRoot',
  classNames: function classNames(props) {
    return ['mdc-list-item', {
      'mdc-list-item--selected': props.selected,
      'mdc-list-item--activated': props.activated,
      'mdc-permanent-drawer--selected': props.permanentDrawerSelected,
      'mdc-persistent-drawer--selected': props.persistentDrawerSelected,
      'mdc-temporary-drawer--selected': props.temporaryDrawerSelected
    }];
  },
  defaultProps: {
    permanentDrawerSelected: false,
    persistentDrawerSelected: false,
    temporaryDrawerSelected: false
  },
  consumeProps: ['selected', 'activated', 'permanentDrawerSelected', 'persistentDrawerSelected', 'temporaryDrawerSelected']
})), Object.defineProperty(_class, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'ListItem'
}), _temp));

var ListItemText = exports.ListItemText = (0, _Base.simpleTag)({
  displayName: 'ListItemText',
  tag: 'span',
  classNames: 'mdc-list-item__text'
});

var ListItemSecondaryText = exports.ListItemSecondaryText = (0, _Base.simpleTag)({
  displayName: 'ListItemSecondaryText',
  tag: 'span',
  classNames: 'mdc-list-item__secondary-text'
});

var ListItemStartDetail = exports.ListItemStartDetail = (0, _Base.simpleTag)({
  displayName: 'ListItemStartDetail',
  classNames: 'mdc-list-item__start-detail',
  tag: _Icon.Icon
});

var ListItemEndDetail = exports.ListItemEndDetail = (0, _Base.simpleTag)({
  displayName: 'ListItemStartDetail',
  classNames: 'mdc-list-item__end-detail',
  tag: _Icon.Icon
});

var ListGroup = exports.ListGroup = (0, _Base.simpleTag)({
  displayName: 'ListGroup',
  classNames: 'mdc-list-group'
});

var ListGroupSubheader = exports.ListGroupSubheader = (0, _Base.simpleTag)({
  displayName: 'ListGroupSubheader',
  classNames: 'mdc-list-group__subheader'
});

var ListDivider = exports.ListDivider = (0, _Base.simpleTag)({
  displayName: 'ListDivider',
  classNames: 'mdc-list-divider'
});

var List = exports.List = function (_simpleTag2) {
  _inherits(List, _simpleTag2);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      return _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'render', this).call(this);
    }
  }]);

  return List;
}((0, _Base.simpleTag)({
  displayName: 'List',
  classNames: function classNames(props) {
    return ['mdc-list', {
      'mdc-list--dense': props.dense,
      'mdc-list--two-line': props.twoLine,
      'mdc-list--avatar-list': props.avatarList
    }];
  },
  defaultProps: {
    dense: false,
    twoLine: false,
    avatarList: false
  },
  consumeProps: ['dense', 'twoLine', 'avatarList']
}));

exports.default = List;
