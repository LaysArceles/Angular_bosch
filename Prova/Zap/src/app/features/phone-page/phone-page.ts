import { Component } from '@angular/core';
import { HeaderC } from "../../shared/componentes/header-c/header-c";
import { ButtonC } from "../../shared/componentes/button-c/button-c";
import { ContactC } from "../../shared/componentes/contact-c/contact-c";
import { ContactsApi } from '../../domain/contacts.api';

@Component({
  selector: 'app-phone-page',
  imports: [HeaderC, ButtonC, ContactC],
  templateUrl: './phone-page.html',
  styleUrl: './phone-page.css',
})
export class PhonePage {
constructor(
    private api: ContactsApi
  ){}
   protected lists= [];

  Datacont(list:lists){

    list.push(this.api.GetAllContacts)

  }
}
