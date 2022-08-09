import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private baseUrl= "http://54.184.85.63:8080/login";
  isLoggedIn$ = new Subject();
  
  constructor(private httpClient : HttpClient ) { }
  loginUserFunct(user: User):Observable<object>{
    // localStorage.setItem("userlog",JSON.stringify(user));
    // sessionStorage.setItem('user',JSON.stringify(user));
    return this.httpClient.post(`${this.baseUrl}`, user);
  }
  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('user');
}
forgotPassword(email: string){
  
}
  
}
