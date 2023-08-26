import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hide = true;

  registerForm = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onRegister() {
    console.log(this.registerForm.value);
  }
}
