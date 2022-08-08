import * as _115 from "./halving/v1beta1/genesis";
import * as _116 from "./halving/v1beta1/halving";
import * as _117 from "./halving/v1beta1/query";
import * as _138 from "./halving/v1beta1/query.rpc.query";
import * as _139 from "./rpc.query";
export namespace persistence {
  export namespace halving {
    export const v1beta1 = { ..._115, ..._116, ..._117, ..._138 };
  }
  export const ClientFactory = { ..._139 };
}
