import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import * as _148 from "./auth/v1beta1/auth";
import * as _149 from "./auth/v1beta1/genesis";
import * as _150 from "./auth/v1beta1/query";
import * as _151 from "./authz/v1beta1/authz";
import * as _152 from "./authz/v1beta1/event";
import * as _153 from "./authz/v1beta1/genesis";
import * as _154 from "./authz/v1beta1/query";
import * as _155 from "./authz/v1beta1/tx";
import * as _156 from "./bank/v1beta1/authz";
import * as _157 from "./bank/v1beta1/bank";
import * as _158 from "./bank/v1beta1/genesis";
import * as _159 from "./bank/v1beta1/query";
import * as _160 from "./bank/v1beta1/tx";
import * as _161 from "./base/abci/v1beta1/abci";
import * as _162 from "./base/kv/v1beta1/kv";
import * as _163 from "./base/query/v1beta1/pagination";
import * as _164 from "./base/reflection/v1beta1/reflection";
import * as _165 from "./base/reflection/v2alpha1/reflection";
import * as _166 from "./base/snapshots/v1beta1/snapshot";
import * as _167 from "./base/store/v1beta1/commit_info";
import * as _168 from "./base/store/v1beta1/listening";
import * as _169 from "./base/store/v1beta1/snapshot";
import * as _170 from "./base/tendermint/v1beta1/query";
import * as _171 from "./base/v1beta1/coin";
import * as _172 from "./capability/v1beta1/capability";
import * as _173 from "./capability/v1beta1/genesis";
import * as _174 from "./crisis/v1beta1/genesis";
import * as _175 from "./crisis/v1beta1/tx";
import * as _176 from "./crypto/ed25519/keys";
import * as _177 from "./crypto/multisig/keys";
import * as _178 from "./crypto/secp256k1/keys";
import * as _179 from "./crypto/secp256r1/keys";
import * as _180 from "./distribution/v1beta1/distribution";
import * as _181 from "./distribution/v1beta1/genesis";
import * as _182 from "./distribution/v1beta1/query";
import * as _183 from "./distribution/v1beta1/tx";
import * as _184 from "./evidence/v1beta1/evidence";
import * as _185 from "./evidence/v1beta1/genesis";
import * as _186 from "./evidence/v1beta1/query";
import * as _187 from "./evidence/v1beta1/tx";
import * as _188 from "./feegrant/v1beta1/feegrant";
import * as _189 from "./feegrant/v1beta1/genesis";
import * as _190 from "./feegrant/v1beta1/query";
import * as _191 from "./feegrant/v1beta1/tx";
import * as _192 from "./genutil/v1beta1/genesis";
import * as _193 from "./gov/v1beta1/genesis";
import * as _194 from "./gov/v1beta1/gov";
import * as _195 from "./gov/v1beta1/query";
import * as _196 from "./gov/v1beta1/tx";
import * as _197 from "./mint/v1beta1/genesis";
import * as _198 from "./mint/v1beta1/mint";
import * as _199 from "./mint/v1beta1/query";
import * as _200 from "./params/v1beta1/params";
import * as _201 from "./params/v1beta1/query";
import * as _202 from "./slashing/v1beta1/genesis";
import * as _203 from "./slashing/v1beta1/query";
import * as _204 from "./slashing/v1beta1/slashing";
import * as _205 from "./slashing/v1beta1/tx";
import * as _206 from "./staking/v1beta1/authz";
import * as _207 from "./staking/v1beta1/genesis";
import * as _208 from "./staking/v1beta1/query";
import * as _209 from "./staking/v1beta1/staking";
import * as _210 from "./staking/v1beta1/tx";
import * as _211 from "./tx/signing/v1beta1/signing";
import * as _212 from "./tx/v1beta1/service";
import * as _213 from "./tx/v1beta1/tx";
import * as _214 from "./upgrade/v1beta1/query";
import * as _215 from "./upgrade/v1beta1/upgrade";
import * as _216 from "./vesting/v1beta1/tx";
import * as _217 from "./vesting/v1beta1/vesting";
import * as _282 from "./auth/v1beta1/query.rpc.query";
import * as _283 from "./authz/v1beta1/query.rpc.query";
import * as _284 from "./bank/v1beta1/query.rpc.query";
import * as _285 from "./base/tendermint/v1beta1/query.rpc.svc";
import * as _286 from "./distribution/v1beta1/query.rpc.query";
import * as _287 from "./evidence/v1beta1/query.rpc.query";
import * as _288 from "./feegrant/v1beta1/query.rpc.query";
import * as _289 from "./gov/v1beta1/query.rpc.query";
import * as _290 from "./mint/v1beta1/query.rpc.query";
import * as _291 from "./params/v1beta1/query.rpc.query";
import * as _292 from "./slashing/v1beta1/query.rpc.query";
import * as _293 from "./staking/v1beta1/query.rpc.query";
import * as _294 from "./tx/v1beta1/service.rpc.svc";
import * as _295 from "./upgrade/v1beta1/query.rpc.query";
import * as _296 from "./authz/v1beta1/tx.rpc.msg";
import * as _297 from "./bank/v1beta1/tx.rpc.msg";
import * as _298 from "./crisis/v1beta1/tx.rpc.msg";
import * as _299 from "./distribution/v1beta1/tx.rpc.msg";
import * as _300 from "./evidence/v1beta1/tx.rpc.msg";
import * as _301 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _302 from "./gov/v1beta1/tx.rpc.msg";
import * as _303 from "./slashing/v1beta1/tx.rpc.msg";
import * as _304 from "./staking/v1beta1/tx.rpc.msg";
import * as _305 from "./vesting/v1beta1/tx.rpc.msg";
import * as _318 from "./rpc.query";
import * as _319 from "./rpc.tx";
export let cosmos;

