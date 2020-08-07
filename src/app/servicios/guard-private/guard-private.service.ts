import { Injectable } from '@angular/core';
import { userService } from '../user.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardPrivateService implements CanActivate {

  constructor(
    private userService:userService,
    private router:Router
  ) { }

  canActivate(): boolean {
    if(this.userService.isAuth()){
        return true;
    }
    this.router.navigate(['/login'])
    return false;
  }
}
