const { expect, test } = require('t-t');
const { isTruthy } = require('./is-truthy');

// @see: https://developer.mozilla.org/en-US/docs/Glossary/Truthy
test('should validate a false as false', () => {
    expect(isTruthy(false)).toBe(false);
});

test('should validate a null as false', () => {
    expect(isTruthy(null)).toBe(false);
});

test('should validate a undefined as false', () => {
    expect(isTruthy(undefined)).toBe(false);
});

test('should validate a true as true', () => {
    expect(isTruthy(true)).toBe(true);
});

test('should validate an object as true', () => {
    expect(isTruthy({})).toBe(true);
});

test('should validate an array as true', () => {
    expect(isTruthy([])).toBe(true);
});

test('should validate an none empty string as true', () => {
    expect(isTruthy('foo')).toBe(true);
});

test('should validate an empty string as false', () => {
    expect(isTruthy('')).toBe(false);
});

test('should validate a number as true', () => {
    expect(isTruthy(42)).toBe(true);
});

test('should validate a negative number as true', () => {
    expect(isTruthy(-42)).toBe(true);
});

test('should validate NaN as false', () => {
    expect(isTruthy(NaN)).toBe(false);
});

test('should validate zero as false', () => {
    expect(isTruthy(0)).toBe(false);
});

test('should validate minus zero as false', () => {
    expect(isTruthy(-0)).toBe(false);
});

test('should validate BigInt zero as false', () => {
    expect(isTruthy(0)).toBe(false);
});

test('should validate a decimal as true', () => {
    expect(isTruthy(3.14)).toBe(true);
});

test('should validate a negative decimal as true', () => {
    expect(isTruthy(3.14)).toBe(true);
});

test('should validate Infinity as true', () => {
    expect(isTruthy(Infinity)).toBe(true);
});

test('should validate negative Infinity as true', () => {
    expect(isTruthy(Infinity)).toBe(true);
});
