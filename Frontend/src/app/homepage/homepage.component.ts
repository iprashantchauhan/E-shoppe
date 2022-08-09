import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../services/services/cart.service';
import { CartItem } from '../services/services/cartitem';
import { CartItemService } from '../services/services/cartitem.service';
import { User } from '../user';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

id!:number;
product:any;
showdata: any ;


  constructor(private router: Router,private route:ActivatedRoute,private productService:ProductService, private cartService:CartService) { }
  user:User = new User();
  userdata:any;
  ngOnInit(): void {
    // this.id=this.route.snapshot.params['id'];
    this.product =new Product();
    console.log('asdfasdfasdfasdfasdfafd',sessionStorage)
    this.userdata=JSON.parse(sessionStorage.getItem("user")|| '{}');
    this.productService.getProductList().subscribe(data=>{this.product=data});
    this.reload();
    
  }
  searchfilter(key: string){
    if(key!=null)
    this.showdata = this.product.filter((obj: { name: any; })=>{return obj.name == key});
  
}
reload(){
  this.user.userType=this.userdata.userType;
  this.user.name=this.userdata.name;
  
  
}
  addtocart(item:any){
    this.cartService.addItem(item);
    console.log(item);
    this.router.navigateByUrl('/cart-page');
  }

  productdetails(p:any){
    sessionStorage.setItem("productdetails",JSON.stringify(p));
  }

}


