import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { PostUser } from '../../../core/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  errorMessage = '';

  registerForm = new FormGroup({
    email: new FormControl('', {
      validators: [
        Validators.email,
        Validators.minLength(5),
        Validators.maxLength(50),
      ],
      nonNullable: true,
    }),
    username: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    // hobbies: new FormArray([new FormControl('')]),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  get controls() {
    return this.registerForm.controls;
  }

  // get hobbies() {
  //   return this.registerForm.get('hobbies') as FormArray;
  // }
  //
  // addControl() {
  //   this.hobbies.push(new FormControl(''));
  // }
  //
  // removeControl(index: number) {
  //   this.hobbies.removeAt(index);
  // }

  ngOnInit(): void {
    /*this.registerForm.controls.email.valueChanges.subscribe((text) => {
      console.log(text);
    });*/
    console.log('');
    // this.registerForm.controls.email.disable();
    // this.controls.username.addValidators(Validators.minLength(5));
    // this.controls.username.setValidators(Validators.minLength(5));
  }

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

  onRegister() {
    const userData: PostUser = this.registerForm.getRawValue();
    this.authService.register(userData).subscribe({
      next: () => {
        this.router.navigate(['/logowanie']);
      },
      error: (err) => {
        this.errorMessage = 'Wystąpił błąd.';
      },
    });
    console.log(this.registerForm.value);
    // console.log(this.registerForm.getRawValue());
  }
}
