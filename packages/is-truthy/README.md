# is-truthy

Tiny function, compatible with Alidator.js, to validate if a value is truthy.

## Install

You can use npm or yarn to install it.

`$ npm install --save @alidatorjs/is-truthy`

`$ yarn add @alidatorjs/is-truthy`

Then with a module bundler like rollup or webpack, use as you would anything else:

```
// using ES6 modules
import { isTruthy } from '@alidatorjs/is-truthy'

// using CommonJS modules
var { isTruthy } = require('@alidatorjs/is-truthy')
```

## Usage

### With Alidator.js

Is as easy as define an array with the validations.

```
import { validator } from '@alidatorjs/validator';
import { isTruthy } from '@alidatorjs/is-truthy';

const isValid = validator([
    isTruthy(false),
    isTruthy(null),
    isTruthy(undefined),
    isTruthy(0),
    isTruthy(NaN),
    isTruthy(''),
]).every; // false

const errors = validator([
    [isTruthy(true), () => 'message'],
    [isTruthy(false), () => 'Error 1'],
    [isTruthy(0), () => 'Error 2'],
    [isTruthy(1), () => 'message'],
]).errors; // ['Error 1', 'Error 2']
```

## License

[MIT License]((https://github.com/gc-victor/alidatorjs/blob/master/LICENSE.md))
