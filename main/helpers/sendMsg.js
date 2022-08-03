"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Send = Send;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _proto = require("../proto/");

function Send(_x, _x2, _x3, _x4) {
  return _Send.apply(this, arguments);
}

function _Send() {
  _Send = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(client, from, to, amount) {
    var wallet, _yield$wallet$getAcco, _yield$wallet$getAcco2, account, sendMsg, res;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            wallet = client.wallet;
            _context.next = 3;
            return wallet.getAccounts();

          case 3:
            _yield$wallet$getAcco = _context.sent;
            _yield$wallet$getAcco2 = (0, _slicedToArray2["default"])(_yield$wallet$getAcco, 1);
            account = _yield$wallet$getAcco2[0];
            sendMsg = {
              typeUrl: "/cosmos.bank.v1beta1.tx.MsgSend",
              value: _proto.cosmos.bank.v1beta1.MsgSend.fromJSON({
                fromAddress: from,
                toAddress: to,
                amount: amount
              })
            };
            _context.next = 9;
            return client.core.signAndBroadcast(account.address, [sendMsg], {
              amount: [{
                denom: "uxprt",
                amount: "10000"
              }],
              gas: "100"
            }, "test send");

          case 9:
            res = _context.sent;
            console.log(res);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _Send.apply(this, arguments);
}