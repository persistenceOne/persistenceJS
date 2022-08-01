import * as _184 from "./auth/v1beta1/auth";
import * as _185 from "./auth/v1beta1/genesis";
import * as _186 from "./auth/v1beta1/query";
import * as _187 from "./authz/v1beta1/authz";
import * as _188 from "./authz/v1beta1/event";
import * as _189 from "./authz/v1beta1/genesis";
import * as _190 from "./authz/v1beta1/query";
import * as _191 from "./authz/v1beta1/tx";
import * as _192 from "./bank/v1beta1/authz";
import * as _193 from "./bank/v1beta1/bank";
import * as _194 from "./bank/v1beta1/genesis";
import * as _195 from "./bank/v1beta1/query";
import * as _196 from "./bank/v1beta1/tx";
import * as _197 from "./base/abci/v1beta1/abci";
import * as _198 from "./base/kv/v1beta1/kv";
import * as _199 from "./base/query/v1beta1/pagination";
import * as _200 from "./base/reflection/v1beta1/reflection";
import * as _201 from "./base/reflection/v2alpha1/reflection";
import * as _202 from "./base/snapshots/v1beta1/snapshot";
import * as _203 from "./base/store/v1beta1/commit_info";
import * as _204 from "./base/store/v1beta1/listening";
import * as _205 from "./base/store/v1beta1/snapshot";
import * as _206 from "./base/tendermint/v1beta1/query";
import * as _207 from "./base/v1beta1/coin";
import * as _208 from "./capability/v1beta1/capability";
import * as _209 from "./capability/v1beta1/genesis";
import * as _210 from "./crisis/v1beta1/genesis";
import * as _211 from "./crisis/v1beta1/tx";
import * as _212 from "./crypto/ed25519/keys";
import * as _213 from "./crypto/multisig/keys";
import * as _214 from "./crypto/secp256k1/keys";
import * as _215 from "./crypto/secp256r1/keys";
import * as _216 from "./distribution/v1beta1/distribution";
import * as _217 from "./distribution/v1beta1/genesis";
import * as _218 from "./distribution/v1beta1/query";
import * as _219 from "./distribution/v1beta1/tx";
import * as _220 from "./evidence/v1beta1/evidence";
import * as _221 from "./evidence/v1beta1/genesis";
import * as _222 from "./evidence/v1beta1/query";
import * as _223 from "./evidence/v1beta1/tx";
import * as _224 from "./feegrant/v1beta1/feegrant";
import * as _225 from "./feegrant/v1beta1/genesis";
import * as _226 from "./feegrant/v1beta1/query";
import * as _227 from "./feegrant/v1beta1/tx";
import * as _228 from "./genutil/v1beta1/genesis";
import * as _229 from "./gov/v1beta1/genesis";
import * as _230 from "./gov/v1beta1/gov";
import * as _231 from "./gov/v1beta1/query";
import * as _232 from "./gov/v1beta1/tx";
import * as _233 from "./mint/v1beta1/genesis";
import * as _234 from "./mint/v1beta1/mint";
import * as _235 from "./mint/v1beta1/query";
import * as _236 from "./params/v1beta1/params";
import * as _237 from "./params/v1beta1/query";
import * as _238 from "./slashing/v1beta1/genesis";
import * as _239 from "./slashing/v1beta1/query";
import * as _240 from "./slashing/v1beta1/slashing";
import * as _241 from "./slashing/v1beta1/tx";
import * as _242 from "./staking/v1beta1/authz";
import * as _243 from "./staking/v1beta1/genesis";
import * as _244 from "./staking/v1beta1/query";
import * as _245 from "./staking/v1beta1/staking";
import * as _246 from "./staking/v1beta1/tx";
import * as _247 from "./tx/signing/v1beta1/signing";
import * as _248 from "./tx/v1beta1/service";
import * as _249 from "./tx/v1beta1/tx";
import * as _250 from "./upgrade/v1beta1/query";
import * as _251 from "./upgrade/v1beta1/upgrade";
import * as _252 from "./vesting/v1beta1/tx";
import * as _253 from "./vesting/v1beta1/vesting";
import * as _321 from "./authz/v1beta1/tx.amino";
import * as _322 from "./bank/v1beta1/tx.amino";
import * as _323 from "./crisis/v1beta1/tx.amino";
import * as _324 from "./distribution/v1beta1/tx.amino";
import * as _325 from "./evidence/v1beta1/tx.amino";
import * as _326 from "./feegrant/v1beta1/tx.amino";
import * as _327 from "./gov/v1beta1/tx.amino";
import * as _328 from "./slashing/v1beta1/tx.amino";
import * as _329 from "./staking/v1beta1/tx.amino";
import * as _330 from "./vesting/v1beta1/tx.amino";
import * as _331 from "./authz/v1beta1/tx.registry";
import * as _332 from "./bank/v1beta1/tx.registry";
import * as _333 from "./crisis/v1beta1/tx.registry";
import * as _334 from "./distribution/v1beta1/tx.registry";
import * as _335 from "./evidence/v1beta1/tx.registry";
import * as _336 from "./feegrant/v1beta1/tx.registry";
import * as _337 from "./gov/v1beta1/tx.registry";
import * as _338 from "./slashing/v1beta1/tx.registry";
import * as _339 from "./staking/v1beta1/tx.registry";
import * as _340 from "./vesting/v1beta1/tx.registry";
import * as _341 from "./auth/v1beta1/query.lcd";
import * as _342 from "./authz/v1beta1/query.lcd";
import * as _343 from "./bank/v1beta1/query.lcd";
import * as _344 from "./distribution/v1beta1/query.lcd";
import * as _345 from "./evidence/v1beta1/query.lcd";
import * as _346 from "./feegrant/v1beta1/query.lcd";
import * as _347 from "./gov/v1beta1/query.lcd";
import * as _348 from "./mint/v1beta1/query.lcd";
import * as _349 from "./params/v1beta1/query.lcd";
import * as _350 from "./slashing/v1beta1/query.lcd";
import * as _351 from "./staking/v1beta1/query.lcd";
import * as _352 from "./upgrade/v1beta1/query.lcd";
import * as _353 from "./auth/v1beta1/query.rpc.query";
import * as _354 from "./authz/v1beta1/query.rpc.query";
import * as _355 from "./bank/v1beta1/query.rpc.query";
import * as _356 from "./base/tendermint/v1beta1/query.rpc.svc";
import * as _357 from "./distribution/v1beta1/query.rpc.query";
import * as _358 from "./evidence/v1beta1/query.rpc.query";
import * as _359 from "./feegrant/v1beta1/query.rpc.query";
import * as _360 from "./gov/v1beta1/query.rpc.query";
import * as _361 from "./mint/v1beta1/query.rpc.query";
import * as _362 from "./params/v1beta1/query.rpc.query";
import * as _363 from "./slashing/v1beta1/query.rpc.query";
import * as _364 from "./staking/v1beta1/query.rpc.query";
import * as _365 from "./tx/v1beta1/service.rpc.svc";
import * as _366 from "./upgrade/v1beta1/query.rpc.query";
import * as _367 from "./authz/v1beta1/tx.rpc.msg";
import * as _368 from "./bank/v1beta1/tx.rpc.msg";
import * as _369 from "./crisis/v1beta1/tx.rpc.msg";
import * as _370 from "./distribution/v1beta1/tx.rpc.msg";
import * as _371 from "./evidence/v1beta1/tx.rpc.msg";
import * as _372 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _373 from "./gov/v1beta1/tx.rpc.msg";
import * as _374 from "./slashing/v1beta1/tx.rpc.msg";
import * as _375 from "./staking/v1beta1/tx.rpc.msg";
import * as _376 from "./vesting/v1beta1/tx.rpc.msg";
import * as _404 from "./lcd";
import * as _405 from "./rpc.query";
import * as _406 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = { ..._184,
      ..._185,
      ..._186,
      ..._341,
      ..._353
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._187,
      ..._188,
      ..._189,
      ..._190,
      ..._191,
      ..._321,
      ..._331,
      ..._342,
      ..._354,
      ..._367
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._192,
      ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._322,
      ..._332,
      ..._343,
      ..._355,
      ..._368
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._197
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._198
      };
    }
    export namespace query {
      export const v1beta1 = { ..._199
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._200
      };
      export const v2alpha1 = { ..._201
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._202
      };
    }
    export namespace store {
      export const v1beta1 = { ..._203,
        ..._204,
        ..._205
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._206,
        ..._356
      };
    }
    export const v1beta1 = { ..._207
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._208,
      ..._209
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._210,
      ..._211,
      ..._323,
      ..._333,
      ..._369
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._212
    };
    export const multisig = { ..._213
    };
    export const secp256k1 = { ..._214
    };
    export const secp256r1 = { ..._215
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._216,
      ..._217,
      ..._218,
      ..._219,
      ..._324,
      ..._334,
      ..._344,
      ..._357,
      ..._370
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._220,
      ..._221,
      ..._222,
      ..._223,
      ..._325,
      ..._335,
      ..._345,
      ..._358,
      ..._371
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._224,
      ..._225,
      ..._226,
      ..._227,
      ..._326,
      ..._336,
      ..._346,
      ..._359,
      ..._372
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._228
    };
  }
  export namespace gov {
    export const v1beta1 = { ..._229,
      ..._230,
      ..._231,
      ..._232,
      ..._327,
      ..._337,
      ..._347,
      ..._360,
      ..._373
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._233,
      ..._234,
      ..._235,
      ..._348,
      ..._361
    };
  }
  export namespace params {
    export const v1beta1 = { ..._236,
      ..._237,
      ..._349,
      ..._362
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._238,
      ..._239,
      ..._240,
      ..._241,
      ..._328,
      ..._338,
      ..._350,
      ..._363,
      ..._374
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._242,
      ..._243,
      ..._244,
      ..._245,
      ..._246,
      ..._329,
      ..._339,
      ..._351,
      ..._364,
      ..._375
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._247
      };
    }
    export const v1beta1 = { ..._248,
      ..._249,
      ..._365
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._250,
      ..._251,
      ..._352,
      ..._366
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._252,
      ..._253,
      ..._330,
      ..._340,
      ..._376
    };
  }
  export const ClientFactory = { ..._404,
    ..._405,
    ..._406
  };
}