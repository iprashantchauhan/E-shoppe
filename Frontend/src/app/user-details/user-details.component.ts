import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from '../cart';
import { Changepassword } from '../changepassword';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../services/services/cart.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
user:User = new User();
changePassword!: Changepassword;
text:any;
userdata=JSON.parse(sessionStorage.getItem("user")|| '{}');
cart: any;
items:any;
  users=localStorage.getItem("user");
  
  constructor(private userService:UserService,private router:Router, private cartService: CartService) { }
 
  ngOnInit(): void {
   
    this.user.id=this.userdata.id;
    this.user.name=this.userdata.name;
    this.user.email=this.userdata.email;
    this.user.phoneNumber=this.userdata.phoneNumber;
    this.user.userType=this.userdata.userType;
  
    this.cartService.getCartByCustomerId(this.cart)
    .subscribe(data => {console.log("data " + JSON.stringify(data));
    }, error => console.log(error));
    
    // this.cart=new Cart();
    this.cartService.getAllCarts().subscribe(data=>{sessionStorage.setItem("cartdetails",JSON.stringify(data))});  
    this.items=JSON.parse(sessionStorage.getItem("cartdetails")|| '{}');
  }
  deleteUser(id:number){
    this.userService.deleteUser(id)
    .subscribe(data=>{console.log(data);sessionStorage.clear();})}

  change(){
    this.changePassword.userEmail=this.user.email;
    alert(this.changePassword);
    this.userService.changePassword(this.changePassword).subscribe(data=>
      {
alert(JSON.stringify(data));},
      error=>{this.text=JSON.stringify(error.error.message);});
  }  
  }


// id!:number;
// product:any;

//   constructor(private route:ActivatedRoute,private productService:ProductService) { }

//   ngOnInit(): void {
//     this.id=this.route.snapshot.params['id'];
//     this.product =new Product();
//     this.productService.getProductById(this.id).subscribe(data=>{this.product=data});
//   }
//   private getProducts()
//   {
//     this.productService.getProductList().subscribe(data=>{this.product=data});
//   }
//   deleteProduct(id:number){this.productService.deleteProduct(id).subscribe(data=>{console.log(data);
//     this.getProducts();})}
// }
