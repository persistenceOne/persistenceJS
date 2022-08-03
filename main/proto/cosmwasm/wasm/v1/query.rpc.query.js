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
    this.contractInfo = this.contractInfo.bind(this);
    this.contractHistory = this.contractHistory.bind(this);
    this.contractsByCode = this.contractsByCode.bind(this);
    this.allContractState = this.allContractState.bind(this);
    this.rawContractState = this.rawContractState.bind(this);
    this.smartContractState = this.smartContractState.bind(this);
    this.code = this.code.bind(this);
    this.codes = this.codes.bind(this);
    this.pinnedCodes = this.pinnedCodes.bind(this);
  }

  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "contractInfo",
    value: function contractInfo(request) {
      var data = _query.QueryContractInfoRequest.encode(request).finish();

      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractInfo", data);
      return promise.then(function (data) {
        return _query.QueryContractInfoResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "contractHistory",
    value: function contractHistory(request) {
      var data = _query.QueryContractHistoryRequest.encode(request).finish();

      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractHistory", data);
      return promise.then(function (data) {
        return _query.QueryContractHistoryResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "contractsByCode",
    value: function contractsByCode(request) {
      var data = _query.QueryContractsByCodeRequest.encode(request).finish();

      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCode", data);
      return promise.then(function (data) {
        return _query.QueryContractsByCodeResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "allContractState",
    value: function allContractState(request) {
      var data = _query.QueryAllContractStateRequest.encode(request).finish();

      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "AllContractState", data);
      return promise.then(function (data) {
        return _query.QueryAllContractStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "rawContractState",
    value: function rawContractState(request) {
      var data = _query.QueryRawContractStateRequest.encode(request).finish();

      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "RawContractState", data);
      return promise.then(function (data) {
        return _query.QueryRawContractStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "smartContractState",
    value: function smartContractState(request) {
      var data = _query.QuerySmartContractStateRequest.encode(request).finish();

      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "SmartContractState", data);
      return promise.then(function (data) {
        return _query.QuerySmartContractStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "code",
    value: function code(request) {
      var data = _query.QueryCodeRequest.encode(request).finish();

      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Code", data);
      return promise.then(function (data) {
        return _query.QueryCodeResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "codes",
    value: function codes(request) {
      var data = _query.QueryCodesRequest.encode(request).finish();

      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Codes", data);
      return promise.then(function (data) {
        return _query.QueryCodesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "pinnedCodes",
    value: function pinnedCodes(request) {
      var data = _query.QueryPinnedCodesRequest.encode(request).finish();

      var promise = this.rpc.request("cosmwasm.wasm.v1.Query", "PinnedCodes", data);
      return promise.then(function (data) {
        return _query.QueryPinnedCodesResponse.decode(new _m0.Reader(data));
      });
    }
  }]);
  return QueryClientImpl;
}();

exports.QueryClientImpl = QueryClientImpl;