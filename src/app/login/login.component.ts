import { Component, OnInit } from '@angular/core';
import {userService} from "../servicios/user.service";
import {userInterface} from "../models/userInterface";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{


  constructor(private userService: userService,
              private router:Router) { }

  private user: userInterface = {
    username: "", 
    password: ""
  };

  onLogin(){
    return this.userService.loginUser(this.user.username,this.user.password)
    .subscribe(data => {
      this.userService.setUser(data)
      this.router.navigate(['/welcome'])
    },
    error => console.log(error)
    );
  }
  

  ngOnInit(): void {
  }

  enviarInicio(){
    this.router.navigate(['/login'])
  }

  enviarRegistro(){
    this.router.navigate(['/registro'])
  }

}
