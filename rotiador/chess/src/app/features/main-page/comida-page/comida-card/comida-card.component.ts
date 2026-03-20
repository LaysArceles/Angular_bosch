import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Festfood } from '../Comida.mock';
@Component({
  selector: 'app-comida-card',
  templateUrl: './comida-card.component.html',
  styleUrls: ['./comida-card.component.css']
})
export class ComidaCardComponent {
 @Input()
  food!: Festfood
}
