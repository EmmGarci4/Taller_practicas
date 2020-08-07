import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

import {FormsModule}from '@angular/forms';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { GuardPublicService } from './servicios/guard-public/guard-public.service';
import { GuardPrivateService } from './servicios/guard-private/guard-private.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    WelcomeUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GuardPublicService,GuardPrivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
