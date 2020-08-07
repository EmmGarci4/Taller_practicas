import { Component, OnInit } from '@angular/core';
import { userService } from '../servicios/user.service';

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.css']
})
export class WelcomeUserComponent implements OnInit {
  nameUser:string;
  constructor(
    private userService:userService
  ) { }

  ngOnInit(): void {
    this.nameUser = '';
    this.nameUser = this.userService.getNameUser();
  }

}
