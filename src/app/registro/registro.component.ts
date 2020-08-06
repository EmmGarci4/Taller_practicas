import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enviarInicio(){
    window.location.href = "http://localhost:4200/home";
  }

  enviarLogin(){
    window.location.href = "http://localhost:4200/login";
  }
}
