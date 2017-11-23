import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';
import { myFormatValidator } from './myformat-validator';

@Directive({
  selector: '[appInputValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: InputValidatorDirective,
    multi: true
  }],
  host: {
    '(keypress)': 'keypress($event)',
  }
})

export class InputValidatorDirective implements Validator {
  @Input() pattern;

  constructor(private el: ElementRef) { }

  validate(control: AbstractControl): ValidationErrors {
    return this.pattern ? myFormatValidator(new RegExp(this.pattern, 'i'))(control) : null;
  }

  keypress($event) {
    if (this.pattern) {
      var regex = this.pattern;
      const test = regex.test(this.el.nativeElement.value + $event.key);

      console.log(test);
    }
  }
}
