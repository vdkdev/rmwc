'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTheme = exports.parseThemeOptions = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Actually parses the theme options
 */
var parseThemeOptions = exports.parseThemeOptions = function parseThemeOptions(theme) {
  if (theme) {
    var themeItems = Array.isArray(theme) ? theme : theme.split(' ');
    return themeItems.map(function (v) {
      return 'mdc-theme--' + v;
    });
  }
  return [];
};

/**
 * HOC that adds themeability to any component
 */
var withTheme = function withTheme(Component) {
  var HOC = function HOC(_ref) {
    var theme = _ref.theme,
        className = _ref.className,
        rest = _objectWithoutProperties(_ref, ['theme', 'className']);

    if (theme) {
      var classes = (0, _classnames2.default)(className, parseThemeOptions(theme));
      return React.createElement(Component, Object.assign({ className: classes }, rest));
    }

    return React.createElement(Component, Object.assign({ className: className }, rest));
  };

  HOC.displayName = 'withTheme';

  return HOC;
};
exports.withTheme = withTheme;
