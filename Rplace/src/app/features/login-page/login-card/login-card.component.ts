import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
class LoginComponent {

  @Input()
  Value: String= "";

  @Output()
  send: EventEmitter<string> = new EventEmitter();

  EnviarNome = (name: any)=>{
    const nameString = name.scrElement?.value;
    this.send.emit(nameString)
  }
}
export default LoginComponent
