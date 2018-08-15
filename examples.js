import { isFalsy } from './packages/is-falsy/is-falsy';
import { isTruthy } from './packages/is-truthy/is-truthy';
import { validator } from './packages/validator/validator';

const validation = value => validator([isFalsy(value), isTruthy(value)]);
const classNames = (...args) => validator(args).successes;
const className = name => () => name;

[
    validator([
        isFalsy(false),
        isFalsy(null),
        isFalsy(undefined),
        isFalsy(0),
        isFalsy(NaN),
        isFalsy(''),
    ]).every,
    // true

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
    ]).every,
    // true

    validator([[isFalsy(false), () => 'message']]).errors,
    // []

    validator([
        [isFalsy(false), () => 'message'],
        [isFalsy(true), () => false],
        [isFalsy('tralala'), () => 'tralala'],
        [isFalsy(0), () => 'message'],
        [isFalsy(NaN), () => 'message'],
    ]).errors,
    // [false, 'tralala']

    validator([[isFalsy(1), () => 'The value 1 isn\'t falsy']]).errors,
    // ['The value 1 isn't falsy']

    validation(true).every,
    // false

    validation(true).some,
    // true

    validator([
        [true, () => 'Success 1'],
        [false, () => {}],
        [true, () => 'Success 2'],
        [false, () => {}],
    ]).successes,
    // ['Success 1', 'Success 2']

    classNames(
        [true, className('class-name-1')],
        [false, className('class-name-2')],
        [true, className('class-name-3')],
        [false, className('class-name-4')]
    ).join(' '),
    // ['.class-name-1', '.class-name-3']
].forEach(is => console.log(is));
