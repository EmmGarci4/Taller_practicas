import { Component, OnInit } from '@angular/core';
import {userService} from "../servicios/user.service";
import {userInterface} from "../models/userInterface";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
      console.log('data',data)
      this.userService.setUser(data)
      this.userService.setToken(data.token);
      this.router.navigate(['/welcome'])
    },
    error => {
      Swal.fire({
        title: 'Error',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
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

   cerrarSesion(){
     this.userService.clearUser();
   }

}
