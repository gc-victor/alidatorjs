# is-less-than

Tiny function, compatible with Alidator.js, to validate if a value is less than other.

## Install

You can use npm or yarn to install it.

`$ npm install --save @alidatorjs/is-less-than`

`$ yarn add @alidatorjs/is-less-than`

Then with a module bundler like rollup or webpack, use as you would anything else:

```
// using ES6 modules
import { isLessThan } from '@alidatorjs/is-less-than'

// using CommonJS modules
var { isLessThan } = require('@alidatorjs/is-less-than')
```

## Usage

Is as easy as define an array with the validations.

```
import { validator } from '@alidatorjs/validator';
import { isLessThan } from '@alidatorjs/is-less-than';

const isValid = validator([
    isLessThan(0, 1),
    isLessThan(1, 2),
    isLessThan(2, 3),
]).every; // true

const errors = validator([
    [isLessThan(1, 0), () => 'Error 1'],
    [isLessThan(1, 2), () => 'Error 2'],
    [isLessThan(3, 2), () => 'Error 3'],
]).errors; // ['Error 1', 'Error 3']
```

## License

[MIT License]((https://github.com/gc-victor/alidatorjs/blob/master/LICENSE.md))
