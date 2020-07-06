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

```javascript
// using ES6 modules
import { isGreaterThan } from '@alidatorjs/is-greater-than'

// using CommonJS modules
const { isGreaterThan } = require('@alidatorjs/is-greater-than');
```

## Usage

Is as easy as define an array with the validations.

```javascript
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
