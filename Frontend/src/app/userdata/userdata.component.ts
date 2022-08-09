import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  user:any;
  updateuser:any;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers()
  {
    this.userService.getUserList().subscribe(data=>{this.user=data});
  }
userDetails(id:number){this.router.navigate(['user-details',id]);}
updateUser(id:number){
  this.userService.getUserById(id).subscribe(data=>{this.updateuser=data ;});
  this.updateuser.approved=true;
  this.userService.updateUser(id,this.updateuser).subscribe(data=>{alert("approved");this.getUsers()});
}
deleteUser(id:number){this.userService.deleteUser(id).subscribe(data=>{console.log(data);
this.getUsers();})}
}
