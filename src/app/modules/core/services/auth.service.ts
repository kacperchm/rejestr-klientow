import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { GetUsersResponse, User, UserLoginData } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  user = new BehaviorSubject<User | null>(null);

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login(userData: UserLoginData): Observable<User[]> {
    return this.http.get<GetUsersResponse[]>(`${this.apiUrl}/users`).pipe(
      map((userArr) =>
        userArr.filter(
          (user) =>
            user.username === userData.username &&
            user.password === userData.password,
        ),
      ),
      map((userArr) =>
        userArr.map((user) => new User(user.email, user.username)),
      ),
    );
  }
}
