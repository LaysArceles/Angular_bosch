import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent {

  @Input()
  Value: String= "";

  @Output()
  send: EventEmitter<string> = new EventEmitter();

  EnviarNome = (name: any)=>{
    const nameString = name.scrElement?.value;
    this.send.emit(nameString)
  }
}
