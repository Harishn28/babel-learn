"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.promise.finally");

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var wait = function wait(time) {
  return new Promise(function (r) {
    setTimeout(r, time);
  });
};

function wru() {
  return _wru.apply(this, arguments);
}

function _wru() {
  _wru = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return wait(1000).finally(function (r) {
              return console.log('finally');
            });

          case 2:
            console.log('wait Over');

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _wru.apply(this, arguments);
}

wru();