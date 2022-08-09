import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  id!:number;
  product:any;
  
    constructor(private route:ActivatedRoute,private productService:ProductService) { }
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.product =new Product();
      this.productService.getProductById(this.id).subscribe(data=>{this.product=data});
      this.getProduct();
    }
  
    private getProduct()
    {
      this.productService.getProductList().subscribe(data=>{this.product=data});
    }
    deleteProduct(id:number){this.productService.deleteProduct(id).subscribe(data=>{alert(data);
      this.getProduct();})}
    
}

