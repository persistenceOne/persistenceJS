import * as _261 from "./applications/interchain_accounts/controller/v1/controller";
import * as _262 from "./applications/interchain_accounts/controller/v1/query";
import * as _263 from "./applications/interchain_accounts/host/v1/host";
import * as _264 from "./applications/interchain_accounts/host/v1/query";
import * as _265 from "./applications/interchain_accounts/v1/account";
import * as _266 from "./applications/interchain_accounts/v1/genesis";
import * as _267 from "./applications/interchain_accounts/v1/metadata";
import * as _268 from "./applications/interchain_accounts/v1/packet";
import * as _269 from "./applications/transfer/v1/genesis";
import * as _270 from "./applications/transfer/v1/query";
import * as _271 from "./applications/transfer/v1/transfer";
import * as _272 from "./applications/transfer/v1/tx";
import * as _273 from "./applications/transfer/v2/packet";
import * as _274 from "./core/channel/v1/channel";
import * as _275 from "./core/channel/v1/genesis";
import * as _276 from "./core/channel/v1/query";
import * as _277 from "./core/channel/v1/tx";
import * as _278 from "./core/client/v1/client";
import * as _279 from "./core/client/v1/genesis";
import * as _280 from "./core/client/v1/query";
import * as _281 from "./core/client/v1/tx";
import * as _282 from "./core/commitment/v1/commitment";
import * as _283 from "./core/connection/v1/connection";
import * as _284 from "./core/connection/v1/genesis";
import * as _285 from "./core/connection/v1/query";
import * as _286 from "./core/connection/v1/tx";
import * as _287 from "./core/types/v1/genesis";
import * as _288 from "./lightclients/localhost/v1/localhost";
import * as _289 from "./lightclients/solomachine/v1/solomachine";
import * as _290 from "./lightclients/solomachine/v2/solomachine";
import * as _291 from "./lightclients/tendermint/v1/tendermint";
import * as _377 from "./applications/transfer/v1/tx.amino";
import * as _378 from "./core/channel/v1/tx.amino";
import * as _379 from "./core/client/v1/tx.amino";
import * as _380 from "./core/connection/v1/tx.amino";
import * as _381 from "./applications/transfer/v1/tx.registry";
import * as _382 from "./core/channel/v1/tx.registry";
import * as _383 from "./core/client/v1/tx.registry";
import * as _384 from "./core/connection/v1/tx.registry";
import * as _385 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _386 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _387 from "./applications/transfer/v1/query.lcd";
import * as _388 from "./core/channel/v1/query.lcd";
import * as _389 from "./core/client/v1/query.lcd";
import * as _390 from "./core/connection/v1/query.lcd";
import * as _391 from "./applications/interchain_accounts/controller/v1/query.rpc.query";
import * as _392 from "./applications/interchain_accounts/host/v1/query.rpc.query";
import * as _393 from "./applications/transfer/v1/query.rpc.query";
import * as _394 from "./core/channel/v1/query.rpc.query";
import * as _395 from "./core/client/v1/query.rpc.query";
import * as _396 from "./core/connection/v1/query.rpc.query";
import * as _397 from "./applications/transfer/v1/tx.rpc.msg";
import * as _398 from "./core/channel/v1/tx.rpc.msg";
import * as _399 from "./core/client/v1/tx.rpc.msg";
import * as _400 from "./core/connection/v1/tx.rpc.msg";
import * as _407 from "./lcd";
import * as _408 from "./rpc.query";
import * as _409 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = { ..._261,
          ..._262,
          ..._385,
          ..._391
        };
      }
      export namespace host {
        export const v1 = { ..._263,
          ..._264,
          ..._386,
          ..._392
        };
      }
      export const v1 = { ..._265,
        ..._266,
        ..._267,
        ..._268
      };
    }
    export namespace transfer {
      export const v1 = { ..._269,
        ..._270,
        ..._271,
        ..._272,
        ..._377,
        ..._381,
        ..._387,
        ..._393,
        ..._397
      };
      export const v2 = { ..._273
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._274,
        ..._275,
        ..._276,
        ..._277,
        ..._378,
        ..._382,
        ..._388,
        ..._394,
        ..._398
      };
    }
    export namespace client {
      export const v1 = { ..._278,
        ..._279,
        ..._280,
        ..._281,
        ..._379,
        ..._383,
        ..._389,
        ..._395,
        ..._399
      };
    }
    export namespace commitment {
      export const v1 = { ..._282
      };
    }
    export namespace connection {
      export const v1 = { ..._283,
        ..._284,
        ..._285,
        ..._286,
        ..._380,
        ..._384,
        ..._390,
        ..._396,
        ..._400
      };
    }
    export namespace types {
      export const v1 = { ..._287
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._288
      };
    }
    export namespace solomachine {
      export const v1 = { ..._289
      };
      export const v2 = { ..._290
      };
    }
    export namespace tendermint {
      export const v1 = { ..._291
      };
    }
  }
  export const ClientFactory = { ..._407,
    ..._408,
    ..._409
  };
}