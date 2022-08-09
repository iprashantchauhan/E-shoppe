import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Changepassword } from './changepassword';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl="http://54.184.85.63:8080/users";
 
  constructor(private httpClient:HttpClient) { }

  getUserList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }
  getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }
  getUserByEmail(email:string):Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}`);
  }

  updateUser(id:number,User:User):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,User);
  }
  deleteUser(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  createUser(User:User):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,User);
  }

  changePassword(User: Changepassword):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}/changepassword`, User);
  }
}
