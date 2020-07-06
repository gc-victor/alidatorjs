const { expect, test } = require('t-t');
const { isFalsy } = require('./is-falsy');

// @see: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
test('should validate a false as true', () => {
    expect(isFalsy(false)).toBe(true);
});

test('should validate a null as true', () => {
    expect(isFalsy(null)).toBe(true);
});

test('should validate a undefined as true', () => {
    expect(isFalsy(undefined)).toBe(true);
});

test('should validate a true as false', () => {
    expect(isFalsy(true)).toBe(false);
});

test('should validate an object as false', () => {
    expect(isFalsy({})).toBe(false);
});

test('should validate an array as false', () => {
    expect(isFalsy([])).toBe(false);
});

test('should validate an none empty string as false', () => {
    expect(isFalsy('foo')).toBe(false);
});

test('should validate an empty string as true', () => {
    expect(isFalsy('')).toBe(true);
});

test('should validate a number as false', () => {
    expect(isFalsy(42)).toBe(false);
});

test('should validate a negative number as false', () => {
    expect(isFalsy(-42)).toBe(false);
});

test('should validate NaN as true', () => {
    expect(isFalsy(NaN)).toBe(true);
});

test('should validate zero as true', () => {
    expect(isFalsy(0)).toBe(true);
});

test('should validate minus zero as true', () => {
    expect(isFalsy(-0)).toBe(true);
});

test('should validate BigInt zero as true', () => {
    expect(isFalsy(0)).toBe(true);
});

test('should validate a decimal as false', () => {
    expect(isFalsy(3.14)).toBe(false);
});

test('should validate a negative decimal as true', () => {
    expect(isFalsy(3.14)).toBe(false);
});

test('should validate Infinity as true', () => {
    expect(isFalsy(Infinity)).toBe(false);
});

test('should validate negative Infinity as true', () => {
    expect(isFalsy(Infinity)).toBe(false);
});
