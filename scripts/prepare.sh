#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

DIRS="confio cosmos cosmos_proto gogoproto google tendermint persistence"

for dir in $DIRS; do
  rm -rf "$dir"
  cp -R "./src/$dir" ./
done