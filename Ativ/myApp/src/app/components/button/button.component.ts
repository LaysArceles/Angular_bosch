import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  isClicked:boolean = false;
  // @Output("Onclick")
  // onclick:EventEmitter<void> = new EventEmitter();
  @Output()
  onclick:EventEmitter<void> = new EventEmitter();
  
  @Input()
  label: string = "";
 
  clicked = ()=>{
    this.onclick.emit();
    this.isClicked = !this.isClicked;
  } 
  
}
