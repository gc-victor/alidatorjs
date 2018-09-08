export function validator(validators) {
    return {
        get every() {
            return validators.every(Boolean);
        },

        get some() {
            return validators.some(Boolean);
        },

        get errors() {
            return validators.filter(arr => !arr[0]).map(arr => arr[1]());
        },

        get successes() {
            return validators.filter(arr => arr[0]).map(arr => arr[1]());
        },
    };
}
