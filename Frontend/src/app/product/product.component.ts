import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id!:number;
  product:any;
  
  
    constructor(private route:ActivatedRoute,private productService:ProductService) { }
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.product =new Product();
      this.productService.getProductList().subscribe(data=>{this.product=data});
      
    }
  
    
}
