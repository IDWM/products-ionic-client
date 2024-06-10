import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { Auth } from './_interfaces/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.setCurrentAuth();
  }

  setCurrentAuth() {
    const authString = localStorage.getItem('auth');
    if (!authString) return;
    const auth: Auth = JSON.parse(authString);
    this.authService.setCurrentAuth(auth);
  }
}
