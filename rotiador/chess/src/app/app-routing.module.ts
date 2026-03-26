import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './features/main-page/main-page.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { NotFoundPageComponent } from './features/not-found-page/not-found-page.component';
import { MercadoPageComponent } from './features/main-page/mercado-page/mercado-page.component';
import { ComidaPageComponent } from './features/main-page/comida-page/comida-page.component';
import { LoginCardComponent } from './features/login-page/main-login-page/login-card/login-card.component';
import { CadastrarPageComponent } from './features/login-page/cadastrar-page/cadastrar-page.component';

const routes: Routes = [
  {path: "",component:MainPageComponent, children:[
    {path:"mercado",component:MercadoPageComponent},
    {path:"comida", component:ComidaPageComponent}
  ]},
  {path: "home",component:LoginPageComponent,
    children:[
      {path:"login", component:LoginCardComponent},
      {path:"Cadastrar",component:CadastrarPageComponent}
    ]
  },
  {path: "**",component:NotFoundPageComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
