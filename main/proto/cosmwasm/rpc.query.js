"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRPCQueryClient = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var createRPCQueryClient = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var rpc;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            rpc = _ref.rpc;
            _context.next = 3;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("./wasm/v1/query.rpc.query"));
            });

          case 3:
            _context.t0 = _context.sent.QueryClientImpl;
            _context.t1 = rpc;
            _context.t2 = new _context.t0(_context.t1);
            _context.t3 = {
              v1: _context.t2
            };
            _context.t4 = {
              wasm: _context.t3
            };
            _context.next = 10;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/auth/v1beta1/query.rpc.query"));
            });

          case 10:
            _context.t5 = _context.sent.QueryClientImpl;
            _context.t6 = rpc;
            _context.t7 = new _context.t5(_context.t6);
            _context.t8 = {
              v1beta1: _context.t7
            };
            _context.next = 16;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/authz/v1beta1/query.rpc.query"));
            });

          case 16:
            _context.t9 = _context.sent.QueryClientImpl;
            _context.t10 = rpc;
            _context.t11 = new _context.t9(_context.t10);
            _context.t12 = {
              v1beta1: _context.t11
            };
            _context.next = 22;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/bank/v1beta1/query.rpc.query"));
            });

          case 22:
            _context.t13 = _context.sent.QueryClientImpl;
            _context.t14 = rpc;
            _context.t15 = new _context.t13(_context.t14);
            _context.t16 = {
              v1beta1: _context.t15
            };
            _context.next = 28;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/distribution/v1beta1/query.rpc.query"));
            });

          case 28:
            _context.t17 = _context.sent.QueryClientImpl;
            _context.t18 = rpc;
            _context.t19 = new _context.t17(_context.t18);
            _context.t20 = {
              v1beta1: _context.t19
            };
            _context.next = 34;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/evidence/v1beta1/query.rpc.query"));
            });

          case 34:
            _context.t21 = _context.sent.QueryClientImpl;
            _context.t22 = rpc;
            _context.t23 = new _context.t21(_context.t22);
            _context.t24 = {
              v1beta1: _context.t23
            };
            _context.next = 40;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/feegrant/v1beta1/query.rpc.query"));
            });

          case 40:
            _context.t25 = _context.sent.QueryClientImpl;
            _context.t26 = rpc;
            _context.t27 = new _context.t25(_context.t26);
            _context.t28 = {
              v1beta1: _context.t27
            };
            _context.next = 46;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/gov/v1beta1/query.rpc.query"));
            });

          case 46:
            _context.t29 = _context.sent.QueryClientImpl;
            _context.t30 = rpc;
            _context.t31 = new _context.t29(_context.t30);
            _context.t32 = {
              v1beta1: _context.t31
            };
            _context.next = 52;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/mint/v1beta1/query.rpc.query"));
            });

          case 52:
            _context.t33 = _context.sent.QueryClientImpl;
            _context.t34 = rpc;
            _context.t35 = new _context.t33(_context.t34);
            _context.t36 = {
              v1beta1: _context.t35
            };
            _context.next = 58;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/params/v1beta1/query.rpc.query"));
            });

          case 58:
            _context.t37 = _context.sent.QueryClientImpl;
            _context.t38 = rpc;
            _context.t39 = new _context.t37(_context.t38);
            _context.t40 = {
              v1beta1: _context.t39
            };
            _context.next = 64;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/slashing/v1beta1/query.rpc.query"));
            });

          case 64:
            _context.t41 = _context.sent.QueryClientImpl;
            _context.t42 = rpc;
            _context.t43 = new _context.t41(_context.t42);
            _context.t44 = {
              v1beta1: _context.t43
            };
            _context.next = 70;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/staking/v1beta1/query.rpc.query"));
            });

          case 70:
            _context.t45 = _context.sent.QueryClientImpl;
            _context.t46 = rpc;
            _context.t47 = new _context.t45(_context.t46);
            _context.t48 = {
              v1beta1: _context.t47
            };
            _context.next = 76;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/upgrade/v1beta1/query.rpc.query"));
            });

          case 76:
            _context.t49 = _context.sent.QueryClientImpl;
            _context.t50 = rpc;
            _context.t51 = new _context.t49(_context.t50);
            _context.t52 = {
              v1beta1: _context.t51
            };
            _context.t53 = {
              auth: _context.t8,
              authz: _context.t12,
              bank: _context.t16,
              distribution: _context.t20,
              evidence: _context.t24,
              feegrant: _context.t28,
              gov: _context.t32,
              mint: _context.t36,
              params: _context.t40,
              slashing: _context.t44,
              staking: _context.t48,
              upgrade: _context.t52
            };
            return _context.abrupt("return", {
              cosmwasm: _context.t4,
              cosmos: _context.t53
            });

          case 82:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createRPCQueryClient(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createRPCQueryClient = createRPCQueryClient;