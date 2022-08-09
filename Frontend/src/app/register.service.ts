import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
   baseUrl="http://54.184.85.63:8080/users";
  constructor(private httpClient: HttpClient) { }


  registerUser(user: User): Observable<Object> {
     console.log(user);
     return this.httpClient.post(`${this.baseUrl}`,user);
  }
}
