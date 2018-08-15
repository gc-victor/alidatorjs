export function validator(validators) {
    return {
        get every() {
            return validators.every(condition => condition);
        },

        get some() {
            return validators.some(condition => condition);
        },

        get errors() {
            return validators.filter(arr => !arr[0]).map(arr => arr[1]());
        },

        get successes() {
            return validators.filter(arr => arr[0]).map(arr => arr[1]());
        },
    };
}
