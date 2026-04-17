import { Routes } from '@angular/router';
import LoginComponent from './features/login-page/login-card/login-card.component'
import MainPage from './features/main-page/main-page'
import { authGuard } from './domain/auth-guard-guard';

import { RoomPage } from './features/room-page/room-page';
import { EspecificRoomPage } from './features/room-page/especific-room/especific-room';

export const routes: Routes = [
    { path: "login", component: LoginComponent, canMatch: [authGuard] },
    { path: "", component: MainPage, canMatch: [authGuard] },
    {
        path: "room", component: RoomPage, canMatch: [authGuard], children: [
            { path: ":id", component: EspecificRoomPage }
        ]
    },
];
