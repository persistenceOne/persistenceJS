import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import * as _219 from "./api/annotations";
import * as _220 from "./api/http";
import * as _221 from "./api/httpbody";
import * as _222 from "./protobuf/any";
import * as _223 from "./protobuf/duration";
import * as _224 from "./protobuf/timestamp";
export let google;

(function (_google) {
  const api = _google.api = _objectSpread(_objectSpread(_objectSpread({}, _219), _220), _221);

  const protobuf = _google.protobuf = _objectSpread(_objectSpread(_objectSpread({}, _222), _223), _224);
})(google || (google = {}));