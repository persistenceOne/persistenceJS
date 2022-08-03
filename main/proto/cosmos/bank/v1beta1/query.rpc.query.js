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
    this.balance = this.balance.bind(this);
    this.allBalances = this.allBalances.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.supplyOf = this.supplyOf.bind(this);
    this.params = this.params.bind(this);
    this.denomMetadata = this.denomMetadata.bind(this);
    this.denomsMetadata = this.denomsMetadata.bind(this);
  }

  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "balance",
    value: function balance(request) {
      var data = _query.QueryBalanceRequest.encode(request).finish();

      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
      return promise.then(function (data) {
        return _query.QueryBalanceResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "allBalances",
    value: function allBalances(request) {
      var data = _query.QueryAllBalancesRequest.encode(request).finish();

      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
      return promise.then(function (data) {
        return _query.QueryAllBalancesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "totalSupply",
    value: function totalSupply(request) {
      var data = _query.QueryTotalSupplyRequest.encode(request).finish();

      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
      return promise.then(function (data) {
        return _query.QueryTotalSupplyResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "supplyOf",
    value: function supplyOf(request) {
      var data = _query.QuerySupplyOfRequest.encode(request).finish();

      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
      return promise.then(function (data) {
        return _query.QuerySupplyOfResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "params",
    value: function params(request) {
      var data = _query.QueryParamsRequest.encode(request).finish();

      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "denomMetadata",
    value: function denomMetadata(request) {
      var data = _query.QueryDenomMetadataRequest.encode(request).finish();

      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
      return promise.then(function (data) {
        return _query.QueryDenomMetadataResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "denomsMetadata",
    value: function denomsMetadata(request) {
      var data = _query.QueryDenomsMetadataRequest.encode(request).finish();

      var promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
      return promise.then(function (data) {
        return _query.QueryDenomsMetadataResponse.decode(new _m0.Reader(data));
      });
    }
  }]);
  return QueryClientImpl;
}();

exports.QueryClientImpl = QueryClientImpl;