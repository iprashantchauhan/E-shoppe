import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../services/services/cart.service';

import { CartItemService } from '../services/services/cartitem.service';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  newItems: Array<Product> = [];
  item: Product = new Product();
  cart:any;
  isDisabled = true;

  constructor(private router: Router, private cartService: CartService) { 
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }

  ngOnInit(): void {
    // sessionStorage.clear();
    this.reload();
  }

  reloadData(newItems: any){
    console.log("on Reload :" + JSON.stringify(newItems));
  }

  reload(){
    let cartSession = sessionStorage.getItem("cart");
    console.log("the session : "+ cartSession);

    if(cartSession != null){
      this.newItems = JSON.parse(cartSession);
      this.isDisabled = false;
      if(this.newItems.length<=0){
        this.isDisabled = true;
        sessionStorage.clear();
      }
      }else{
        sessionStorage.removeItem("cart");
        sessionStorage.setItem("cart", JSON.stringify(this.newItems));
      }
    }

    checkout(){
      console.log("In checkout: " + JSON.stringify(this.newItems));
      this.gotoCheckout();
    }

    remCart(item:any){
      this.cartService.remItem(item.id);
      if(this.cart.items.length<=0){
        this.isDisabled = true;
        
      }
    }

    gotoCheckout(){
      this.router.navigate(['/checkout']);
    }

  }