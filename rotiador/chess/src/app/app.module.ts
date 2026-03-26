import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { MainPageComponent } from './features/main-page/main-page.component';
import { NotFoundPageComponent } from './features/not-found-page/not-found-page.component';
import { HeaderComponent } from './shared/header/header.component';

import { NavComponent } from './shared/nav/nav.component';
import { MercadoPageComponent } from './features/main-page/mercado-page/mercado-page.component';
import { ComidaPageComponent } from './features/main-page/comida-page/comida-page.component';
import { ComidadetailsmodalComponent } from './features/main-page/comida-page/comidadetailsmodal/comidadetailsmodal.component';
import { MercadodetailsmodalComponent } from './features/main-page/mercado-page/mercadodetailsmodal/mercadodetailsmodal.component';
import { CardComponent } from './shared/card/card.component';
import { ComidaCardComponent } from './features/main-page/comida-page/comida-card/comida-card.component';
import { LoginCardComponent } from './features/login-page/main-login-page/login-card/login-card.component';
import { LoginDetailsModalComponent } from './features/login-page/main-login-page/login-details-modal/login-details-modal.component';
import { CadastrarPageComponent } from './features/login-page/cadastrar-page/cadastrar-page.component';
import { MainLoginPageComponent } from './features/login-page/main-login-page/main-login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    NavComponent,
    MercadoPageComponent,
    ComidaPageComponent,
    ComidadetailsmodalComponent,
    MercadodetailsmodalComponent,
    CardComponent,
    ComidaCardComponent,
    LoginCardComponent,
    LoginDetailsModalComponent,
    CadastrarPageComponent,
    MainLoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