(function (_cosmos) {
  let auth;

  (function (_auth) {
    const v1beta1 = _auth.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _148), _149), _150), _282);
  })(auth || (auth = _cosmos.auth || (_cosmos.auth = {})));

  let authz;

  (function (_authz) {
    const v1beta1 = _authz.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _151), _152), _153), _154), _155), _283), _296);
  })(authz || (authz = _cosmos.authz || (_cosmos.authz = {})));

  let bank;

  (function (_bank) {
    const v1beta1 = _bank.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _156), _157), _158), _159), _160), _284), _297);
  })(bank || (bank = _cosmos.bank || (_cosmos.bank = {})));

  let base;

  (function (_base) {
    let abci;

    (function (_abci) {
      const v1beta1 = _abci.v1beta1 = _objectSpread({}, _161);
    })(abci || (abci = _base.abci || (_base.abci = {})));

    let kv;

    (function (_kv) {
      const v1beta1 = _kv.v1beta1 = _objectSpread({}, _162);
    })(kv || (kv = _base.kv || (_base.kv = {})));

    let query;

    (function (_query) {
      const v1beta1 = _query.v1beta1 = _objectSpread({}, _163);
    })(query || (query = _base.query || (_base.query = {})));

    let reflection;

    (function (_reflection) {
      const v1beta1 = _reflection.v1beta1 = _objectSpread({}, _164);

      const v2alpha1 = _reflection.v2alpha1 = _objectSpread({}, _165);
    })(reflection || (reflection = _base.reflection || (_base.reflection = {})));

    let snapshots;

    (function (_snapshots) {
      const v1beta1 = _snapshots.v1beta1 = _objectSpread({}, _166);
    })(snapshots || (snapshots = _base.snapshots || (_base.snapshots = {})));

    let store;

    (function (_store) {
      const v1beta1 = _store.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _167), _168), _169);
    })(store || (store = _base.store || (_base.store = {})));

    let tendermint;

    (function (_tendermint) {
      const v1beta1 = _tendermint.v1beta1 = _objectSpread(_objectSpread({}, _170), _285);
    })(tendermint || (tendermint = _base.tendermint || (_base.tendermint = {})));

    const v1beta1 = _base.v1beta1 = _objectSpread({}, _171);
  })(base || (base = _cosmos.base || (_cosmos.base = {})));

  let capability;

  (function (_capability) {
    const v1beta1 = _capability.v1beta1 = _objectSpread(_objectSpread({}, _172), _173);
  })(capability || (capability = _cosmos.capability || (_cosmos.capability = {})));

  let crisis;

  (function (_crisis) {
    const v1beta1 = _crisis.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _174), _175), _298);
  })(crisis || (crisis = _cosmos.crisis || (_cosmos.crisis = {})));

  let crypto;

  (function (_crypto) {
    const ed25519 = _crypto.ed25519 = _objectSpread({}, _176);

    const multisig = _crypto.multisig = _objectSpread({}, _177);

    const secp256k1 = _crypto.secp256k1 = _objectSpread({}, _178);

    const secp256r1 = _crypto.secp256r1 = _objectSpread({}, _179);
  })(crypto || (crypto = _cosmos.crypto || (_cosmos.crypto = {})));

  let distribution;

  (function (_distribution) {
    const v1beta1 = _distribution.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _180), _181), _182), _183), _286), _299);
  })(distribution || (distribution = _cosmos.distribution || (_cosmos.distribution = {})));

  let evidence;

  (function (_evidence) {
    const v1beta1 = _evidence.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _184), _185), _186), _187), _287), _300);
  })(evidence || (evidence = _cosmos.evidence || (_cosmos.evidence = {})));

  let feegrant;

  (function (_feegrant) {
    const v1beta1 = _feegrant.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _188), _189), _190), _191), _288), _301);
  })(feegrant || (feegrant = _cosmos.feegrant || (_cosmos.feegrant = {})));

  let genutil;

  (function (_genutil) {
    const v1beta1 = _genutil.v1beta1 = _objectSpread({}, _192);
  })(genutil || (genutil = _cosmos.genutil || (_cosmos.genutil = {})));

  let gov;

  (function (_gov) {
    const v1beta1 = _gov.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _193), _194), _195), _196), _289), _302);
  })(gov || (gov = _cosmos.gov || (_cosmos.gov = {})));

  let mint;

  (function (_mint) {
    const v1beta1 = _mint.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _197), _198), _199), _290);
  })(mint || (mint = _cosmos.mint || (_cosmos.mint = {})));

  let params;

  (function (_params) {
    const v1beta1 = _params.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _200), _201), _291);
  })(params || (params = _cosmos.params || (_cosmos.params = {})));

  let slashing;

  (function (_slashing) {
    const v1beta1 = _slashing.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _202), _203), _204), _205), _292), _303);
  })(slashing || (slashing = _cosmos.slashing || (_cosmos.slashing = {})));

  let staking;

  (function (_staking) {
    const v1beta1 = _staking.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _206), _207), _208), _209), _210), _293), _304);
  })(staking || (staking = _cosmos.staking || (_cosmos.staking = {})));

  let tx;

  (function (_tx) {
    let signing;

    (function (_signing) {
      const v1beta1 = _signing.v1beta1 = _objectSpread({}, _211);
    })(signing || (signing = _tx.signing || (_tx.signing = {})));

    const v1beta1 = _tx.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _212), _213), _294);
  })(tx || (tx = _cosmos.tx || (_cosmos.tx = {})));

  let upgrade;

  (function (_upgrade) {
    const v1beta1 = _upgrade.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _214), _215), _295);
  })(upgrade || (upgrade = _cosmos.upgrade || (_cosmos.upgrade = {})));

  let vesting;

  (function (_vesting) {
    const v1beta1 = _vesting.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _216), _217), _305);
  })(vesting || (vesting = _cosmos.vesting || (_cosmos.vesting = {})));

  const ClientFactory = _cosmos.ClientFactory = _objectSpread(_objectSpread({}, _318), _319);
})(cosmos || (cosmos = {}));