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
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = { ..._148,
      ..._149,
      ..._150,
      ..._282
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._283,
      ..._296
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._284,
      ..._297
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._161
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._162
      };
    }
    export namespace query {
      export const v1beta1 = { ..._163
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._164
      };
      export const v2alpha1 = { ..._165
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._166
      };
    }
    export namespace store {
      export const v1beta1 = { ..._167,
        ..._168,
        ..._169
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._170,
        ..._285
      };
    }
    export const v1beta1 = { ..._171
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._172,
      ..._173
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._174,
      ..._175,
      ..._298
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._176
    };
    export const multisig = { ..._177
    };
    export const secp256k1 = { ..._178
    };
    export const secp256r1 = { ..._179
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._180,
      ..._181,
      ..._182,
      ..._183,
      ..._286,
      ..._299
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._184,
      ..._185,
      ..._186,
      ..._187,
      ..._287,
      ..._300
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._188,
      ..._189,
      ..._190,
      ..._191,
      ..._288,
      ..._301
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._192
    };
  }
  export namespace gov {
    export const v1beta1 = { ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._289,
      ..._302
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._197,
      ..._198,
      ..._199,
      ..._290
    };
  }
  export namespace params {
    export const v1beta1 = { ..._200,
      ..._201,
      ..._291
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._202,
      ..._203,
      ..._204,
      ..._205,
      ..._292,
      ..._303
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._206,
      ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._293,
      ..._304
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._211
      };
    }
    export const v1beta1 = { ..._212,
      ..._213,
      ..._294
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._214,
      ..._215,
      ..._295
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._216,
      ..._217,
      ..._305
    };
  }
  export const ClientFactory = { ..._318,
    ..._319
  };
}