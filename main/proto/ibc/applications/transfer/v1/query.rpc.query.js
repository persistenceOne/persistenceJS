"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryClientImpl = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));

var _query = require("./query");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, QueryClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.denomTrace = this.denomTrace.bind(this);
    this.denomTraces = this.denomTraces.bind(this);
    this.params = this.params.bind(this);
    this.denomHash = this.denomHash.bind(this);
  }

  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "denomTrace",
    value: function denomTrace(request) {
      var data = _query.QueryDenomTraceRequest.encode(request).finish();

      var promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTrace", data);
      return promise.then(function (data) {
        return _query.QueryDenomTraceResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "denomTraces",
    value: function denomTraces(request) {
      var data = _query.QueryDenomTracesRequest.encode(request).finish();

      var promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTraces", data);
      return promise.then(function (data) {
        return _query.QueryDenomTracesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "params",
    value: function params(request) {
      var data = _query.QueryParamsRequest.encode(request).finish();

      var promise = this.rpc.request("ibc.applications.transfer.v1.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "denomHash",
    value: function denomHash(request) {
      var data = _query.QueryDenomHashRequest.encode(request).finish();

      var promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomHash", data);
      return promise.then(function (data) {
        return _query.QueryDenomHashResponse.decode(new _m0.Reader(data));
      });
    }
  }]);
  return QueryClientImpl;
}();

exports.QueryClientImpl = QueryClientImpl;