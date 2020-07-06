# is-falsy

Tiny function, compatible with Alidator.js, to validate if a value is falsy.

[![npm](https://img.shields.io/npm/v/@alidatorjs/is-falsy.svg)](http://npm.im/@alidatorjs/is-falsy)
[![license](https://img.shields.io/npm/l/@alidatorjs/is-falsy.svg)](https://github.com/gc-victor/alidatorjs/blob/master/LICENSE.md)
[![gzip size](http://img.badgesize.io/https://unpkg.com/@alidatorjs/is-falsy?compression=gzip)](https://unpkg.com/@alidatorjs/is-falsy)

## Install

You can use npm or yarn to install it.

`$ npm install --save @alidatorjs/is-falsy`

`$ yarn add @alidatorjs/is-falsy`

Then with a module bundler like rollup or webpack, use as you would anything else:

```javascript
// using ES6 modules
import { isFalsy } from '@alidatorjs/is-falsy'

// using CommonJS modules
const { isFalsy } = require('@alidatorjs/is-falsy');
```

## Usage

Is as easy as define an array with the validations.

```javascript
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
]).errors; // ['Error 1', 'Error 2']
```

## License

[MIT License](https://github.com/gc-victor/alidatorjs/blob/master/LICENSE.md)

Copyright (c) 2020 Víctor García

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.