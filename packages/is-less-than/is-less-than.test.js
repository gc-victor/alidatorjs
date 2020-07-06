const { expect, test } = require('t-t');
const { isLessThan } = require('./is-less-than');

test("should validate the first parameter isn't greater then second", () => {
    expect(isLessThan(1, 0)).toBe(false);
});

test('should validate the first parameter is greater then second', () => {
    expect(isLessThan(1, 2)).toBe(true);
});
