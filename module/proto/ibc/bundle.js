import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import * as _225 from "./applications/interchain_accounts/controller/v1/controller";
import * as _226 from "./applications/interchain_accounts/controller/v1/query";
import * as _227 from "./applications/interchain_accounts/host/v1/host";
import * as _228 from "./applications/interchain_accounts/host/v1/query";
import * as _229 from "./applications/interchain_accounts/v1/account";
import * as _230 from "./applications/interchain_accounts/v1/genesis";
import * as _231 from "./applications/interchain_accounts/v1/metadata";
import * as _232 from "./applications/interchain_accounts/v1/packet";
import * as _233 from "./applications/transfer/v1/genesis";
import * as _234 from "./applications/transfer/v1/query";
import * as _235 from "./applications/transfer/v1/transfer";
import * as _236 from "./applications/transfer/v1/tx";
import * as _237 from "./applications/transfer/v2/packet";
import * as _238 from "./core/channel/v1/channel";
import * as _239 from "./core/channel/v1/genesis";
import * as _240 from "./core/channel/v1/query";
import * as _241 from "./core/channel/v1/tx";
import * as _242 from "./core/client/v1/client";
import * as _243 from "./core/client/v1/genesis";
import * as _244 from "./core/client/v1/query";
import * as _245 from "./core/client/v1/tx";
import * as _246 from "./core/commitment/v1/commitment";
import * as _247 from "./core/connection/v1/connection";
import * as _248 from "./core/connection/v1/genesis";
import * as _249 from "./core/connection/v1/query";
import * as _250 from "./core/connection/v1/tx";
import * as _251 from "./core/types/v1/genesis";
import * as _252 from "./lightclients/localhost/v1/localhost";
import * as _253 from "./lightclients/solomachine/v1/solomachine";
import * as _254 from "./lightclients/solomachine/v2/solomachine";
import * as _255 from "./lightclients/tendermint/v1/tendermint";
import * as _306 from "./applications/interchain_accounts/controller/v1/query.rpc.query";
import * as _307 from "./applications/interchain_accounts/host/v1/query.rpc.query";
import * as _308 from "./applications/transfer/v1/query.rpc.query";
import * as _309 from "./core/channel/v1/query.rpc.query";
import * as _310 from "./core/client/v1/query.rpc.query";
import * as _311 from "./core/connection/v1/query.rpc.query";
import * as _312 from "./applications/transfer/v1/tx.rpc.msg";
import * as _313 from "./core/channel/v1/tx.rpc.msg";
import * as _314 from "./core/client/v1/tx.rpc.msg";
import * as _315 from "./core/connection/v1/tx.rpc.msg";
import * as _320 from "./rpc.query";
import * as _321 from "./rpc.tx";
export let ibc;

(function (_ibc) {
  let applications;

  (function (_applications) {
    let interchain_accounts;

    (function (_interchain_accounts) {
      let controller;

      (function (_controller) {
        const v1 = _controller.v1 = _objectSpread(_objectSpread(_objectSpread({}, _225), _226), _306);
      })(controller || (controller = _interchain_accounts.controller || (_interchain_accounts.controller = {})));

      let host;

      (function (_host) {
        const v1 = _host.v1 = _objectSpread(_objectSpread(_objectSpread({}, _227), _228), _307);
      })(host || (host = _interchain_accounts.host || (_interchain_accounts.host = {})));

      const v1 = _interchain_accounts.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _229), _230), _231), _232);
    })(interchain_accounts || (interchain_accounts = _applications.interchain_accounts || (_applications.interchain_accounts = {})));

    let transfer;

    (function (_transfer) {
      const v1 = _transfer.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _233), _234), _235), _236), _308), _312);

      const v2 = _transfer.v2 = _objectSpread({}, _237);
    })(transfer || (transfer = _applications.transfer || (_applications.transfer = {})));
  })(applications || (applications = _ibc.applications || (_ibc.applications = {})));

  let core;

  (function (_core) {
    let channel;

    (function (_channel) {
      const v1 = _channel.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _238), _239), _240), _241), _309), _313);
    })(channel || (channel = _core.channel || (_core.channel = {})));

    let client;

    (function (_client) {
      const v1 = _client.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _242), _243), _244), _245), _310), _314);
    })(client || (client = _core.client || (_core.client = {})));

    let commitment;

    (function (_commitment) {
      const v1 = _commitment.v1 = _objectSpread({}, _246);
    })(commitment || (commitment = _core.commitment || (_core.commitment = {})));

    let connection;

    (function (_connection) {
      const v1 = _connection.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _247), _248), _249), _250), _311), _315);
    })(connection || (connection = _core.connection || (_core.connection = {})));

    let types;

    (function (_types) {
      const v1 = _types.v1 = _objectSpread({}, _251);
    })(types || (types = _core.types || (_core.types = {})));
  })(core || (core = _ibc.core || (_ibc.core = {})));

  let lightclients;

  (function (_lightclients) {
    let localhost;

    (function (_localhost) {
      const v1 = _localhost.v1 = _objectSpread({}, _252);
    })(localhost || (localhost = _lightclients.localhost || (_lightclients.localhost = {})));

    let solomachine;

    (function (_solomachine) {
      const v1 = _solomachine.v1 = _objectSpread({}, _253);

      const v2 = _solomachine.v2 = _objectSpread({}, _254);
    })(solomachine || (solomachine = _lightclients.solomachine || (_lightclients.solomachine = {})));

    let tendermint;

    (function (_tendermint) {
      const v1 = _tendermint.v1 = _objectSpread({}, _255);
    })(tendermint || (tendermint = _lightclients.tendermint || (_lightclients.tendermint = {})));
  })(lightclients || (lightclients = _ibc.lightclients || (_ibc.lightclients = {})));

  const ClientFactory = _ibc.ClientFactory = _objectSpread(_objectSpread({}, _320), _321);
})(ibc || (ibc = {}));