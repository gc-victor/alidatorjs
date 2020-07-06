const { expect, test } = require('t-t');
const { validator } = require('./validator');

test('should validate the false item as every false', () => {
    expect(validator([false]).every).toBe(false);
});

test('should validate the true item as every true', () => {
    expect(validator([true]).every).toBe(true);
});

test('should validate the true items as every true', () => {
    expect(validator([true, true, true]).every).toBe(true);
});

test('should validate the true and false items as every false', () => {
    expect(validator([true, true, false]).every).toBe(false);
});

test('should validate the true items as some true', () => {
    expect(validator([true, true, true]).some).toBe(true);
});

test('should validate the true and false items as some true', () => {
    expect(validator([true, true, false]).some).toBe(true);
});

test('should validate the list and return the errors', () => {
    expect(
        validator([
            [true, () => {}],
            [false, () => 'Error 1'],
            [true, () => {}],
            [false, () => 'Error 2'],
        ]).errors
    ).toBe(['Error 1', 'Error 2']);
});

test('should validate the list and return the errors', () => {
    expect(
        validator([
            [true, () => 'Success 1'],
            [false, () => {}],
            [true, () => 'Success 2'],
            [true, () => {}],
            [false, () => {}],
        ]).successes
    ).toBe(['Success 1', 'Success 2', undefined]);
});
