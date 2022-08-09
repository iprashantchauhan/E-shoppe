
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { Product } from '../product';
import { CartService } from '../services/services/cart.service';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  date: any;
  cartObj:any;
  customer: User = new User();
  items: any;
  userdata: any;
  customerName!: string;
  cart: Cart = new Cart;
  total = 0;

  constructor(private router: Router, private customerService: UserService, private cartService: CartService) { }

  ngOnInit() {
    let cartSession = sessionStorage.getItem("cart");
    // console.log("the session contain: " + cartSession);
    let userSession = sessionStorage.getItem("user")|| '{}';
    this.userdata=JSON.parse(userSession);
    this.customerName=this.userdata.name;
    if(cartSession != null) {
      this.items = JSON.parse(cartSession);
      console.log(this.items);
      // this.items = this.items.items.sort((a, b) => a.price - b.price);
    }
    
    for(var i = 0; i < this.items.items.length; i++) {
      this.total += this.items.items[i].totalPrice;
    }
    console.log("the Total is: " + this.total);
  }

findCustomerByEmail() {
    this.customerService.getUserByEmail(this.customer.email)
      .subscribe(data => {
        console.log("data " + JSON.stringify(data));
        this.customer = data;
        sessionStorage.setItem("customer", JSON.stringify(this.customer));
        this.customerName = this.customer.name;
      }, error => console.log(error));
  }

  onSubmit() {
    this.findCustomerByEmail();
  }

  buy() {
    if(this.userdata.id==undefined){
      this.router.navigate(['/login']);
    }
    else{
      this.cart.userId = this.userdata.id;  
      console.log(this.cart.userId);
      this.cart.items = this.items.items;
      this.cart.totalAmount=this.items.totalAmount;
      console.log("Cart JSON has : " + JSON.stringify(this.cart));
      this.cartService.createCart(this.cart)
        .subscribe(data => {
          console.log("data " + JSON.stringify(data));
          this.cart = data;this.gotoCheckout();
          sessionStorage.setItem("cart", JSON.stringify(this.cart));
      }, error => console.log(error));
       }
  }

  gotoCheckout() {
    alert("success");
    sessionStorage.removeItem("cart");
    // this.router.navigate(['/finish']);
  }
}
