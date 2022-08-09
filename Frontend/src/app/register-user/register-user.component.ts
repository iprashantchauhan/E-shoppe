import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  user:User =new User();
  text:any;
  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  userRegister(){
    console.log(this.user);
    this.user.id=Date.now();
    if(this.user.userType=="User"){
      this.user.approved=true;
      this.registerService.registerUser(this.user).subscribe(data=>{
        alert("Successfully registered");this.router.navigate(['login']);
       },error=>{this.text=JSON.stringify(error.error.message);});
       this.router.navigate(['users']);
    }
    if(this.user.userType=="Retailer"){
    this.registerService.registerUser(this.user).subscribe(data=>{
     alert("your profile is submitted for approval to Admin ");this.router.navigate(['']);
    },error=>{this.text=JSON.stringify(error.error.message);});
    this.router.navigate(['users']);
  }
}

}
