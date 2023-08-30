import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  constructor() {}

  getErrorMessage(control: FormControl) {
    if (control.hasError('required')) {
      return 'Musisz wpisać jakąś wartość.';
    }

    if (control.hasError('minlength')) {
      return 'Przekazałeś za mało znaków.';
    }

    if (control.hasError('maxlength')) {
      return 'Przekazałeś za dużo znaków.';
    }

    return control.hasError('email') ? 'Nieprawidłowy adres e-mail.' : '';
  }
}
