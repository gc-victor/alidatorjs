require('esm');
const { equal } = require('tap');
const { isTruthy } = require('./is-truthy');

/**
 if (true)
 if ({})
 if ([])
 if ("foo")
 if (new Date())
 if (42)
 if (-42)
 if (3.14)
 if (-3.14)
 if (Infinity)
 if (-Infinity)
 @see: https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 */
equal(isTruthy(false), false);
equal(isTruthy(true), true);
equal(isTruthy({}), true);
equal(isTruthy([]), true);
equal(isTruthy('foo'), true);
equal(isTruthy(new Date()), true);
equal(isTruthy(42), true);
equal(isTruthy(-42), true);
equal(isTruthy(3.14), true);
equal(isTruthy(-3.14), true);
equal(isTruthy(Infinity), true);
equal(isTruthy(-Infinity), true);
