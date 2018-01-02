'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = exports.MultiSelect = exports.SelectFormField = exports.SelectMenu = exports.SelectBottomLine = exports.SelectSelectedText = exports.SelectLabel = exports.SelectSurface = exports.SelectRoot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _mdc = require('@material/select/dist/mdc.select');

var _List = require('../List');

var _Menu = require('../Menu');

var _Base = require('../Base');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectRoot = exports.SelectRoot = (0, _Base.simpleTag)({
  displayName: 'SelectRoot',
  classNames: 'mdc-select',
  defaultProps: {
    role: 'listbox',
    tabIndex: '0'
  }
});

var SelectSurface = exports.SelectSurface = (0, _Base.simpleTag)({
  displayName: 'SelectSurface',
  classNames: 'mdc-select__surface'
});

var SelectLabel = exports.SelectLabel = (0, _Base.simpleTag)({
  displayName: 'SelectLabel',
  classNames: function classNames(props) {
    return ['mdc-select__label', {
      'mdc-select__label--float-above': props.placeholder || props.value
    }];
  }
});

var SelectSelectedText = exports.SelectSelectedText = (0, _Base.simpleTag)({
  displayName: 'SelectSelectedText',
  classNames: 'mdc-select__selected-text'
});

var SelectBottomLine = exports.SelectBottomLine = (0, _Base.simpleTag)({
  displayName: 'SelectBottomLine',
  classNames: 'mdc-select__bottom-line'
});

var SelectMenu = exports.SelectMenu = (0, _Base.simpleTag)({
  displayName: 'SelectMenu',
  tag: _Menu.MenuRoot,
  classNames: 'mdc-select__menu'
});

var SelectFormField = exports.SelectFormField = (0, _Base.simpleTag)({
  displayName: 'SelectMenu',
  classNames: 'rmwc-select-form-field',
  defaultProps: {
    style: {
      height: '48px',
      marginTop: '16px',
      marginBottom: '8px',
      display: 'inline-flex',
      alignItems: 'flex-end'
    }
  }
});

var MultiSelect = exports.MultiSelect = (0, _Base.simpleTag)({
  tag: _List.List,
  classNames: 'mdc-multi-select'
});

/**
 * Get the display value for a select from its formatted options
 */
var getDisplayValue = function getDisplayValue(value, options, placeholder) {
  placeholder = placeholder || '\xA0';

  if (options) {
    var option = options.find(function (v) {
      return v.value === value;
    });

    return option ? option.value : placeholder;
  }

  return value || placeholder;
};

/**
 * Takes multiple structures for options and returns [{label: 'label', value: 'value', ...rest}]
 */
var createSelectOptions = function createSelectOptions(options) {
  // preformatted array
  if (Array.isArray(options) && options[0] && _typeof(options[0]) === 'object') {
    return options.map(function (opt) {
      return Object.assign({}, opt, { options: createSelectOptions(opt.options) });
    });
  }

  // simple array
  if (Array.isArray(options)) {
    return options.map(function (value) {
      return { value: value, label: value };
    });
  }

  // value => label objects
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    return Object.entries(options).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          value = _ref2[0],
          label = _ref2[1];

      return {
        value: value,
        label: label
      };
    });
  }

  // default, just return
  return options;
};

