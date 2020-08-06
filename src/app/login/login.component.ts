import { Component, OnInit } from '@angular/core';
import {userService} from "../servicios/user.service";
import {userInterface} from "../models/userInterface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{


  constructor(private userService: userService) { }

  private user: userInterface = {
    username: '', 
    password: ''
  };

  onLogin(){
    return this.userService.loginUser(this.user.username,this.user.password)
    .subscribe(data => {
      this.userService.setUser(data.user)
      console.log(data);
    },
    error => console.log(error)
    );
  }
  

  ngOnInit(): void {
  }

  enviarInicio(){
    window.location.href = "http://localhost:4200/home";
  }

  enviarRegistro(){
    window.location.href = "http://localhost:4200/registro";
  }

}
