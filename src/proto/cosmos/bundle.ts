import * as _154 from "./auth/v1beta1/auth";
import * as _155 from "./auth/v1beta1/genesis";
import * as _156 from "./auth/v1beta1/query";
import * as _157 from "./authz/v1beta1/authz";
import * as _158 from "./authz/v1beta1/event";
import * as _159 from "./authz/v1beta1/genesis";
import * as _160 from "./authz/v1beta1/query";
import * as _161 from "./authz/v1beta1/tx";
import * as _162 from "./bank/v1beta1/authz";
import * as _163 from "./bank/v1beta1/bank";
import * as _164 from "./bank/v1beta1/genesis";
import * as _165 from "./bank/v1beta1/query";
import * as _166 from "./bank/v1beta1/tx";
import * as _167 from "./base/abci/v1beta1/abci";
import * as _168 from "./base/kv/v1beta1/kv";
import * as _169 from "./base/query/v1beta1/pagination";
import * as _170 from "./base/reflection/v1beta1/reflection";
import * as _171 from "./base/reflection/v2alpha1/reflection";
import * as _172 from "./base/snapshots/v1beta1/snapshot";
import * as _173 from "./base/store/v1beta1/commit_info";
import * as _174 from "./base/store/v1beta1/listening";
import * as _175 from "./base/store/v1beta1/snapshot";
import * as _176 from "./base/tendermint/v1beta1/query";
import * as _177 from "./base/v1beta1/coin";
import * as _178 from "./capability/v1beta1/capability";
import * as _179 from "./capability/v1beta1/genesis";
import * as _180 from "./crisis/v1beta1/genesis";
import * as _181 from "./crisis/v1beta1/tx";
import * as _182 from "./crypto/ed25519/keys";
import * as _183 from "./crypto/multisig/keys";
import * as _184 from "./crypto/secp256k1/keys";
import * as _185 from "./crypto/secp256r1/keys";
import * as _186 from "./distribution/v1beta1/distribution";
import * as _187 from "./distribution/v1beta1/genesis";
import * as _188 from "./distribution/v1beta1/query";
import * as _189 from "./distribution/v1beta1/tx";
import * as _190 from "./evidence/v1beta1/evidence";
import * as _191 from "./evidence/v1beta1/genesis";
import * as _192 from "./evidence/v1beta1/query";
import * as _193 from "./evidence/v1beta1/tx";
import * as _194 from "./feegrant/v1beta1/feegrant";
import * as _195 from "./feegrant/v1beta1/genesis";
import * as _196 from "./feegrant/v1beta1/query";
import * as _197 from "./feegrant/v1beta1/tx";
import * as _198 from "./genutil/v1beta1/genesis";
import * as _199 from "./gov/v1beta1/genesis";
import * as _200 from "./gov/v1beta1/gov";
import * as _201 from "./gov/v1beta1/query";
import * as _202 from "./gov/v1beta1/tx";
import * as _203 from "./mint/v1beta1/genesis";
import * as _204 from "./mint/v1beta1/mint";
import * as _205 from "./mint/v1beta1/query";
import * as _206 from "./params/v1beta1/params";
import * as _207 from "./params/v1beta1/query";
import * as _208 from "./slashing/v1beta1/genesis";
import * as _209 from "./slashing/v1beta1/query";
import * as _210 from "./slashing/v1beta1/slashing";
import * as _211 from "./slashing/v1beta1/tx";
import * as _212 from "./staking/v1beta1/authz";
import * as _213 from "./staking/v1beta1/genesis";
import * as _214 from "./staking/v1beta1/query";
import * as _215 from "./staking/v1beta1/staking";
import * as _216 from "./staking/v1beta1/tx";
import * as _217 from "./tx/signing/v1beta1/signing";
import * as _218 from "./tx/v1beta1/service";
import * as _219 from "./tx/v1beta1/tx";
import * as _220 from "./upgrade/v1beta1/query";
import * as _221 from "./upgrade/v1beta1/upgrade";
import * as _222 from "./vesting/v1beta1/tx";
import * as _223 from "./vesting/v1beta1/vesting";
import * as _289 from "./authz/v1beta1/tx.amino";
import * as _290 from "./bank/v1beta1/tx.amino";
import * as _291 from "./crisis/v1beta1/tx.amino";
import * as _292 from "./distribution/v1beta1/tx.amino";
import * as _293 from "./evidence/v1beta1/tx.amino";
import * as _294 from "./feegrant/v1beta1/tx.amino";
import * as _295 from "./gov/v1beta1/tx.amino";
import * as _296 from "./slashing/v1beta1/tx.amino";
import * as _297 from "./staking/v1beta1/tx.amino";
import * as _298 from "./vesting/v1beta1/tx.amino";
import * as _299 from "./authz/v1beta1/tx.registry";
import * as _300 from "./bank/v1beta1/tx.registry";
import * as _301 from "./crisis/v1beta1/tx.registry";
import * as _302 from "./distribution/v1beta1/tx.registry";
import * as _303 from "./evidence/v1beta1/tx.registry";
import * as _304 from "./feegrant/v1beta1/tx.registry";
import * as _305 from "./gov/v1beta1/tx.registry";
import * as _306 from "./slashing/v1beta1/tx.registry";
import * as _307 from "./staking/v1beta1/tx.registry";
import * as _308 from "./vesting/v1beta1/tx.registry";
import * as _309 from "./auth/v1beta1/query.lcd";
import * as _310 from "./authz/v1beta1/query.lcd";
import * as _311 from "./bank/v1beta1/query.lcd";
import * as _312 from "./distribution/v1beta1/query.lcd";
import * as _313 from "./evidence/v1beta1/query.lcd";
import * as _314 from "./feegrant/v1beta1/query.lcd";
import * as _315 from "./gov/v1beta1/query.lcd";
import * as _316 from "./mint/v1beta1/query.lcd";
import * as _317 from "./params/v1beta1/query.lcd";
import * as _318 from "./slashing/v1beta1/query.lcd";
import * as _319 from "./staking/v1beta1/query.lcd";
import * as _320 from "./upgrade/v1beta1/query.lcd";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = { ..._154,
      ..._155,
      ..._156,
      ..._309
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._289,
      ..._299,
      ..._310
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._290,
      ..._300,
      ..._311
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._167
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._168
      };
    }
    export namespace query {
      export const v1beta1 = { ..._169
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._170
      };
      export const v2alpha1 = { ..._171
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._172
      };
    }
    export namespace store {
      export const v1beta1 = { ..._173,
        ..._174,
        ..._175
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._176
      };
    }
    export const v1beta1 = { ..._177
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._178,
      ..._179
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._180,
      ..._181,
      ..._291,
      ..._301
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._182
    };
    export const multisig = { ..._183
    };
    export const secp256k1 = { ..._184
    };
    export const secp256r1 = { ..._185
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._186,
      ..._187,
      ..._188,
      ..._189,
      ..._292,
      ..._302,
      ..._312
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._293,
      ..._303,
      ..._313
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._194,
      ..._195,
      ..._196,
      ..._197,
      ..._294,
      ..._304,
      ..._314
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._198
    };
  }
  export namespace gov {
    export const v1beta1 = { ..._199,
      ..._200,
      ..._201,
      ..._202,
      ..._295,
      ..._305,
      ..._315
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._203,
      ..._204,
      ..._205,
      ..._316
    };
  }
  export namespace params {
    export const v1beta1 = { ..._206,
      ..._207,
      ..._317
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._208,
      ..._209,
      ..._210,
      ..._211,
      ..._296,
      ..._306,
      ..._318
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._212,
      ..._213,
      ..._214,
      ..._215,
      ..._216,
      ..._297,
      ..._307,
      ..._319
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._217
      };
    }
    export const v1beta1 = { ..._218,
      ..._219
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._220,
      ..._221,
      ..._320
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._222,
      ..._223,
      ..._298,
      ..._308
    };
  }
}