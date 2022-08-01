import * as _176 from "./wasm/v1/genesis";
import * as _177 from "./wasm/v1/ibc";
import * as _178 from "./wasm/v1/proposal";
import * as _179 from "./wasm/v1/query";
import * as _180 from "./wasm/v1/tx";
import * as _181 from "./wasm/v1/types";
import * as _316 from "./wasm/v1/tx.amino";
import * as _317 from "./wasm/v1/tx.registry";
import * as _318 from "./wasm/v1/query.lcd";
import * as _319 from "./wasm/v1/query.rpc.query";
import * as _320 from "./wasm/v1/tx.rpc.msg";
import * as _401 from "./lcd";
import * as _402 from "./rpc.query";
import * as _403 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._316,
      ..._317,
      ..._318,
      ..._319,
      ..._320
    };
  }
  export const ClientFactory = { ..._401,
    ..._402,
    ..._403
  };
}