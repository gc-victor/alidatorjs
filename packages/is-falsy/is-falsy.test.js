require('esm');
const { equal } = require('tap');
const { isFalsy } = require('./is-falsy');

/**
 if (false)
 if (null)
 if (undefined)
 if (0)
 if (NaN)
 if ('')
 if ("")
 if (document.all) // no tested
 @see: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 */
equal(isFalsy(true), false);
equal(isFalsy(false), true);
equal(isFalsy(null), true);
equal(isFalsy(undefined), true);
equal(isFalsy(0), true);
equal(isFalsy(NaN), true);
equal(isFalsy(''), true);
