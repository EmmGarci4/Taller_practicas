import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { userService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class GuardPublicService implements CanActivate{

  constructor(
    private userService:userService,
    private router:Router
  ) { }


  canActivate(){
    if(this.userService.isAuth()){
      this.router.navigate(['/welcome'])
      return false;
    }
    return true;
  }

}
