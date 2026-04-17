import { Injectable } from '@angular/core';
import { Api } from './api';
import { IPixel } from '../features/main-page/pixel/IPixel';
import { CanvasAction, MessageType, WebSocketMessage } from "./interfaces/room"
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomApi extends Api {
    // criação de um novo domintio novo http
    private wsURL = 'ws://10.234.197.18:5294/api/room'
    private socket!: WebSocket;
    private _pixelSubject = new Subject<CanvasAction>();

    public pixelsObservable : Observable<CanvasAction> = this._pixelSubject.asObservable();

    public connect =(roomid:string) =>{
      const token = sessionStorage.getItem('token')
      if(token)
        return;
      
      this.socket =new WebSocket(`${this.wsURL}/${roomid}?token =${encodeURIComponent}`)

      this.socket.onopen =(event)=>{
        console.log("conexão ")
      }
      this.socket.onmessage = (event:MessageEvent)=>{

        const message:WebSocketMessage<any> = JSON.parse(event.data)
        switch(message.Type){
          case MessageType.Message:
            break;
            
          case MessageType.FirstConnection:
            this._pixelSubject.next({type:'FULL_LOAD',payload:message.Data});
            break;
            
          case MessageType.PlayerAction:
            this._pixelSubject.next({type:"SINGLE_LOAD",payload: message.Data});
            break;
          default:
          break;
        }

      }
      this.socket.onerror = (err)=>{
        console.error("Erro ao conectar no scket:", err)
      }
      this.socket.onclose = () =>{
        console.log("Conexão encerrada!")
      }
    }
    public closeConnection = () =>{
      if(this.socket)
        this.socket.close();
      
    }
    // tranformar em jwt
    public updatePixel =(data:IPixel)=>{
      if(this.socket.readyState === WebSocket.OPEN){
        this.socket.send(JSON.stringify(data));
      }
      else{
        console.log("Websocket nao conectado")
      }
    }
}

