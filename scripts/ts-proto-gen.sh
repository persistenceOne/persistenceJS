#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

OUT_DIR="./src"

PROTOC_GEN_TS_PROTO_PATH="./node_modules/.bin/protoc-gen-ts_proto"

mkdir -p "$OUT_DIR"

echo "Generating Protos ..."
PROTO_DIR="./proto"
THIRD_PARTY_DIR="./proto" 
protoc \
  --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PROTO_PATH}" \
  --ts_proto_out="${OUT_DIR}" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=messages,ts_proto_opt=outputClientImpl=grpc-web" \
  --proto_path="$PROTO_DIR" \
  --proto_path="$THIRD_PARTY_DIR" \
  $(find ${PROTO_DIR} ${THIRD_PARTY_DIR} -path -prune -o -name '*.proto' -print0 | xargs -0)

  


