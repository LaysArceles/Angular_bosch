import { Injectable } from '@angular/core';
import { Api } from './api';
import { IPixels } from './pixelsinterfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Pixels extends Api {

  public GetAll = ():Observable<IPixels[]>=>{
    return this.client.get<IPixels[]>(`${this.URL}/pixel`).pipe();
  }
  public UpdatePixel = (data:IPixels):Observable<void>=>{
    return this.client.post<void>(`${this.URL}/subscribe`,data).pipe();
  }
  

}
