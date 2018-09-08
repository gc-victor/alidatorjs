export function validator(validators) {
    return {
        get every() {
            return validators.every(Boolean);
        },

        get some() {
            return validators.some(Boolean);
        },

        get errors() {
            return validators.reduce((acc, cur) => (cur[0] ? acc : acc.concat(cur[1]())), []);
        },

        get successes() {
            return validators.reduce((acc, cur) => (cur[0] ? acc.concat(cur[1]()) : acc), []);
        },
    };
}
