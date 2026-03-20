import { Component } from '@angular/core';
import MockMarket, { Imarket } from './mercado.mock';

@Component({
  selector: 'app-mercado-page',
  templateUrl: './mercado-page.component.html',
  styleUrls: ['./mercado-page.component.css']
})
export class MercadoPageComponent {
    protected market:Imarket[]=[]
  constructor (){
    this.market = MockMarket;
  }
  
}
