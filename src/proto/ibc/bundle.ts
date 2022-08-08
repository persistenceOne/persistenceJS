import * as _225 from "./applications/interchain_accounts/controller/v1/controller";
import * as _226 from "./applications/interchain_accounts/controller/v1/query";
import * as _227 from "./applications/interchain_accounts/host/v1/host";
import * as _228 from "./applications/interchain_accounts/host/v1/query";
import * as _229 from "./applications/interchain_accounts/v1/account";
import * as _230 from "./applications/interchain_accounts/v1/genesis";
import * as _231 from "./applications/interchain_accounts/v1/metadata";
import * as _232 from "./applications/interchain_accounts/v1/packet";
import * as _233 from "./applications/transfer/v1/genesis";
import * as _234 from "./applications/transfer/v1/query";
import * as _235 from "./applications/transfer/v1/transfer";
import * as _236 from "./applications/transfer/v1/tx";
import * as _237 from "./applications/transfer/v2/packet";
import * as _238 from "./core/channel/v1/channel";
import * as _239 from "./core/channel/v1/genesis";
import * as _240 from "./core/channel/v1/query";
import * as _241 from "./core/channel/v1/tx";
import * as _242 from "./core/client/v1/client";
import * as _243 from "./core/client/v1/genesis";
import * as _244 from "./core/client/v1/query";
import * as _245 from "./core/client/v1/tx";
import * as _246 from "./core/commitment/v1/commitment";
import * as _247 from "./core/connection/v1/connection";
import * as _248 from "./core/connection/v1/genesis";
import * as _249 from "./core/connection/v1/query";
import * as _250 from "./core/connection/v1/tx";
import * as _251 from "./core/types/v1/genesis";
import * as _252 from "./lightclients/localhost/v1/localhost";
import * as _253 from "./lightclients/solomachine/v1/solomachine";
import * as _254 from "./lightclients/solomachine/v2/solomachine";
import * as _255 from "./lightclients/tendermint/v1/tendermint";
import * as _306 from "./applications/interchain_accounts/controller/v1/query.rpc.query";
import * as _307 from "./applications/interchain_accounts/host/v1/query.rpc.query";
import * as _308 from "./applications/transfer/v1/query.rpc.query";
import * as _309 from "./core/channel/v1/query.rpc.query";
import * as _310 from "./core/client/v1/query.rpc.query";
import * as _311 from "./core/connection/v1/query.rpc.query";
import * as _312 from "./applications/transfer/v1/tx.rpc.msg";
import * as _313 from "./core/channel/v1/tx.rpc.msg";
import * as _314 from "./core/client/v1/tx.rpc.msg";
import * as _315 from "./core/connection/v1/tx.rpc.msg";
import * as _320 from "./rpc.query";
import * as _321 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = { ..._225, ..._226, ..._306 };
      }
      export namespace host {
        export const v1 = { ..._227, ..._228, ..._307 };
      }
      export const v1 = { ..._229, ..._230, ..._231, ..._232 };
    }
    export namespace transfer {
      export const v1 = { ..._233, ..._234, ..._235, ..._236, ..._308, ..._312 };
      export const v2 = { ..._237 };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._238, ..._239, ..._240, ..._241, ..._309, ..._313 };
    }
    export namespace client {
      export const v1 = { ..._242, ..._243, ..._244, ..._245, ..._310, ..._314 };
    }
    export namespace commitment {
      export const v1 = { ..._246 };
    }
    export namespace connection {
      export const v1 = { ..._247, ..._248, ..._249, ..._250, ..._311, ..._315 };
    }
    export namespace types {
      export const v1 = { ..._251 };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._252 };
    }
    export namespace solomachine {
      export const v1 = { ..._253 };
      export const v2 = { ..._254 };
    }
    export namespace tendermint {
      export const v1 = { ..._255 };
    }
  }
  export const ClientFactory = { ..._320, ..._321 };
}
