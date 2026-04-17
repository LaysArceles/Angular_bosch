import { Component, input } from '@angular/core';
import { ButtonC } from './button-c/button-c';
import { InputC } from './input-c/input-c';
import { HeaderC } from '../../shared/componentes/header-c/header-c';

@Component({
  selector: 'app-chat-page',
  imports: [ButtonC, InputC, HeaderC],
  templateUrl: './chat-page.html',
  styleUrl: './chat-page.css',
})
export class ChatPage {}
