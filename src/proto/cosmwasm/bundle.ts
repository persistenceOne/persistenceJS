import * as _140 from "./wasm/v1/genesis";
import * as _141 from "./wasm/v1/ibc";
import * as _142 from "./wasm/v1/proposal";
import * as _143 from "./wasm/v1/query";
import * as _144 from "./wasm/v1/tx";
import * as _145 from "./wasm/v1/types";
import * as _280 from "./wasm/v1/query.rpc.query";
import * as _281 from "./wasm/v1/tx.rpc.msg";
import * as _316 from "./rpc.query";
import * as _317 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._280,
      ..._281
    };
  }
  export const ClientFactory = { ..._316,
    ..._317
  };
}