# is-greater-than

Tiny function, compatible with Alidator.js, to validate if a value is greater than other.

[![npm](https://img.shields.io/npm/v/@alidatorjs/is-greater-than.svg)](http://npm.im/@alidatorjs/is-greater-than)
[![license](https://img.shields.io/npm/l/@alidatorjs/is-greater-than.svg)](https://github.com/gc-victor/alidatorjs/blob/master/LICENSE.md)
[![gzip size](http://img.badgesize.io/https://unpkg.com/@alidatorjs/is-greater-than?compression=gzip)](https://unpkg.com/@alidatorjs/is-greater-than)

## Install

You can use npm or yarn to install it.

`$ npm install --save @alidatorjs/is-greater-than`

`$ yarn add @alidatorjs/is-greater-than`

Then with a module bundler like rollup or webpack, use as you would anything else:

```
// using ES6 modules
import { isGreaterThan } from '@alidatorjs/is-greater-than'

// using CommonJS modules
var { isGreaterThan } = require('@alidatorjs/is-greater-than')
```

## Usage

Is as easy as define an array with the validations.

```
import { validator } from '@alidatorjs/validator';
import { isGreaterThan } from '@alidatorjs/is-greater-than';

const isValid = validator([
    isGreaterThan(1, 0),
    isGreaterThan(2, 1),
    isGreaterThan(3, 2),
]).every; // true

const errors = validator([
    [isGreaterThan(1, 0), () => 'Error 1'],
    [isGreaterThan(1, 2), () => 'Error 2'],
    [isGreaterThan(3, 2), () => 'Error 3'],
]).errors; // ['Error 2']
```

## License

[MIT License](https://github.com/gc-victor/alidatorjs/blob/master/LICENSE.md)
