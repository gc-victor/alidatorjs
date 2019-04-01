interface Validations {
    errors?: Array<any>;
    successes?: Array<any>;
    every?: boolean;
    some?: boolean;
}

export declare function validator(validators: Array<any>): Validations;