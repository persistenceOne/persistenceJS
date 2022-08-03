"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.voteYes = voteYes;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _stargate = require("@cosmjs/stargate");

var _gov = require("../proto/cosmos/gov/v1beta1/gov");

var Long = _interopRequireWildcard(require("long"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function voteYes(_x, _x2) {
  return _voteYes.apply(this, arguments);
}

function _voteYes() {
  _voteYes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(client, proposalid) {
    var _yield$client$wallet$, _yield$client$wallet$2, account, sendMsg, res;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return client.wallet.getAccounts();

          case 2:
            _yield$client$wallet$ = _context.sent;
            _yield$client$wallet$2 = (0, _slicedToArray2["default"])(_yield$client$wallet$, 1);
            account = _yield$client$wallet$2[0];
            sendMsg = {
              typeUrl: "/cosmos.gov.v1beta1.MsgVote",
              value: {
                proposalId: Long.fromNumber(proposalid),
                voter: account.address,
                option: (0, _gov.voteOptionFromJSON)(1)
              }
            };
            _context.next = 8;
            return client.core.signAndBroadcast(account.address, [sendMsg], {
              amount: (0, _stargate.coins)(10000000, "stake"),
              gas: "2000000"
            }, "Vote Yes!");

          case 8:
            res = _context.sent;

            if (!(res.code === 0)) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", res);

          case 13:
            return _context.abrupt("return", res.rawLog);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _voteYes.apply(this, arguments);
}