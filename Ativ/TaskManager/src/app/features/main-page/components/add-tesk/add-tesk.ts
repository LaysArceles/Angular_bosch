import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input,Output,signal} from '@angular/core';

@Component({
  selector: 'app-add-tesk',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './add-tesk.html',
  styleUrl: './add-tesk.css',
})
export class AddTesk {
   

  tesks = signal<string[]>([]);

  

  addTesk(newTesk:string){
    if (newTesk.trim()){
      this.tesks.update((lista: string[]) => [...lista, newTesk]);
      // this.teskAdicionada.emit(newTesk); // envia para o pai
    }
  }
}