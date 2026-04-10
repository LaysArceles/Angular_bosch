import { Component} from '@angular/core';
import { AuthApi} from '../../../domain/auth.api';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { loginDto } from '../../../domain/userInterfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-card',
  imports: [ReactiveFormsModule],
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
class LoginComponent {

 constructor(private api : AuthApi, 
  private router:Router
 ){}

  loginForm : FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  get Username() {
    return this.loginForm.get("username")
  }
  get Password() {
    return this.loginForm.get("password")
  }

  login = () => {
    if(!this.loginForm.valid)
    {
      alert("Nem todos os campos são validos!");
      return
    }
    const data: loginDto = {
      password: this.Password?.value,
      username: this.Username?.value
    }

    this.api.login(data).subscribe(
      res => {
        console.log(res)
        sessionStorage.setItem("token", res);
        // location.reload();
      }
    );
  }

  subscribe = () => {
    if(!this.loginForm.valid)
    {
      alert("Nem todos os campos são validos!");
      return
    }
  }
}
export default LoginComponent
