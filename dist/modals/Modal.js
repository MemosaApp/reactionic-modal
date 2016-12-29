'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bool = _react.PropTypes.bool,
    node = _react.PropTypes.node;
var ModalWrapper = (_temp = _class = function (_Component) {
  _inherits(ModalWrapper, _Component);

  function ModalWrapper(props) {
    _classCallCheck(this, ModalWrapper);

    var _this = _possibleConstructorReturn(this, (ModalWrapper.__proto__ || Object.getPrototypeOf(ModalWrapper)).call(this, props));

    _this.state = {
      isOpen: props.isOpen
    };
    return _this;
  }

  _createClass(ModalWrapper, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.isOpen === false && this.props.isOpen === true) {
        // A toggle happened

        setTimeout(function () {
          _this2.setState({
            isOpen: false
          });
        }, 200);
      } else {
        this.setState({
          isOpen: nextProps.isOpen
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var isOpen = this.state.isOpen;

      var _props = this.props,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['children']);

      return _react2.default.createElement(
        _reactModal2.default,
        _extends({}, props, { isOpen: isOpen }),
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          {
            transitionAppear: true,
            transitionAppearTimeout: 200,
            transitionEnter: true,
            transitionEnterTimeout: 200,
            transitionLeaveTimeout: 200,
            transitionName: 'custom-modal-animation'
          },
          this.props.isOpen ? _react2.default.Children.map(children, function (element, index) {
            return _react2.default.cloneElement(element, {
              key: index
            });
          }) : []
        )
      );
    }
  }]);

  return ModalWrapper;
}(_react.Component), _class.propTypes = {
  children: node,
  isOpen: bool
}, _class.defaultProps = {
  isOpen: false
}, _temp);
exports.default = ModalWrapper;