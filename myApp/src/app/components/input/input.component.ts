import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent { 
  @Output()
  sla: EventEmitter<String> = new EventEmitter

  @Input()
 segredo : string = "";

  segredinho = ()=>{
    this.sla.emit();
  } 
}
