'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = exports.SliderFocusRing = exports.SliderThumb = exports.SliderPinValueMarker = exports.SliderPin = exports.SliderThumbContainer = exports.SliderTrackMarkerContainer = exports.SliderTrack = exports.SliderTrackContainer = exports.SliderRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mdc = require('@material/slider/dist/mdc.slider');

var _noop = require('../Base/noop');

var _Base = require('../Base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderRoot = exports.SliderRoot = (0, _Base.simpleTag)({
  displayName: 'SliderRoot',
  classNames: 'mdc-slider'
});

var SliderTrackContainer = exports.SliderTrackContainer = (0, _Base.simpleTag)({
  displayName: 'SliderTrackContainer',
  classNames: 'mdc-slider__track-container'
});

var SliderTrack = exports.SliderTrack = (0, _Base.simpleTag)({
  displayName: 'SliderTrack',
  classNames: 'mdc-slider__track'
});

var SliderTrackMarkerContainer = exports.SliderTrackMarkerContainer = (0, _Base.simpleTag)({
  displayName: 'SliderTrackMarkerContainer',
  classNames: 'mdc-slider__track-marker-container'
});

var SliderThumbContainer = exports.SliderThumbContainer = (0, _Base.simpleTag)({
  displayName: 'SliderThumbContainer',
  classNames: 'mdc-slider__thumb-container'
});

var SliderPin = exports.SliderPin = (0, _Base.simpleTag)({
  displayName: 'SliderPin',
  classNames: 'mdc-slider__pin'
});

var SliderPinValueMarker = exports.SliderPinValueMarker = (0, _Base.simpleTag)({
  displayName: 'SliderPinValueMarker',
  tag: 'span',
  classNames: 'mdc-slider__pin-value-marker'
});

var SliderThumb = exports.SliderThumb = function SliderThumb(props) {
  return React.createElement(
    'svg',
    { className: 'mdc-slider__thumb', width: '21', height: '21' },
    React.createElement('circle', { cx: '10.5', cy: '10.5', r: '7.875' })
  );
};

var SliderFocusRing = exports.SliderFocusRing = (0, _Base.simpleTag)({
  displayName: 'SliderFocusRing',
  classNames: 'mdc-slider__focus-ring'
});

var Slider = (0, _Base.withMDC)({
  mdcConstructor: _mdc.MDCSlider,
  mdcElementRef: true,
  mdcEvents: {
    'MDCSlider:input': function MDCSliderInput(evt, props, api) {
      evt.target.value = api.value;
      props.onChange && props.onChange(evt);
    },
    'MDCSlider:change': function MDCSliderChange(evt, props, api) {
      evt.target.value = api.value;
      props.onChange && props.onChange(evt);
    }
  },
  defaultProps: {
    onChange: _noop.noop,
    value: 0,
    min: 0,
    max: 100,
    step: undefined,
    discrete: false,
    displayMarkers: false,
    disabled: false
  },
  onUpdate: function onUpdate(props, nextProps, api, inst) {
    if (api && api.value !== nextProps.value) {
      api.value = nextProps.value;
      nextProps.onChange && nextProps.onChange({ target: { value: api.value } });
    }

    ['min', 'max', 'step', 'disabled'].forEach(function (key) {
      if (api) {
        api[key] = nextProps[key];
      }
    });

    // Reinit on discrete or display marker change
    if (props && (props.discrete !== nextProps.discrete || props.displayMarkers !== nextProps.displayMarkers)) {
      window.requestAnimationFrame(function () {
        inst.mdcComponentReinit();
      });
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
          value = _props.value,
          min = _props.min,
          max = _props.max,
          discrete = _props.discrete,
          displayMarkers = _props.displayMarkers,
          mdcElementRef = _props.mdcElementRef,
          step = _props.step,
          onChange = _props.onChange,
          className = _props.className,
          disabled = _props.disabled,
          rest = _objectWithoutProperties(_props, ['value', 'min', 'max', 'discrete', 'displayMarkers', 'mdcElementRef', 'step', 'onChange', 'className', 'disabled']);

      if (displayMarkers && !discrete) {
        console.warn('The \'displayMarkers\' prop on rmwc Slider will \n        only work in conjunction with the \'discrete\' prop');
      }

      var classes = (0, _classnames2.default)(className, {
        'mdc-slider--discrete': discrete,
        'mdc-slider--display-markers': displayMarkers && discrete
      });

      var dataStep = step ? { 'data-step': step } : {};

      return React.createElement(
        SliderRoot,
        Object.assign({
          elementRef: mdcElementRef,
          className: classes,
          tabIndex: '0',
          role: 'slider',
          'aria-valuemin': min,
          'aria-valuemax': max,
          'aria-valuenow': value,
          'aria-label': 'Select Value'
        }, disabled ? { 'aria-disabled': disabled } : {}, dataStep, rest),
        React.createElement(
          SliderTrackContainer,
          null,
          React.createElement(SliderTrack, null),
          displayMarkers && React.createElement(SliderTrackMarkerContainer, null)
        ),
        React.createElement(
          SliderThumbContainer,
          null,
          discrete && React.createElement(
            SliderPin,
            null,
            React.createElement(SliderPinValueMarker, null)
          ),
          React.createElement(SliderThumb, null),
          React.createElement(SliderFocusRing, null)
        )
      );
    }
  }]);

  return _class;
}(React.Component), Object.defineProperty(_class, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Slider'
}), _temp));

exports.Slider = Slider;
exports.default = Slider;
