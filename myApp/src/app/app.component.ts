import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  count = 0;
  caixinha = "";

  digitando = ( textinho = " ") => {
    this.caixinha = textinho
     console.log(this.caixinha);
  }

  foiClicado= () =>{
    this.count ++;
    console.log("aaaaaa");
  }
}
