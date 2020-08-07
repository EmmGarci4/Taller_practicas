import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { GuardPrivateService } from "./servicios/guard-private/guard-private.service";
import { GuardPublicService } from "./servicios/guard-public/guard-public.service";

const routes: Routes = [
  { path: "home", component: HomeComponent,canActivate:[GuardPublicService]},
  { path: "login", component: LoginComponent,canActivate:[GuardPublicService]},
  { path: "registro", component: RegistroComponent,canActivate:[GuardPublicService]},
  { path: "welcome", component: WelcomeUserComponent,canActivate:[GuardPrivateService]},
  { path: "**", pathMatch: "full", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
