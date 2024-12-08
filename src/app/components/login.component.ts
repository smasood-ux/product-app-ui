import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IAccount, LoginStatus } from '../model/account';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup = new FormGroup({});
  formSubmitted = false;
  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    console.log('In Login');

    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.formSubmitted = false;
  }

  get userNameField() {
    return this.loginForm.get('userName');
  }

  get passwordField() {
    return this.loginForm.get('password');
  }

  login() {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      //valiate userName and Password
      const account: IAccount = {
        userId: 1,
        userName: this.userNameField?.value,
        status: LoginStatus.loggedIn
      }
      this.auth.setLoginUser(account);
      console.log('USer is logged in');
      this.router.navigate(['products']);
    } else {
      console.log('Cannot login, Errors!!!');
    }
  }
}
