import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Festfood } from '../Comida.mock';

@Component({
  selector: 'app-comidadetailsmodal',
  templateUrl: './comidadetailsmodal.component.html',
  styleUrls: ['./comidadetailsmodal.component.css']
})
export class ComidadetailsmodalComponent {
  @Input()
  item?: Festfood

  @Output()
  onClose: EventEmitter<void> = new EventEmitter();

  toggleClose = () => {
    this.onClose.emit();
  }

}
