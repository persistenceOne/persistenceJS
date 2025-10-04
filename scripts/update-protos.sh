#!/bin/bash

echo "updating amino cosmos tendermint ibc pstake persistence cosmwasm"
echo $(pwd)

cosmos_git=https://github.com/persistenceOne/cosmos-sdk.git
cosmos_tag=v0.50.14-lsm-disabled

ics23_git=https://github.com/cosmos/ics23.git
ics23_tag=v0.10.0

ibc_git=https://github.com/cosmos/ibc-go.git
ibc_tag=v10.1.1

pstake_git=https://github.com/persistenceOne/pstake-native.git
pstake_tag=v5.0.0-rc1

persistence_sdk_git=https://github.com/persistenceOne/persistence-sdk.git
persistence_sdk_tag=v5.0.0-rc1

wasmd_git=https://github.com/cosmwasm/wasmd.git
wasmd_tag=v0.55.1

gaia_git=https://github.com/persistenceOne/gaia.git
gaia_tag=v24.0.0-liquid-fix

echo "updating amino, cosmos, tendermint from cosmos-sdk"
git clone $cosmos_git
cd cosmos-sdk
git checkout $cosmos_tag

rm -rf ../proto/cosmos
rm -rf ../proto/amino
rm -rf ../proto/tendermint
cp -r proto/amino ../proto/amino
cp -r proto/cosmos ../proto/cosmos
cp -r proto/tendermint ../proto/tendermint

cd ..
rm -rf cosmos-sdk
echo "remove problematic packages autocli"
rm -rf proto/cosmos/autocli

echo "updating ics23 from cosmos/ics23"
git clone $ics23_git
cd ics23
git checkout $ics23_tag

rm -rf ../proto/cosmos/ics23
cp -r proto/cosmos/ics23 ../proto/cosmos/ics23

cd ..
rm -rf ics23

echo "updating ibc from ibc-go"
git clone $ibc_git
cd ibc-go
git checkout $ibc_tag

rm -rf ../proto/ibc
cp -r proto/ibc ../proto/ibc

cd ..
rm -rf ibc-go

echo "updating pstake from pstake-native"
git clone $pstake_git
cd pstake-native
git checkout $pstake_tag

rm -rf ../proto/pstake
cp -r proto/pstake ../proto/pstake

cd ..
rm -rf pstake-native

echo "updating persistence from persistence-sdk"
git clone $persistence_sdk_git
cd persistence-sdk
git checkout $persistence_sdk_tag

rm -rf ../proto/persistence
cp -r proto/persistence ../proto/persistence

cd ..
rm -rf persistence-sdk

echo "remove problematic packages interchainquery and oracle"
rm -rf proto/persistence/interchainquery
rm -rf proto/persistence/oracle

echo "updating cosmwasm from wasmd"
git clone $wasmd_git
cd wasmd
git checkout $wasmd_tag

rm -rf ../proto/cosmwasm
cp -r proto/cosmwasm ../proto/cosmwasm

cd ..
rm -rf wasmd

echo "updating x/liquid from gaia"
git clone $gaia_git
cd gaia
git checkout $gaia_tag

rm -rf ../proto/gaia
cp -r proto/gaia ../proto/gaia

cd ..
rm -rf gaia
echo "remove unneeded pacakges"
rm -rf proto/gaia/metaprotocols
