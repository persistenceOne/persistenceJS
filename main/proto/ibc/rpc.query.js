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
              return _interopRequireWildcard(require("../cosmos/auth/v1beta1/query.rpc.query"));
            });

          case 3:
            _context.t0 = _context.sent.QueryClientImpl;
            _context.t1 = rpc;
            _context.t2 = new _context.t0(_context.t1);
            _context.t3 = {
              v1beta1: _context.t2
            };
            _context.next = 9;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/authz/v1beta1/query.rpc.query"));
            });

          case 9:
            _context.t4 = _context.sent.QueryClientImpl;
            _context.t5 = rpc;
            _context.t6 = new _context.t4(_context.t5);
            _context.t7 = {
              v1beta1: _context.t6
            };
            _context.next = 15;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/bank/v1beta1/query.rpc.query"));
            });

          case 15:
            _context.t8 = _context.sent.QueryClientImpl;
            _context.t9 = rpc;
            _context.t10 = new _context.t8(_context.t9);
            _context.t11 = {
              v1beta1: _context.t10
            };
            _context.next = 21;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/distribution/v1beta1/query.rpc.query"));
            });

          case 21:
            _context.t12 = _context.sent.QueryClientImpl;
            _context.t13 = rpc;
            _context.t14 = new _context.t12(_context.t13);
            _context.t15 = {
              v1beta1: _context.t14
            };
            _context.next = 27;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/evidence/v1beta1/query.rpc.query"));
            });

          case 27:
            _context.t16 = _context.sent.QueryClientImpl;
            _context.t17 = rpc;
            _context.t18 = new _context.t16(_context.t17);
            _context.t19 = {
              v1beta1: _context.t18
            };
            _context.next = 33;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/feegrant/v1beta1/query.rpc.query"));
            });

          case 33:
            _context.t20 = _context.sent.QueryClientImpl;
            _context.t21 = rpc;
            _context.t22 = new _context.t20(_context.t21);
            _context.t23 = {
              v1beta1: _context.t22
            };
            _context.next = 39;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/gov/v1beta1/query.rpc.query"));
            });

          case 39:
            _context.t24 = _context.sent.QueryClientImpl;
            _context.t25 = rpc;
            _context.t26 = new _context.t24(_context.t25);
            _context.t27 = {
              v1beta1: _context.t26
            };
            _context.next = 45;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/mint/v1beta1/query.rpc.query"));
            });

          case 45:
            _context.t28 = _context.sent.QueryClientImpl;
            _context.t29 = rpc;
            _context.t30 = new _context.t28(_context.t29);
            _context.t31 = {
              v1beta1: _context.t30
            };
            _context.next = 51;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/params/v1beta1/query.rpc.query"));
            });

          case 51:
            _context.t32 = _context.sent.QueryClientImpl;
            _context.t33 = rpc;
            _context.t34 = new _context.t32(_context.t33);
            _context.t35 = {
              v1beta1: _context.t34
            };
            _context.next = 57;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/slashing/v1beta1/query.rpc.query"));
            });

          case 57:
            _context.t36 = _context.sent.QueryClientImpl;
            _context.t37 = rpc;
            _context.t38 = new _context.t36(_context.t37);
            _context.t39 = {
              v1beta1: _context.t38
            };
            _context.next = 63;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/staking/v1beta1/query.rpc.query"));
            });

          case 63:
            _context.t40 = _context.sent.QueryClientImpl;
            _context.t41 = rpc;
            _context.t42 = new _context.t40(_context.t41);
            _context.t43 = {
              v1beta1: _context.t42
            };
            _context.next = 69;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("../cosmos/upgrade/v1beta1/query.rpc.query"));
            });

          case 69:
            _context.t44 = _context.sent.QueryClientImpl;
            _context.t45 = rpc;
            _context.t46 = new _context.t44(_context.t45);
            _context.t47 = {
              v1beta1: _context.t46
            };
            _context.t48 = {
              auth: _context.t3,
              authz: _context.t7,
              bank: _context.t11,
              distribution: _context.t15,
              evidence: _context.t19,
              feegrant: _context.t23,
              gov: _context.t27,
              mint: _context.t31,
              params: _context.t35,
              slashing: _context.t39,
              staking: _context.t43,
              upgrade: _context.t47
            };
            _context.next = 76;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("./applications/interchain_accounts/controller/v1/query.rpc.query"));
            });

          case 76:
            _context.t49 = _context.sent.QueryClientImpl;
            _context.t50 = rpc;
            _context.t51 = new _context.t49(_context.t50);
            _context.t52 = {
              v1: _context.t51
            };
            _context.next = 82;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("./applications/interchain_accounts/host/v1/query.rpc.query"));
            });

          case 82:
            _context.t53 = _context.sent.QueryClientImpl;
            _context.t54 = rpc;
            _context.t55 = new _context.t53(_context.t54);
            _context.t56 = {
              v1: _context.t55
            };
            _context.t57 = {
              controller: _context.t52,
              host: _context.t56
            };
            _context.next = 89;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("./applications/transfer/v1/query.rpc.query"));
            });

          case 89:
            _context.t58 = _context.sent.QueryClientImpl;
            _context.t59 = rpc;
            _context.t60 = new _context.t58(_context.t59);
            _context.t61 = {
              v1: _context.t60
            };
            _context.t62 = {
              interchain_accounts: _context.t57,
              transfer: _context.t61
            };
            _context.next = 96;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("./core/channel/v1/query.rpc.query"));
            });

          case 96:
            _context.t63 = _context.sent.QueryClientImpl;
            _context.t64 = rpc;
            _context.t65 = new _context.t63(_context.t64);
            _context.t66 = {
              v1: _context.t65
            };
            _context.next = 102;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("./core/client/v1/query.rpc.query"));
            });

          case 102:
            _context.t67 = _context.sent.QueryClientImpl;
            _context.t68 = rpc;
            _context.t69 = new _context.t67(_context.t68);
            _context.t70 = {
              v1: _context.t69
            };
            _context.next = 108;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require("./core/connection/v1/query.rpc.query"));
            });

          case 108:
            _context.t71 = _context.sent.QueryClientImpl;
            _context.t72 = rpc;
            _context.t73 = new _context.t71(_context.t72);
            _context.t74 = {
              v1: _context.t73
            };
            _context.t75 = {
              channel: _context.t66,
              client: _context.t70,
              connection: _context.t74
            };
            _context.t76 = {
              applications: _context.t62,
              core: _context.t75
            };
            return _context.abrupt("return", {
              cosmos: _context.t48,
              ibc: _context.t76
            });

          case 115:
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