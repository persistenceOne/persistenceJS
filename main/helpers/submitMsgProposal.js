"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contractProposal = contractProposal;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _stargate = require("@cosmjs/stargate");

var _any = require("cosmjs-types/google/protobuf/any");

function contractProposal(_x, _x2) {
  return _contractProposal.apply(this, arguments);
}

function _contractProposal() {
  _contractProposal = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(client, proposal) {
    var _yield$client$wallet$, _yield$client$wallet$2, account, proposalMsg, res, json;

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
            //submit proposal
            proposalMsg = {
              typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
              value: {
                content: _any.Any.fromPartial(proposal),
                initialDeposit: (0, _stargate.coins)(600000000, "stake"),
                proposer: account.address
              }
            };
            _context.next = 8;
            return client.core.signAndBroadcast(account.address, [proposalMsg], {
              amount: (0, _stargate.coins)(20000000, "stake"),
              gas: "20000000"
            }, "Proposal Submitted!");

          case 8:
            res = _context.sent;

            if (!(res.code === 0)) {
              _context.next = 14;
              break;
            }

            json = JSON.parse(res.rawLog);
            return _context.abrupt("return", json);

          case 14:
            return _context.abrupt("return", res.rawLog);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _contractProposal.apply(this, arguments);
}