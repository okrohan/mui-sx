# mui-sx
A simple utility for conditionally joining material ui sx props together.

![ts](https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![License](https://badgen.net/npm/license/mui-sx)](https://www.npmjs.com/package/mui-sx)

## Features
- Cleaner conditional sx composition syntax inspired from [classnames](https://www.npmjs.com/package/classnames)
- Extremely tiny 0.36kb (gzipped) 0.6kb (minified) 🎉
- Type-definitions ✔

## Demo 
Codesandbox: https://codesandbox.io/s/sx-compose-example-z0mki
## Installation
Install `mui-sx` using your package manager
```
npm install mui-sx --save 
```
OR
```
yarn add mui-sx
```

## Import
```typescript
import sx from 'mui-sx';
```


## Usage
#### Basic Sx
```typescript
const sxDisplayFlex = { display: 'flex' }
const sxDisplayTable = { display: 'table' }
const sxBordered = { border: '1px solid' }

sx(sxDisplayFlex)                                                         // => { display: 'flex' }
sx(sxDisplayFlex, sxBordered)                                             // => { display: 'flex', border: '1px solid' }
sx(sxDisplayTable, sxBordered)                                            // => { display: 'flex', border: '1px solid' }
```

#### Conditional Sx
```typescript
sx({ condition: false, sx: sxDisplayFlex })                              // => {}
sx({ condition: true, sx: sxDisplayFlex })                               // => { display: 'flex' }
```

#### Mixed
```typescript
sx(sxBordered, { condition: false, sx: sxDisplayFlex })                 // => { border: '1px solid' }
sx(sxBordered, { condition: true, sx: sxDisplayFlex })                  // => {  border: '1px solid', display: 'flex' }
sx(sxBordered, sxDisplayFlex, { condition: true, sx: sxDisplayTable })  // => {  border: '1px solid', display: 'table' }
```


## LICENSE [MIT](LICENSE)

Copyright (c) 2021 Rohan Salunke.
Copyright of the Typescript bindings are respective of each contributor listed in the definition file.
