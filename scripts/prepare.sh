#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

DIRS="cosmos-sdk persistenceCore wasmd"

if [ -d "./proto" ]
then
  rm -rf "./proto"
  mkdir -p "./proto"
fi

for dir in $DIRS; do
  cp -R "./source/$dir/proto/" "./proto"
  if [ -d "./source/$dir/third_party" ]
  then
    cp -R "./source/$dir/third_party/proto/" "./proto"
  fi
done
