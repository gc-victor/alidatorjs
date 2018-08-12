# is-falsy

Tiny function, compatible with Alidator.js, to validate if a value is falsy.

## Install

You can use npm or yarn to install it.

`$ npm install --save @alidatorjs/is-falsy`

`$ yarn add @alidatorjs/is-falsy`

Then with a module bundler like rollup or webpack, use as you would anything else:

```
// using ES6 modules
import { isFalsy } from '@alidatorjs/is-falsy'

// using CommonJS modules
var { isFalsy } = require('@alidatorjs/is-falsy')
```

## Usage

Is as easy as define an array with the validations.

```
import { validator } from '@alidatorjs/validator';
import { isFalsy } from '@alidatorjs/is-falsy';

const isValid = validator([
    isFalsy(false),
    isFalsy(null),
    isFalsy(undefined),
    isFalsy(0),
    isFalsy(NaN),
    isFalsy(''),
]).every; // true

const errors = validator([
    [isFalsy(false), () => 'message'],
    [isFalsy(true), () => 'Error 1'],
    [isFalsy('tralala'), () => 'Error 2'],
    [isFalsy(0), () => 'message'],
    [isFalsy(NaN), () => 'message'],
]).errors, // ['Error 1', 'Error 2']
```

## License

[MIT License](https://github.com/gc-victor/alidatorjs/blob/master/LICENSE.md)
