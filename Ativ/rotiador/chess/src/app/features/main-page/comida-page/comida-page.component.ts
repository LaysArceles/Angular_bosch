import { Component } from '@angular/core';
import {Festfood, menu }from './Comida.mock';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css'],
  
})
export class ComidaPageComponent {

  protected menu:Festfood[]=[]
  protected festFood?:Festfood;

  constructor () {
    this.menu = menu;
  }

  onCardClick = (item:Festfood)=>{
    this.festFood = item;

  }
  
}
