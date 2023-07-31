<div align="center">
  <h1>Typescript Package Template</h1>

[![CI](https://github.com/chepetime/ts-package-template/actions/workflows/test.yml/badge.svg)](https://github.com/chepetime/ts-package-template/actions/workflows/test.yml)

<sup>A preconfigured project template for quickly starting a new TypeScript library</sup>

 </div>

## Overview

This project template provides a preconfigured setup for creating a TypeScript library. It includes essential tools and configurations to streamline the development process and enable rapid library development.

## Features

- TypeScript for writing type-safe code
- Preconfigured build system
- Testing setup
- Documentation generation [WIP]
- Linting and code formatting
- Continuous Integration (CI) support

## Getting Started

### Prerequisites

- Node.js (version 20.x)
- PNPM (or npm)

### Installation

1. Clone the repository:

```shell
git clone https://github.com/chepetime/ts-package-template
```

2. Install dependencies:

```shell
pnpm install
# or npm install
```

## How to use

Install the [TypeScript library](https://www.npmjs.com/package/chepe-ts-package-template) built using this template

```shell
npm i chepe-ts-package-template
```

Import the library and the function

```ts
import { add, sub } from "chepe-ts-package-template";

const resultAdd = add(1, 2);
console.log(resultAdd); // 3

const resultSub = sub(5, 3);
console.log(resultSub); // 2
```

## Acknowledgements

- [NuroDev](https://github.com/nurodev/nuro.dev)

---

Made with <3 by [José Lugo](https://joseliugo.dev) at 🇲🇽 Mexico City
