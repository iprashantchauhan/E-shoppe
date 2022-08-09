import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { LoginuserService } from '../loginuser.service';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 userval!: any;
  user: User = new User();
   users:any;
  constructor(private loginuserService : LoginuserService, private router: Router,private userService:UserService) { }

  ngOnInit(): void {
    
    this.getUsers();
  }
    
  userLoginFunc(key:string){
     // this.userval=this.userService.getUserByEmail(key).subscribe(data=>{this.users=data},error=>alert("user not found"));
      this.loginuserService.loginUserFunct(this.user).subscribe(data=>
        {sessionStorage.setItem('user',JSON.stringify(data));
        alert("Login Successfully");this.router.navigate(['/']);
        this.loginuserService.isLoggedIn$.next(true);
      },
        error=>{alert("sorry please enter correct email and password");
        this.router.navigate(['/login']);});
      
        
     
          
    }

    private getUsers()
    {
      this.userService.getUserList().subscribe((data)=>{this.users=data});
    }

  }


