import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pixel } from './pixel/pixel';
import { Router } from '@angular/router';
import { Pixels } from '../../domain/pixels';
import is from '@angular/common/locales/extra/is';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule,Pixel],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
class MainPage {
  constructor(
    private router: Router,
    private api: Pixels
  ){}


  pixels: { color: string }[] = [];
  colors: string[] = [
    '#FF0000', // vermelho
    '#00FF00', // verde
    '#0000FF', // azul
    '#FFFF00', // amarelo
    '#FF00FF', // magenta
    '#00FFFF', // ciano
    '#000000', // preto
    '#FFFFFF', // branco
    '#FFA500', // laranja
    '#800080'  // roxo
  ];
  selectedColor: string = this.colors[0];
  

  paintPixel(index: number) {

    this.pixels[index].color = this.selectedColor;
  }
   selectColor(color: string) {
    this.selectedColor = color;
  }
  
  this.api.GetAll().subscribe(
      res => {
        console.log(res);
        for (let y = 0; y < 100; y++) {
          for(let x = 0; x < 100; x++ ) {
            let exists = res.find(p => p.x == x && p.y == y);
            console.log(exists);
            
            if(exists)
              this.pixels[x][y] = exists;
          }
        }
      }
    )

}
export default MainPage

