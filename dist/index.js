'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = require('./modals/Modal');

Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Modal).default;
  }
});

var _IonModal = require('./modals/IonModal');

Object.defineProperty(exports, 'IonModal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_IonModal).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }