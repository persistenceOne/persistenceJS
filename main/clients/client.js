"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PersistenceClient = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _protoSigning = require("@cosmjs/proto-signing");

var _stargate = require("@cosmjs/stargate");

var _cosmwasmStargate = require("@cosmjs/cosmwasm-stargate");

var _tendermintRpc = require("@cosmjs/tendermint-rpc");

var _config = require("../config/config");

var _rpc = require("../proto/cosmwasm/rpc.query");

var PersistenceClient = /*#__PURE__*/function () {
  function PersistenceClient(mnemonic, wallet, wasm, core, queryclient, config) {
    (0, _classCallCheck2["default"])(this, PersistenceClient);
    (0, _defineProperty2["default"])(this, "wallet", void 0);
    (0, _defineProperty2["default"])(this, "mnemonic", void 0);
    (0, _defineProperty2["default"])(this, "config", void 0);
    (0, _defineProperty2["default"])(this, "core", void 0);
    (0, _defineProperty2["default"])(this, "wasm", void 0);
    (0, _defineProperty2["default"])(this, "query", void 0);
    this.mnemonic = mnemonic;
    this.config = config;
    this.wallet = wallet;
    this.core = core;
    this.wasm = wasm;
    this.query = queryclient;
  }

  (0, _createClass2["default"])(PersistenceClient, null, [{
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(mnemonic, chainConfig) {
        var config, wallet, core, wasm, tendermintClient, queryClient, rpc, query;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //wallet
                config = chainConfig || _config.LocalConfig;
                _context.next = 3;
                return _protoSigning.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, _config.DefaultWalletOptoions);

              case 3:
                wallet = _context.sent;
                _context.next = 6;
                return _stargate.SigningStargateClient.connectWithSigner(config.rpc, wallet);

              case 6:
                core = _context.sent;
                _context.next = 9;
                return _cosmwasmStargate.SigningCosmWasmClient.connectWithSigner(config.rpc, wallet);

              case 9:
                wasm = _context.sent;
                _context.next = 12;
                return _tendermintRpc.Tendermint34Client.connect(config.rpc);

              case 12:
                tendermintClient = _context.sent;
                queryClient = new _stargate.QueryClient(tendermintClient);
                _context.next = 16;
                return (0, _stargate.createProtobufRpcClient)(queryClient);

              case 16:
                rpc = _context.sent;
                _context.next = 19;
                return (0, _rpc.createRPCQueryClient)({
                  rpc: rpc
                });

              case 19:
                query = _context.sent;
                return _context.abrupt("return", new PersistenceClient(mnemonic, wallet, wasm, core, query));

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function init(_x, _x2) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }]);
  return PersistenceClient;
}();

exports.PersistenceClient = PersistenceClient;