# Validator

Tiny modular validator.

[![npm](https://img.shields.io/npm/v/@alidatorjs/validator.svg)](http://npm.im/@alidatorjs/validator)
[![license](https://img.shields.io/npm/l/@alidatorjs/validator.svg)](https://github.com/gc-victor/alidatorjs/blob/master/LICENSE.md)
[![gzip size](http://img.badgesize.io/https://unpkg.com/@alidatorjs/validator?compression=gzip)](https://unpkg.com/@alidatorjs/validator)

## Install

You can use npm or yarn to install it.

`$ npm install --save @alidatorjs/validator`

`$ yarn add @alidatorjs/validator`

Then with Node.js or a module bundler, use as you would anything else:

```
// using ES6 modules
import { validator } from '@alidatorjs/validator'

// using CommonJS modules
var { validator }  = require('@alidatorjs/validator')
```

## Usage

You can choose between validate every error or some of the errors, and receive a boolean, or validate the errors or the successes, and receive an array the value defined by you.

### Every

Is as easy as define an array with the validations, and specify if is needed to validate *every* of the values

```
import { validator } from '@alidatorjs/validator';
import { isFalsy } from '@alidatorjs/is-falsy';
import { isGreaterThan } from '@alidatorjs/is-greater-than';
import { isLessThan } from '@alidatorjs/is-less-than';
import { isTruthy } from '@alidatorjs/is-truthy';

const isValid = validator([
    isFalsy(false),
    isGreaterThan(1, 0),
    isLessThan(0, 1),
    isTruthy(true),
]).every; // true
```

### Some

Is as easy as define an array with the validations, and specify if is needed to validate *some* of the values

```
const isValid = validator([ isGreaterThan(1, 0), isTruthy(true) ]).some; // true
```

### Errors

Is the way to define an error actions if the condition is false.

```
const errors = validator([
    [isFalsy(false), () => 'message'],
    [isFalsy(true), () => 'Error 1'],
    [isFalsy('tralala'), () => 'Error 2'],
    [isFalsy(0), () => 'message'],
    [isFalsy(NaN), () => 'message'],
]).errors; // ['Error 1', 'Error 2']
```

### Successes

Is the way to define a success action if the condition is true

```
const successes = validator([
    [isTruthy(true), () => 'Success 1'],
    [isTruthy(false), () => {}],
    [isTruthy(true), () => 'Success 2'],
    [isTruthy(false), () => {}],
]).successes; // ['Success 1', 'Success 2']
``` 

### Create a validation

It has to return a boolean.

```
export const isGreaterThan = (bigger, smaller) => bigger > smaller;
```

## License

[MIT License](https://github.com/gc-victor/alidatorjs/blob/master/LICENSE.md)
