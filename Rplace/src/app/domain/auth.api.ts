import { Injectable } from '@angular/core';
import{Api} from './api'
import { loginDto } from './userInterfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthApi extends Api {
  login = (data:loginDto):Observable<string>=>{
    return this.client.post<string>(`${this.URL}/auth/login`,data).pipe();
  }
   subscribe = (data:loginDto): Observable<void>=>{
    return this.client.post<void>(`${this.URL}/auth/subscribe`,data).pipe();
  }
  
}
