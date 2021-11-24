"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.number.to-fixed.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Vup_k_formatter(num) {
  return Math.abs(num) > 999 ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k' : Math.sign(num) * Math.abs(num);
}

var _default = Vup_k_formatter;
exports.default = _default;