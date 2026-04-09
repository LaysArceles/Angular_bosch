import { Routes } from '@angular/router';
import LoginComponent from './features/login-page/login-card/login-card.component'
import MainPage from './features/main-page/main-page'

export const routes: Routes = [
    {path: "", component: LoginComponent},
    {path: "home", component: MainPage}
];
