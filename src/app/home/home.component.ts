import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  enviarLogin(){
    this.router.navigate(['/login'])
    //window.location.href = "http://localhost:4200/login";
  }

  enviarRegistro(){
    this.router.navigate(['/registro'])
    //window.location.href = "http://localhost:4200/registro";
  }
}
