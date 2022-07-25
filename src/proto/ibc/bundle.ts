import * as _231 from "./applications/interchain_accounts/controller/v1/controller";
import * as _232 from "./applications/interchain_accounts/controller/v1/query";
import * as _233 from "./applications/interchain_accounts/host/v1/host";
import * as _234 from "./applications/interchain_accounts/host/v1/query";
import * as _235 from "./applications/interchain_accounts/v1/account";
import * as _236 from "./applications/interchain_accounts/v1/genesis";
import * as _237 from "./applications/interchain_accounts/v1/metadata";
import * as _238 from "./applications/interchain_accounts/v1/packet";
import * as _239 from "./applications/transfer/v1/genesis";
import * as _240 from "./applications/transfer/v1/query";
import * as _241 from "./applications/transfer/v1/transfer";
import * as _242 from "./applications/transfer/v1/tx";
import * as _243 from "./applications/transfer/v2/packet";
import * as _244 from "./core/channel/v1/channel";
import * as _245 from "./core/channel/v1/genesis";
import * as _246 from "./core/channel/v1/query";
import * as _247 from "./core/channel/v1/tx";
import * as _248 from "./core/client/v1/client";
import * as _249 from "./core/client/v1/genesis";
import * as _250 from "./core/client/v1/query";
import * as _251 from "./core/client/v1/tx";
import * as _252 from "./core/commitment/v1/commitment";
import * as _253 from "./core/connection/v1/connection";
import * as _254 from "./core/connection/v1/genesis";
import * as _255 from "./core/connection/v1/query";
import * as _256 from "./core/connection/v1/tx";
import * as _257 from "./core/types/v1/genesis";
import * as _258 from "./lightclients/localhost/v1/localhost";
import * as _259 from "./lightclients/solomachine/v1/solomachine";
import * as _260 from "./lightclients/solomachine/v2/solomachine";
import * as _261 from "./lightclients/tendermint/v1/tendermint";
import * as _321 from "./applications/transfer/v1/tx.amino";
import * as _322 from "./core/channel/v1/tx.amino";
import * as _323 from "./core/client/v1/tx.amino";
import * as _324 from "./core/connection/v1/tx.amino";
import * as _325 from "./applications/transfer/v1/tx.registry";
import * as _326 from "./core/channel/v1/tx.registry";
import * as _327 from "./core/client/v1/tx.registry";
import * as _328 from "./core/connection/v1/tx.registry";
import * as _329 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _330 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _331 from "./applications/transfer/v1/query.lcd";
import * as _332 from "./core/channel/v1/query.lcd";
import * as _333 from "./core/client/v1/query.lcd";
import * as _334 from "./core/connection/v1/query.lcd";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = { ..._231,
          ..._232,
          ..._329
        };
      }
      export namespace host {
        export const v1 = { ..._233,
          ..._234,
          ..._330
        };
      }
      export const v1 = { ..._235,
        ..._236,
        ..._237,
        ..._238
      };
    }
    export namespace transfer {
      export const v1 = { ..._239,
        ..._240,
        ..._241,
        ..._242,
        ..._321,
        ..._325,
        ..._331
      };
      export const v2 = { ..._243
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._244,
        ..._245,
        ..._246,
        ..._247,
        ..._322,
        ..._326,
        ..._332
      };
    }
    export namespace client {
      export const v1 = { ..._248,
        ..._249,
        ..._250,
        ..._251,
        ..._323,
        ..._327,
        ..._333
      };
    }
    export namespace commitment {
      export const v1 = { ..._252
      };
    }
    export namespace connection {
      export const v1 = { ..._253,
        ..._254,
        ..._255,
        ..._256,
        ..._324,
        ..._328,
        ..._334
      };
    }
    export namespace types {
      export const v1 = { ..._257
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._258
      };
    }
    export namespace solomachine {
      export const v1 = { ..._259
      };
      export const v2 = { ..._260
      };
    }
    export namespace tendermint {
      export const v1 = { ..._261
      };
    }
  }
}