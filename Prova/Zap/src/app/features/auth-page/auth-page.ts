import { Component } from '@angular/core';
import { AuthApi } from '../../domain/auth.api';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ilogin, Isubscribe } from '../../domain/iuser';
import { HeaderC } from "../../shared/componentes/header-c/header-c";

@Component({
  selector: 'app-auth-page',
  imports: [HeaderC,ReactiveFormsModule],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.css',
})
export class AuthPage {
  constructor(
    private api: AuthApi,
    private router: Router
  ) { }
  protected isSubscribe: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  SubscribeForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
    
  })
  get Email() {
    return this.loginForm.get("email")
  }
  get Password() {
    return this.loginForm.get("password")
  }

  get username() {
    return this.SubscribeForm.get("username")
  }
  get email() {
    return this.SubscribeForm.get("email")
  }
  get phone() {
    return this.SubscribeForm.get("phone")
  }
  get birthday() {
    return this.SubscribeForm.get("birthday")
  }
    get password() {
    return this.SubscribeForm.get("password")
  }

  formAction = () => {
    if (this.isSubscribe)
      return this.subscribe();
    return this.login();
  }
  login = () => {
    if (!this.loginForm.valid) {
      alert("Campos validos!");
      return
    }
    const data: Ilogin = {
      password: this.Password?.value,
      email: this.Email?.value
    }

    this.api.login(data).subscribe(
      res => {
        sessionStorage.setItem("token", res);
        this.router.navigate(['']);
      }
    );

  }
  subscribe = () => {
     if (!this.SubscribeForm.valid) {
      alert("Campos validos!");
      return
    }
    const datas: Isubscribe = {
      username: this.username?.value,
      email: this.Email?.value,
      phone: this.phone?.value,
      birthday: this.birthday?.value,
      password: this.password?.value,
    }

    this.api.subscribe(datas).subscribe(
      res => {
        sessionStorage.setItem("token", res);
        this.router.navigate(['']);
      }
    );
  }

}
