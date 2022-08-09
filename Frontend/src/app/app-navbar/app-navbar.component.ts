import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { CartService } from '../services/services/cart.service';
import { User } from '../user';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
user:User = new User();
cartQuantity=0;
userdata: any;
  constructor(private cartService: CartService,private loginuserService: LoginuserService, private router: Router){
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;});
  }
  ngOnInit(): void {
    
    this.userdata=JSON.parse(sessionStorage.getItem("user")|| '{}');
    this.loginuserService.isLoggedIn$.subscribe(item => {
      if(item){
          this.ngOnInit();
        }
    });
    this.user.userType=this.userdata.userType;
    this.user.name=this.userdata.name;
  
  }
  title = 'shopp-e';

  logout() {
    this.loginuserService.logout();
    sessionStorage.removeItem("cart");
    this.router.navigate(['/login']);
    this.ngOnInit();
  }
}
