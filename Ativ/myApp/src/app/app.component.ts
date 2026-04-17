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
  
  nome = "Lays"

  digitando = (value: string) => {
    this.nome = value 
    
  }

  foiClicado= () =>{
    this.count ++;
    console.log("aaaaaa");
  }
}
