# Validator

Tiny modular validator in 135 bytes gzipped.

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

### Validation

Is as easy as define an array with the validations, and specify if is needed to validate *every* or *some* of the values

#### Every

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

#### Some

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
]).errors, // ['Error 1', 'Error 2']
``` 

### Create a validation

It has to return a boolean.

```
export const isGreaterThan = (bigger, smaller) => bigger > smaller;
```

## License

[MIT License]((https://github.com/gc-victor/alidatorjs/blob/master/LICENSE.md))
