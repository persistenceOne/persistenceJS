import * as _149 from "./halving/v1beta1/genesis";
import * as _150 from "./halving/v1beta1/halving";
import * as _151 from "./halving/v1beta1/query";
import * as _172 from "./halving/v1beta1/query.lcd";
import * as _173 from "./halving/v1beta1/query.rpc.query";
import * as _174 from "./lcd";
import * as _175 from "./rpc.query";
export namespace persistence {
  export namespace halving {
    export const v1beta1 = { ..._149,
      ..._150,
      ..._151,
      ..._172,
      ..._173
    };
  }
  export const ClientFactory = { ..._174,
    ..._175
  };
}