import * as _146 from "./wasm/v1/genesis";
import * as _147 from "./wasm/v1/ibc";
import * as _148 from "./wasm/v1/proposal";
import * as _149 from "./wasm/v1/query";
import * as _150 from "./wasm/v1/tx";
import * as _151 from "./wasm/v1/types";
import * as _286 from "./wasm/v1/tx.amino";
import * as _287 from "./wasm/v1/tx.registry";
import * as _288 from "./wasm/v1/query.lcd";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._286,
      ..._287,
      ..._288
    };
  }
}