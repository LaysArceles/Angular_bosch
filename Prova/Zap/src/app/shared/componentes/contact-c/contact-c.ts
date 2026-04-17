import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-contact-c',
  imports: [],
  templateUrl: './contact-c.html',
  styleUrl: './contact-c.css',
})
export class ContactC {
  
  @Input()
  data = signal<string[]>([]);
  @Output()
  onChange: EventEmitter<[string]> = new EventEmitter();

  addlist(newcontact:string){
    if (newcontact.trim()){
      this.data.update((lista: string[]) => [...lista, newcontact]);
    }
  }

}
