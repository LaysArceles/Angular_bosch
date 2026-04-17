import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
class Api {
  //so as filhas podem acesar, ela é imudavel
  protected readonly URL: string = "http://"
  //Injeta o HttpClient no serviço/classe e Prepara a classe para fazer chamadas HTTP
  constructor(protected client: HttpClient){}
  
}
export default Api 
