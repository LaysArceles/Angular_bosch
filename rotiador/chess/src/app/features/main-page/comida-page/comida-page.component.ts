import { Component } from '@angular/core';
import MockPesoas, { IPessoa } from './Pessoas.mock';
import MockFestfood, { Ifestfood } from './Comida.mock';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css'],
  
})
export class ComidaPageComponent {
  protected festFood:Ifestfood[]=[]
  constructor (){
    this.festFood = MockFestfood;
  }

  // protected pessoas: IPessoa[]=[]
  // constructor(){
  //   this.pessoas = MockPesoas;
  // }
}
