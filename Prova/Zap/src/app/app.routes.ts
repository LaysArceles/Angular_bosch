import { Routes } from '@angular/router';
import { AuthPage } from './features/auth-page/auth-page';
import { ChatPage } from './features/chat-page/chat-page';
import { PhonePage } from './features/phone-page/phone-page';

export const routes: Routes = [
    {path:"", component: AuthPage},
    {path:"chat",component:ChatPage},
    {path:"contacts",component:PhonePage}
];