var Select = (0, _Base.withMDC)({
  mdcConstructor: _mdc.MDCSelect,
  mdcElementRef: true,
  mdcEvents: {
    'MDCSelect:change': function MDCSelectChange(evt, props, api) {
      evt.target.value = api.value;
      props.onChange && props.onChange(evt);
    }
  },
  defaultProps: {
    cssOnly: false,
    options: undefined,
    label: undefined,
    placeholder: undefined,
    disabled: false
  },
  onMount: function onMount(props, api) {
    window.requestAnimationFrame(function () {
      try {
        api.foundation_.resize();
      } catch (err) {}
    });
  },
  didUpdate: function didUpdate(props, nextProps, api, inst) {
    // we might be in cssOnly mode, or lacking an api
    if (!api) return;

    var valueDidChange = props && props.value !== nextProps.value;
    var optionsDidChange = props && JSON.stringify(props.options) !== JSON.stringify(nextProps.options);
    var isFirstRun = props === undefined;
    var placeholderDidChange = props && props.placeholder !== nextProps.placeholder;

    if (optionsDidChange) {
      api.foundation_.selectedIndex = 0;
      inst.mdcComponentReinit();

      // escape out to avoid errors, didUpdate will run again on component init
      return;
    }

    if (valueDidChange || optionsDidChange || isFirstRun || placeholderDidChange) {
      var newIndex = api.options.indexOf(api.nameditem(nextProps.value));
      api.selectedIndex = newIndex === -1 && nextProps.placeholder ? 0 : newIndex;

      window.requestAnimationFrame(function () {
        try {
          api.foundation_.resize();
        } catch (err) {
          console.log(err);
        }
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
          _props$placeholder = _props.placeholder,
          placeholder = _props$placeholder === undefined ? '' : _props$placeholder,
          children = _props.children,
          value = _props.value,
          _props$label = _props.label,
          label = _props$label === undefined ? '' : _props$label,
          _props$options = _props.options,
          options = _props$options === undefined ? [] : _props$options,
          mdcElementRef = _props.mdcElementRef,
          cssOnly = _props.cssOnly,
          rest = _objectWithoutProperties(_props, ['placeholder', 'children', 'value', 'label', 'options', 'mdcElementRef', 'cssOnly']);

      var selectOptions = createSelectOptions(options);
      var displayValue = getDisplayValue(value, selectOptions, placeholder);

      if (cssOnly) {
        var SelectInnerRoot = rest.multiple ? MultiSelect : SelectSurface;
        var selectInner = React.createElement(
          SelectInnerRoot,
          Object.assign({ tag: 'select', value: value }, rest),
          !!placeholder.length && React.createElement(
            _List.ListItem,
            { tag: 'option', value: '_placeholder', 'tab-index': '0' },
            placeholder
          ),
          selectOptions && selectOptions.map(function (_ref3, i) {
            var label = _ref3.label,
                option = _objectWithoutProperties(_ref3, ['label']);

            if (option.options) {
              return React.createElement(
                _List.ListGroup,
                { tag: 'optgroup', label: label, key: label },
                option.options.map(function (_ref4, i) {
                  var label = _ref4.label,
                      option = _objectWithoutProperties(_ref4, ['label']);

                  return React.createElement(
                    _List.ListItem,
                    Object.assign({
                      tag: 'option',
                      key: label
                    }, option, {
                      value: option.value
                    }),
                    label
                  );
                })
              );
            }

            return React.createElement(
              _List.ListItem,
              Object.assign({
                tag: 'option',
                key: label
              }, option, {
                value: option.value
              }),
              label
            );
          }),
          children
        );

        // multiple selects dont include the wrapper or underline
        if (rest.multiple) {
          return selectInner;
        }

        return React.createElement(
          SelectRoot,
          Object.assign({ elementRef: mdcElementRef }, rest),
          selectInner,
          React.createElement(SelectBottomLine, null)
        );
      }

      return React.createElement(
        SelectRoot,
        Object.assign({ elementRef: mdcElementRef }, rest),
        React.createElement(
          SelectSurface,
          null,
          React.createElement(
            SelectLabel,
            { placeholder: placeholder, value: value },
            label
          ),
          React.createElement(
            SelectSelectedText,
            null,
            displayValue
          ),
          React.createElement(SelectBottomLine, null)
        ),
        React.createElement(
          SelectMenu,
          null,
          React.createElement(
            _Menu.MenuItems,
            null,
            !!placeholder.length && React.createElement(
              _List.ListItem,
              { role: 'option', id: '_placeholder', 'tab-index': '0' },
              placeholder
            ),
            selectOptions && selectOptions.map(function (_ref5, i) {
              var label = _ref5.label,
                  option = _objectWithoutProperties(_ref5, ['label']);

              return React.createElement(
                _List.ListItem,
                Object.assign({
                  key: i,
                  role: 'option',
                  tabIndex: '0'
                }, option, {
                  id: option.value
                }),
                label
              );
            }),
            children
          )
        )
      );
    }
  }]);

  return _class;
}(React.Component), Object.defineProperty(_class, 'displayName', {
  enumerable: true,
  writable: true,
  value: 'Select'
}), _temp));

exports.Select = Select;
exports.default = Select;
