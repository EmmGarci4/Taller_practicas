import { Component, OnInit } from '@angular/core';
import { userService } from '../servicios/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.css']
})
export class WelcomeUserComponent implements OnInit {
  nameUser:string;
  constructor(
    private userService:userService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.nameUser = '';
    this.nameUser = this.userService.getNameUser();
  }

  cerrarSesion(){
    this.userService.clearUser()
    this.router.navigate(['/home'])
  }

}
