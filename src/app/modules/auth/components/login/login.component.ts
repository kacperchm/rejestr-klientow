import { Component } from '@angular/core';
import { User, UserLoginData } from '../../../core/models/user.model';
import { AuthService } from '../../../core/services/auth.service';
import { error } from '@angular/compiler-cli/src/transformers/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  userData: UserLoginData = {
    username: '',
    password: '',
  };

  errorMessage = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.userData).subscribe({
      next: (value) => {
        if (value.length === 0) {
          this.errorMessage = 'Podano złe dane do logowania.';
        }
      },
      error: (err) => {
        this.errorMessage = 'Wystąpił błąd.';
        console.log(this.errorMessage);
      },
    });
  }

  private handleAuthentication(userArr: User[]) {
    if (userArr.length === 0) {
      return;
    }

    const user: User = userArr[0];
  }
}
