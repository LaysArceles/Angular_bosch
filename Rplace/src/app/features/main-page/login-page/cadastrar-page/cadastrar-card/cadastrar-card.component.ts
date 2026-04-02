import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cadastrar-card',
  templateUrl: './cadastrar-card.component.html',
  styleUrls: ['./cadastrar-card.component.css']
})
export class CadastrarCardComponent {
  @Input()
  Value: String= "";

  @Output()
  send: EventEmitter<string> = new EventEmitter();

  EnviarNome = (name: any)=>{
    const nameString = name.scrElement?.value;
    this.send.emit(nameString)
  }
}
