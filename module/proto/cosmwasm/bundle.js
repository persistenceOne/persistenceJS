import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import * as _140 from "./wasm/v1/genesis";
import * as _141 from "./wasm/v1/ibc";
import * as _142 from "./wasm/v1/proposal";
import * as _143 from "./wasm/v1/query";
import * as _144 from "./wasm/v1/tx";
import * as _145 from "./wasm/v1/types";
import * as _280 from "./wasm/v1/query.rpc.query";
import * as _281 from "./wasm/v1/tx.rpc.msg";
import * as _316 from "./rpc.query";
import * as _317 from "./rpc.tx";
export let cosmwasm;

(function (_cosmwasm) {
  let wasm;

  (function (_wasm) {
    const v1 = _wasm.v1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _140), _141), _142), _143), _144), _145), _280), _281);
  })(wasm || (wasm = _cosmwasm.wasm || (_cosmwasm.wasm = {})));

  const ClientFactory = _cosmwasm.ClientFactory = _objectSpread(_objectSpread({}, _316), _317);
})(cosmwasm || (cosmwasm = {}));