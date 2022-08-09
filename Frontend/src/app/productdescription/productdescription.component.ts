import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productdescription',
  templateUrl: './productdescription.component.html',
  styleUrls: ['./productdescription.component.css']
})
export class ProductdescriptionComponent implements OnInit {
  id!:number;
  product:any;
  
    constructor(private route:ActivatedRoute,private productService:ProductService) { }
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.product =new Product();
      this.productService.getProductById(this.id).subscribe(data=>{this.product=data});
    }
  

}
