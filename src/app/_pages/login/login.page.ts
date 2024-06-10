import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styles: '',
})
export class LoginPage implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  errorMessage: string = '';
  isAlertOpen = false;
  alertButtons = ['Confirmar'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (result) => {
        this.errorMessage = result.error;
        this.setOpen(true)
      },
    });
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
