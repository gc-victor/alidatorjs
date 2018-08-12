import { validator } from './packages/validator/validator';
import { isFalsy } from './packages/is-falsy/is-falsy';
import { isTruthy } from './packages/is-truthy/is-truthy';

const validation = value => validator([isFalsy(value), isTruthy(value)]);

[
    validator([
        isFalsy(false),
        isFalsy(null),
        isFalsy(undefined),
        isFalsy(0),
        isFalsy(NaN),
        isFalsy(''),
    ]).every, // true
    validator([
        isTruthy(true),
        isTruthy({}),
        isTruthy([]),
        isTruthy('foo'),
        isTruthy(new Date()),
        isTruthy(42),
        isTruthy(-42),
        isTruthy(3.14),
        isTruthy(-3.14),
        isTruthy(Infinity),
        isTruthy(-Infinity),
    ]).every, // true
    validator([[isFalsy(false), () => 'message']]).errors, // []
    validator([
        [isFalsy(false), () => 'message'],
        [isFalsy(true), () => false],
        [isFalsy('tralala'), () => 'tralala'],
        [isFalsy(0), () => 'message'],
        [isFalsy(NaN), () => 'message'],
    ]).errors, // [false, 'tralala']
    validator([[isFalsy(1), () => "The value 1 isn't falsy"]]).errors, // ['The value 1 isn't falsy']
    validation(true).every, // false
    validation(true).some, // true
].forEach(is => console.log(is));
