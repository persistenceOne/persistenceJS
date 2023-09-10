<p align="center" size="20">
    <span style="color:black;font-weight:700;font-size:30px">
    Persistence
    </span> 
    <img src="https://www.computerhope.com/jargon/j/javascript.png" alt="isolated" width="40"/>
</p>
<p align="center">
    <a href="https://opensource.org/licenses/Apache-2.0"><img alt="License" src="https://img.shields.io/badge/License-Apache_2.0-blue.svg"></a>
    <a href="https://www.npmjs.com/package/persistenceonejs"><img alt="npm (scoped)" src="https://img.shields.io/npm/v/persistenceonejs.svg"> </a>
</p>

<p align="center">
    <a href="https://docs.persistence.one/">Persistence Docs <img src="https://avatars.githubusercontent.com/u/52166365" width="20" align="center" alt="Persistence Logo"></a>
    |
    <a href="https://github.com/persistenceOne/persistenceCore/">PersistenceCore Blockchain Repository</a>
</p>

---

This repository contains protos compiled into typescript/ javascript that can be used to interact with the persistence blockchain.

## Usage
Use with [cosmjs](https://github.com/cosmos/cosmjs)

## Maintain

- open file to scripts/update-protos.sh and update the commits/ tags
- do `npm run update-protos`
- do `npm run build:telescope`
- update package.json version
- commit and open PR
- tag a release for publishing on npmjs

## Setup

```sh
npm install persistenceonejs
```

## Compatibility

| PersistenceJS | PersistenceCore |
|---------------|-----------------|
| v2.2.x        | v9.x.x          |
| v2.1.x        | v8.x.x          |
Rest of the versions are obsolete
