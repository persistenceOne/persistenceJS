import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import * as _115 from "./halving/v1beta1/genesis";
import * as _116 from "./halving/v1beta1/halving";
import * as _117 from "./halving/v1beta1/query";
import * as _138 from "./halving/v1beta1/query.rpc.query";
import * as _139 from "./rpc.query";
export let persistence;

(function (_persistence) {
  let halving;

  (function (_halving) {
    const v1beta1 = _halving.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _115), _116), _117), _138);
  })(halving || (halving = _persistence.halving || (_persistence.halving = {})));

  const ClientFactory = _persistence.ClientFactory = _objectSpread({}, _139);
})(persistence || (persistence = {}));