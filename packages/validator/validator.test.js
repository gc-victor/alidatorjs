require('esm');
const { deepEquals, equal } = require('tap');
const { validator } = require('./validator');

equal(validator([false]).every, false);
equal(validator([true]).every, true);
equal(validator([true, true, true]).some, true);
equal(validator([false, true, false]).some, true);
equal(validator([true, true, true]).every, true);
equal(validator([true, true, false]).every, false);
deepEquals(
    validator([
        [true, () => {}],
        [false, () => 'Error 1'],
        [true, () => {}],
        [false, () => 'Error 2'],
    ]).errors,
    ['Error 1', 'Error 2']
);
deepEquals(validator([[true, () => {}], [true, () => {}]]).errors, []);
deepEquals(
    validator([
        [true, () => 'Success 1'],
        [false, () => {}],
        [true, () => 'Success 2'],
        [false, () => {}],
    ]).successes,
    ['Success 1', 'Success 2']
);
deepEquals(validator([[false, () => {}]]).successes, []);
deepEquals(validator([[true, () => {}]]).successes, [null]);
