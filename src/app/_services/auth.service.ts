import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../_interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = environment.apiUrl;
  private currentAuthSource = new BehaviorSubject<Auth | null>(null);
  currentAuth$ = this.currentAuthSource.asObservable();

  constructor(private http: HttpClient) {
  }

  login(model: any) {
    return this.http.post<Auth>(`${this.baseUrl}/auth/login`, model).pipe(
      map((auth: Auth) => {
        if (auth) {
          this.setCurrentAuth(auth);
        }
      })
    )
  }

  setCurrentAuth(auth: Auth) {
    localStorage.setItem('auth', JSON.stringify(auth));
    this.currentAuthSource.next(auth);
  }
}
