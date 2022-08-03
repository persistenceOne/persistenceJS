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
    this.clientState = this.clientState.bind(this);
    this.clientStates = this.clientStates.bind(this);
    this.consensusState = this.consensusState.bind(this);
    this.consensusStates = this.consensusStates.bind(this);
    this.clientStatus = this.clientStatus.bind(this);
    this.clientParams = this.clientParams.bind(this);
    this.upgradedClientState = this.upgradedClientState.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
  }

  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "clientState",
    value: function clientState(request) {
      var data = _query.QueryClientStateRequest.encode(request).finish();

      var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientState", data);
      return promise.then(function (data) {
        return _query.QueryClientStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "clientStates",
    value: function clientStates(request) {
      var data = _query.QueryClientStatesRequest.encode(request).finish();

      var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStates", data);
      return promise.then(function (data) {
        return _query.QueryClientStatesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "consensusState",
    value: function consensusState(request) {
      var data = _query.QueryConsensusStateRequest.encode(request).finish();

      var promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", data);
      return promise.then(function (data) {
        return _query.QueryConsensusStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "consensusStates",
    value: function consensusStates(request) {
      var data = _query.QueryConsensusStatesRequest.encode(request).finish();

      var promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", data);
      return promise.then(function (data) {
        return _query.QueryConsensusStatesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "clientStatus",
    value: function clientStatus(request) {
      var data = _query.QueryClientStatusRequest.encode(request).finish();

      var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStatus", data);
      return promise.then(function (data) {
        return _query.QueryClientStatusResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "clientParams",
    value: function clientParams(request) {
      var data = _query.QueryClientParamsRequest.encode(request).finish();

      var promise = this.rpc.request("ibc.core.client.v1.Query", "ClientParams", data);
      return promise.then(function (data) {
        return _query.QueryClientParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "upgradedClientState",
    value: function upgradedClientState(request) {
      var data = _query.QueryUpgradedClientStateRequest.encode(request).finish();

      var promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedClientState", data);
      return promise.then(function (data) {
        return _query.QueryUpgradedClientStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "upgradedConsensusState",
    value: function upgradedConsensusState(request) {
      var data = _query.QueryUpgradedConsensusStateRequest.encode(request).finish();

      var promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedConsensusState", data);
      return promise.then(function (data) {
        return _query.QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data));
      });
    }
  }]);
  return QueryClientImpl;
}();

exports.QueryClientImpl = QueryClientImpl;