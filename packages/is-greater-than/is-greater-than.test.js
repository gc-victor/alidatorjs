require('esm');
const { equal } = require('tap');
const { isGreaterThan } = require('./is-greater-than');

// first parameter isn't greater then second
equal(isGreaterThan(0, 1), false);
// first parameter is greater then second
equal(isGreaterThan(2, 1), true);
