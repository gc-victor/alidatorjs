# Alidator.js

Tiny modular validator.

## Packages

Alidator.js is comprised of many specialized packages. This repository contains all these packages, e.g., the npm package `@alidatorjs/validator` lives in the directory `packages/validator`. Below you will find a summary of each package.

| Package | Version | Dependencies | DevDependencies |
|--------|-------|------------|----------|
| [validator](https://github.com/gc-victor/alidatorjs/blob/master/packages/validator) | [![npm](https://img.shields.io/npm/v/@alidatorjs/validator.svg)](http://npm.im/@alidatorjs/validator) | [![dependencies Status](https://david-dm.org/gc-victor/alidatorjs/status.svg?path=packages/validator)](https://david-dm.org/gc-victor/alidatorjs?path=packages/validator) | [![devDependencies Status](https://david-dm.org/gc-victor/alidatorjs/dev-status.svg?path=packages/validator)](https://david-dm.org/gc-victor/alidatorjs?path=packages/validator&type=dev) |
| [is-falsy](https://github.com/gc-victor/alidatorjs/blob/master/packages/is-falsy) | [![npm](https://img.shields.io/npm/v/@alidatorjs/is-falsy.svg)](http://npm.im/@alidatorjs/is-falsy) | [![dependencies Status](https://david-dm.org/gc-victor/alidatorjs/status.svg?path=packages/is-falsy)](https://david-dm.org/gc-victor/alidatorjs?path=packages/is-falsy) | [![devDependencies Status](https://david-dm.org/gc-victor/alidatorjs/dev-status.svg?path=packages/is-falsy)](https://david-dm.org/gc-victor/alidatorjs?path=packages/is-falsy&type=dev) |
| [is-greater-than](https://github.com/gc-victor/alidatorjs/blob/master/packages/is-greater-than) | [![npm](https://img.shields.io/npm/v/@alidatorjs/is-greater-than.svg)](http://npm.im/@alidatorjs/is-greater-than) | [![dependencies Status](https://david-dm.org/gc-victor/alidatorjs/status.svg?path=packages/is-greater-than)](https://david-dm.org/gc-victor/alidatorjs?path=packages/is-greater-than) | [![devDependencies Status](https://david-dm.org/gc-victor/alidatorjs/dev-status.svg?path=packages/is-greater-than)](https://david-dm.org/gc-victor/alidatorjs?path=packages/is-greater-than&type=dev) |
| [is-less-than](https://github.com/gc-victor/alidatorjs/blob/master/packages/is-less-than) | [![npm](https://img.shields.io/npm/v/@alidatorjs/is-less-than.svg)](http://npm.im/@alidatorjs/is-less-than) | [![dependencies Status](https://david-dm.org/gc-victor/alidatorjs/status.svg?path=packages/is-less-than)](https://david-dm.org/gc-victor/alidatorjs?path=packages/is-less-than) | [![devDependencies Status](https://david-dm.org/gc-victor/alidatorjs/dev-status.svg?path=packages/is-less-than)](https://david-dm.org/gc-victor/alidatorjs?path=packages/is-less-than&type=dev) |
| [is-truthy](https://github.com/gc-victor/alidatorjs/blob/master/packages/is-truthy) | [![npm](https://img.shields.io/npm/v/@alidatorjs/is-truthy.svg)](http://npm.im/@alidatorjs/is-truthy) | [![dependencies Status](https://david-dm.org/gc-victor/alidatorjs/status.svg?path=packages/is-truthy)](https://david-dm.org/gc-victor/alidatorjs?path=packages/is-truthy) | [![devDependencies Status](https://david-dm.org/gc-victor/alidatorjs/dev-status.svg?path=packages/is-truthy)](https://david-dm.org/gc-victor/alidatorjs?path=packages/is-truthy&type=dev) |

## Compatible Versioning

### Summary

Given a version number MAJOR.MINOR, increment the:

- MAJOR version when you make backwards-incompatible updates of any kind
- MINOR version when you make 100% backwards-compatible updates

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR format.

[![ComVer](https://img.shields.io/badge/ComVer-compliant-brightgreen.svg)](https://github.com/staltz/comver)

## Contribute

First off, thanks for taking the time to contribute!
Now, take a moment to be sure your contributions make sense to everyone else.

### Reporting Issues

Found a problem? Want a new feature? First of all, see if your issue or idea has [already been reported](../../issues).
If it hasn't, just open a [new clear and descriptive issue](../../issues/new).

### Submitting pull requests

Pull requests are the greatest contributions, so be sure they are focused in scope and do avoid unrelated commits.

-   Fork it!
-   Clone your fork: `git clone https://github.com/<your-username>/alidatorjs`
-   Navigate to the newly cloned directory: `cd alidatorjs`
-   Create a new branch for the new feature: `git checkout -b my-new-feature`
-   Install the tools necessary for development: `npm install`
-   Make your changes.
-   `npm run build` to verify your change doesn't increase output size.
-   `npm test` to make sure your change doesn't break anything.
-   Commit your changes: `git commit -am 'Add some feature'`
-   Push to the branch: `git push origin my-new-feature`
-   Submit a pull request with full remarks documenting your changes.

## License

[MIT License](https://github.com/gc-victor/alidatorjs/blob/master/LICENSE.md)
