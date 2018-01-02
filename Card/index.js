'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = exports.CardAction = exports.CardHorizontalBlock = exports.CardMediaItem = exports.CardMedia = exports.CardActions = exports.CardSupportingText = exports.CardSubtitle = exports.CardTitle = exports.CardPrimary = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Base = require('../Base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @module Card
 */


/**
 * Primary card content
 */
var CardPrimary = exports.CardPrimary = (0, _Base.simpleTag)({
  displayName: 'CardPrimary',
  tag: 'section',
  classNames: 'mdc-card__primary'
});

/** Title for the Card */
var CardTitle = exports.CardTitle = function (_simpleTag) {
  _inherits(CardTitle, _simpleTag);

  function CardTitle() {
    _classCallCheck(this, CardTitle);

    return _possibleConstructorReturn(this, (CardTitle.__proto__ || Object.getPrototypeOf(CardTitle)).apply(this, arguments));
  }

  _createClass(CardTitle, [{
    key: 'render',
    value: function render() {
      return _get(CardTitle.prototype.__proto__ || Object.getPrototypeOf(CardTitle.prototype), 'render', this).call(this);
    }
  }]);

  return CardTitle;
}((0, _Base.simpleTag)({
  displayName: 'CardTitle',
  tag: 'h1',
  classNames: function classNames(props) {
    return ['mdc-card__title', {
      'mdc-card__title--large': props.large
    }];
  },
  defaultProps: {
    large: false
  },
  consumeProps: ['large']
}));

/** Subtitle for the Card */


var CardSubtitle = exports.CardSubtitle = (0, _Base.simpleTag)({
  displayName: 'CardSubtitle',
  tag: 'h2',
  classNames: 'mdc-card__subtitle'
});

/** Supporting text for the Card. */
var CardSupportingText = exports.CardSupportingText = (0, _Base.simpleTag)({
  displayName: 'CardSupportingText',
  tag: 'section',
  classNames: 'mdc-card__supporting-text'
});

/** Action Button for the Card */
var CardActions = exports.CardActions = function (_simpleTag2) {
  _inherits(CardActions, _simpleTag2);

  function CardActions() {
    _classCallCheck(this, CardActions);

    return _possibleConstructorReturn(this, (CardActions.__proto__ || Object.getPrototypeOf(CardActions)).apply(this, arguments));
  }

  _createClass(CardActions, [{
    key: 'render',
    value: function render() {
      return _get(CardActions.prototype.__proto__ || Object.getPrototypeOf(CardActions.prototype), 'render', this).call(this);
    }
  }]);

  return CardActions;
}((0, _Base.simpleTag)({
  displayName: 'CardActions',
  tag: 'section',
  classNames: function classNames(props) {
    return ['mdc-card__actions', { 'mdc-card__actions--vertical': props.vertical }];
  },
  defaultProps: {
    vertical: undefined
  }
}));

/** Media for the Card */


var CardMedia = exports.CardMedia = (0, _Base.simpleTag)({
  displayName: 'CardMedia',
  tag: 'section',
  classNames: 'mdc-card__media'
});

/** Inidividual Media Item for the Card */
var CardMediaItem = exports.CardMediaItem = function (_simpleTag3) {
  _inherits(CardMediaItem, _simpleTag3);

  function CardMediaItem() {
    _classCallCheck(this, CardMediaItem);

    return _possibleConstructorReturn(this, (CardMediaItem.__proto__ || Object.getPrototypeOf(CardMediaItem)).apply(this, arguments));
  }

  _createClass(CardMediaItem, [{
    key: 'render',
    value: function render() {
      return _get(CardMediaItem.prototype.__proto__ || Object.getPrototypeOf(CardMediaItem.prototype), 'render', this).call(this);
    }
  }]);

  return CardMediaItem;
}((0, _Base.simpleTag)({
  displayName: 'CardMediaItem',
  tag: 'img',
  classNames: function classNames(props) {
    return ['mdc-card__media-item', {
      'mdc-card__media-item--1dot5x	': props.oneDotFiveX,
      'mdc-card__media-item--2x': props.twoX,
      'mdc-card__media-item--3x': props.threeX
    }];
  }
}));

/** Horizontal content for the Card */


var CardHorizontalBlock = exports.CardHorizontalBlock = (0, _Base.simpleTag)({
  displayName: 'CardHorizontalBlock',
  classNames: 'mdc-card__horizontal-block'
});

/** A Card action Button */
var CardAction = exports.CardAction = (0, _Base.simpleTag)({
  displayName: 'CardAction',
  tag: _Button2.default,
  classNames: 'mdc-card__action',
  defaultProps: {
    compact: true
  }
});

/** A Card Component */
var Card = exports.Card = function (_simpleTag4) {
  _inherits(Card, _simpleTag4);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      return _get(Card.prototype.__proto__ || Object.getPrototypeOf(Card.prototype), 'render', this).call(this);
    }
  }]);

  return Card;
}((0, _Base.simpleTag)({
  displayName: 'Card',
  classNames: function classNames(props) {
    return ['mdc-card', {
      'mdc-card--theme-dark': props.themeDark
    }];
  },
  defaultProps: {
    themeDark: false
  },
  consumeProps: ['themeDark']
}));

exports.default = Card;
