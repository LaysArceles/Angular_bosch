import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-c',
  imports: [],
  templateUrl: './button-c.html',
  styleUrl: './button-c.css',
})
export class ButtonC {
  @Input() title: string = "";
  @Output() Onclick : EventEmitter<void> = new EventEmitter();
  clicked = () =>{
    this.Onclick.emit();
  }

}
