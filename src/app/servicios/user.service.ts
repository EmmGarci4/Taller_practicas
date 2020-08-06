import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import {userInterface} from "src/app/models/userInterface";

@Injectable({
  providedIn: 'root'
})
export class userService {


  constructor( private http: HttpClient) { }
  headers : HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  loginUser(username: string, password: string): Observable<any>{
    const url_login = 'https://taller-practicas.herokuapp.com/login';
      return this.http.post<userInterface>(
        url_login,{username,password},{headers:this.headers}
      ).pipe(map(data=>data));
  }

  registerUser(name: string, username: string, password: string){
    const url_register = 'https://taller-practicas.herokuapp.com/register';
    return this.http.post<userInterface>(url_register,{
      name: name,
      username : username,
      password:password
    },{
      headers: this.headers}
      ).pipe(map(data => data));
  }


 setUser(user: userInterface):void{
   let user_string = JSON.stringify(user);
   localStorage.setItem("currentUser",user_string)
 }

 setToken(token):void{
   localStorage.setItem("accessToken", token);
 }

 getToken(){
   return localStorage.getItem("accessToken");
 }



}
