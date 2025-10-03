#!/bin/bash

set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

DIRS=(amino cosmos gaia cosmos_proto cosmwasm gogoproto google ibc tendermint pstake persistence)
FILES=(
  helpers.d.ts
  helpers.js
  helpers.js.map
  index.d.ts
  index.js
  index.js.map
  binary.d.ts
  binary.js
  binary.js.map
  utf8.d.ts
  utf8.js
  utf8.js.map
  varint.d.ts
  varint.js
  varint.js.map
)

for dir in "${DIRS[@]}"; do
  rm -rf "$dir"
  cp -R "./build/$dir" ./
done

for f in "${FILES[@]}"; do
  rm -rf "$f"
  cp "./build/$f" ./
done
