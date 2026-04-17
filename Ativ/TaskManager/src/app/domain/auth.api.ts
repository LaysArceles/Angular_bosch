import { Injectable } from '@angular/core';
import  ILogin  from './interface/iuser';
import Api from './api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

class AuthApi extends Api {
    login =(data:ILogin) : Observable<string> =>{
      return this.client.post<string>(`${this.URL}/auth/login`, data).pipe();
    }
    subcribe = (data:ILogin): Observable<void> =>{
      return this.client.post<void>(`${this.URL}/auth/subcribe`,data).pipe();
    }

}
export default AuthApi
