import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordMatcher {
  static passwordDoesntMatch(form: AbstractControl): ValidationErrors {
    const confirmPasswordControl = form
      ? form.get('passwordConfirm')
      : { value: '' };
    const originalPassword = form ? form.get('password') : { value: '' };
    return originalPassword.value !== confirmPasswordControl.value
      ? { passwordDoesntMatch: true }
      : null;
  }
}
