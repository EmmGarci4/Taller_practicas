import { Component, OnInit } from '@angular/core';
import {userService} from "../servicios/user.service";
import {userInterface} from "../models/userInterface";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private userService: userService) { }

   private User: userInterface={
      name: "",
     username: "",
     password: ""
   }

  ngOnInit(){
  }

  enviarInicio(){
    window.location.href = "http://localhost:4200/home";
  }

  enviarLogin(){
    window.location.href = "http://localhost:4200/login";
  }

  onRegister(): void{
    this.userService.registerUser(
        this.User.name, this.User.username,this.User.password
    ).subscribe(User => {console.log(User);
    });
  }

 
}
