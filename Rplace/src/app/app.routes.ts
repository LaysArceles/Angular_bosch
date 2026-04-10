import { Routes } from '@angular/router';
import LoginComponent from './features/login-page/login-card/login-card.component'
import MainPage from './features/main-page/main-page'
import { authGuardGuard } from './domain/auth-guard-guard';

export const routes: Routes = [
    {path: "", component: LoginComponent,
        canMatch:[authGuardGuard]},
    {path: "home", component: MainPage}
];
