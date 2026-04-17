import { Injectable } from '@angular/core';
import { Api } from './api';
import { Ilogin, Isubscribe } from './iuser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthApi  extends Api{
 login = (data: Ilogin) :Observable<string> =>{
  return this.client.post<string> (`${this.URl}/auth/login`, data).pipe();
 }

 subscribe = (data:Isubscribe) :Observable<string> =>{
  return this.client.post<string> (`${this.URl}/auth/subcribe`, data).pipe();
 }

}
