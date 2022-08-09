import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from '../cart';
import { CartService } from '../services/services/cart.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User = new User();
  userdata=JSON.parse(sessionStorage.getItem("user")|| '{}');
  
    
   
    users=localStorage.getItem("user");
    
    constructor(private userService:UserService,private router:Router, private cartService: CartService) { }
   
    ngOnInit(): void {
      this.user.name=this.userdata.name;
      this.user.email=this.userdata.email;
      this.user.phoneNumber=this.userdata.phoneNumber;
      
    }
  
  
  }
