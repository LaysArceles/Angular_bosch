import { Injectable } from '@angular/core';
import { Api } from './api';
import { IAddContactos, IChat, IReceiver } from './Interfaces/Icontacts';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root',
})
export class ContactsApi  extends Api {
   GetAllContacts =()=> {
  return this.client.get(`${this.URl}/contacts`).pipe();
 }
  AddContact =(data:IAddContactos) :Observable<string>=> {
  return this.client.post<string>(`${this.URl}/contacts`,data).pipe();
 }

  GetAllMessages =()=> {
  return this.client.get(`${this.URl}/messages`).pipe();
 }

  GetMessagesByChat =(data: IChat)=> {
  return this.client.get(`${this.URl}/messages/${data}`).pipe();
 }

 SendMessage =(data: IReceiver): Observable<string> => {
  return this.client.post<string>(`${this.URl}/messages`,data).pipe();
 }

}
