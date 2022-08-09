import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../services/services/cart.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categ=["Mens","Womens","Essentials"];
  price=[0,1,2];
  id!:number;
product:any;
item:any
i=0;
showdata:any;

  constructor(private cartService : CartService,private route:ActivatedRoute
    ,private router: Router,private productService:ProductService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.product =new Product();
    this.productService.getProductList().subscribe(data=>{this.product=data});
    // this.productService.getProductById(this.id).subscribe(data=>{this.product=data});
  }
  categoryfilter(cat : string){
    this.showdata = this.product.filter((obj: { category: string; })=>{return obj.category==cat});
 
  }
  pricefilter(price : number){
    if(price==0){
    this.showdata = this.product.filter((obj: { price: number; })=>{return obj.price<500});
  }
  if(price==1){
    this.showdata = this.product.filter((obj: { price: number; })=>{return (obj.price>=500 && obj.price<=1000)});
  }
  if(price==2){
    this.showdata = this.product.filter((obj: { price: number; })=>{return obj.price>1000});
  }
}
addtocart(id:any){
  alert(id);
  this.item=this.productService.getProductById(id);
  this.cartService.addItem(this.item);
  this.router.navigateByUrl('/cart-page');
}
}
