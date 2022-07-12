#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

OUT_DIR="./src"


PROTOC_GEN_TS_PROTO_PATH="./node_modules/.bin/protoc-gen-ts_proto"

mkdir -p "$OUT_DIR"


echo "Generating Cosmos Proto ..."
COSMOS_DIR="./source/cosmos-sdk/proto"
THIRD_PARTY_DIR="./source/cosmos-sdk/third_party/proto"
protoc \
  --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PROTO_PATH}" \
  --ts_proto_out="${OUT_DIR}" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=messages" \
  --proto_path="$COSMOS_DIR" \
  --proto_path="$THIRD_PARTY_DIR" \
  $(find ${THIRD_PARTY_DIR} ${COSMOS_DIR} -path -prune -o -name '*.proto' -print0 | xargs -0)


echo "Generating Persistence Proto ..."
PERSISTENCE_DIR="./source/persistenceCore/proto"
THIRD_PARTY_DIR="./source/cosmos-sdk/third_party/proto" 
protoc \
  --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PROTO_PATH}" \
  --ts_proto_out="${OUT_DIR}" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=messages" \
  --proto_path="$PERSISTENCE_DIR" \
  --proto_path="$THIRD_PARTY_DIR" \
  $(find ${PERSISTENCE_DIR} ${THIRD_PARTY_DIR} -path -prune -o -name '*.proto' -print0 | xargs -0)

echo "Generating Cosmwasm Proto ..."
COSMWASM_DIR="./source/wasmd/proto"
THIRD_PARTY_DIR="./source/wasmd/third_party/proto" 
protoc \
  --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PROTO_PATH}" \
  --ts_proto_out="${OUT_DIR}" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=messages,ts_proto_opt=outputClientImpl=grpc-web" \
  --proto_path="$COSMWASM_DIR" \
  --proto_path="$THIRD_PARTY_DIR" \
  $(find ${COSMWASM_DIR} ${THIRD_PARTY_DIR} -path -prune -o -name '*.proto' -print0 | xargs -0)

  


