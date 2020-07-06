const { expect, test } = require('t-t');
const { isGreaterThan } = require('./is-greater-than');

test("should validate the first parameter isn't greater then second", () => {
    expect(isGreaterThan(0, 1)).toBe(false);
});

test('should validate the first parameter is greater then second', () => {
    expect(isGreaterThan(2, 1)).toBe(true);
});
