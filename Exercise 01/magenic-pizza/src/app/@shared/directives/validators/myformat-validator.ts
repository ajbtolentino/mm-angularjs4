import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';

export function myFormatValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const test = nameRe.test(control.value);
      return test ? {'formatValidatorPattern' : { value: control.value }} : null;
    }
}
