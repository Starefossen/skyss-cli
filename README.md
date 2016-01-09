# Skyss CLI

[![Build status](https://img.shields.io/wercker/ci/567f216a1e29124443152a2e.svg "Build status")](https://app.wercker.com/project/bykey/2e67fadd89cd086636c37bdfccdb0e96)
[![NPM downloads](https://img.shields.io/npm/dm/skyss-cli.svg "NPM downloads")](https://www.npmjs.com/package/skyss-cli)
[![NPM version](https://img.shields.io/npm/v/skyss-cli.svg "NPM version")](https://www.npmjs.com/package/skyss-cli)
[![Node version](https://img.shields.io/node/v/skyss-cli.svg "Node version")](https://www.npmjs.com/package/skyss-cli)
[![Dependency status](https://img.shields.io/david/Starefossen/skyss-cli.svg "Dependency status")](https://david-dm.org/Starefossen/skyss-cli)

Command line client (CLI) for interacting with public transport information
from Skyss APIs build on top of the open source package
[`skyss`](https://github.com/Starefossen/node-skyss) for Node.js.

## Requirements

* Node.JS >= v4.0.0

## Install

```console
$ npm install skyss-cli
```

## Features

* List routes for given stop

## Usage

```console
$ skyss-cli --help

Usage: skyss-cli <command> [options]

command
  version     show package versions
  stop        get stop information

Options:
   -v, --verbose        Output verbose information
```

### Stop

```console
$ skyss-cli stop placeId_011438 --line 2

Landåstorget (12011438)

[2] Til Birkelundstoppen
4 min 23:20 23:40

Landåstorget (12011439)

[2] Til Sentrum
7 min 23:23 23:43
```

## Legal

Skyss is a registered trademark of Hordaland County Councile (Hordaland
Fylkeskommune) which is not affiliated with this product. Content from Skyss
APIs may be copyrighted.

## [MIT Licensed](https://github.com/Starefossen/skyss-cli/blob/master/LICENSE)
