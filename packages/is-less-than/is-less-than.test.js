require('esm');
const { equal } = require('tap');
const { isLessThan } = require('./is-less-than');

// first parameter isn't greater then second
equal(isLessThan(1, 0), false);
// first parameter is greater then second
equal(isLessThan(1, 2), true);
