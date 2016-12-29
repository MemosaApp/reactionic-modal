'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var func = _react.PropTypes.func,
    node = _react.PropTypes.node,
    string = _react.PropTypes.string;
var IonModal = (_temp = _class = function (_Component) {
  _inherits(IonModal, _Component);

  function IonModal() {
    _classCallCheck(this, IonModal);

    return _possibleConstructorReturn(this, (IonModal.__proto__ || Object.getPrototypeOf(IonModal)).apply(this, arguments));
  }

  _createClass(IonModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          barClasses = _props.barClasses,
          customClasses = _props.customClasses,
          children = _props.children,
          onClose = _props.onClose,
          title = _props.title;


      return _react2.default.createElement(
        'div',
        { className: 'modal-slide-in-up' },
        _react2.default.createElement(
          'div',
          { className: 'modal-backdrop active' },
          _react2.default.createElement(
            'div',
            { className: 'modal-wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'modal ' + customClasses },
              _react2.default.createElement(
                'div',
                { className: 'bar bar-header bar--modal ' + barClasses },
                _react2.default.createElement(
                  'h2',
                  { className: 'title' },
                  title
                ),
                _react2.default.createElement(
                  'button',
                  { className: 'button button-icon', onClick: onClose },
                  _react2.default.createElement('i', { className: 'icon ion-ios-close-empty' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'content has-header overflow-scroll' },
                _react2.default.createElement(
                  'div',
                  { className: 'padding' },
                  children
                )
              )
            )
          )
        )
      );
    }
  }]);

  return IonModal;
}(_react.Component), _class.propTypes = {
  barClasses: string,
  children: node,
  customClasses: string,
  onClose: func,
  title: string
}, _class.defaultProps = {
  barClasses: '',
  customClasses: '',
  onClose: function onClose() {},
  title: ''
}, _temp);
exports.default = IonModal;