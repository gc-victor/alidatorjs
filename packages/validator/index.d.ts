interface Validations {
    errors?: Array<any>;
    success?: Array<any>;
    every?: boolean;
    some?: boolean;
}

export declare function validator(validators: Array<any>): Validations;