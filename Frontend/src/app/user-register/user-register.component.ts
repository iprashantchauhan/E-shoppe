import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
;


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  
    user:any;
    constructor(private userService:UserService,private router:Router) { }
  
    ngOnInit(): void {
      this.getUsers();
    }
  
    private getUsers()
    {
      this.userService.getUserList().subscribe(data=>{this.user=data});
    }
  userDetails(id:number){this.router.navigate(['user-details',id]);}
  updateUser(id:number){this.router.navigate(['update-user',id]);}
  deleteUser(id:number){this.userService.deleteUser(id).subscribe(data=>{console.log(data);
  this.getUsers();})}
  }

