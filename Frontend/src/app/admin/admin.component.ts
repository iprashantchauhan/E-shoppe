import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  id!:number;
  product:any;
  updateproduct: any;
  
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
    updateProduct(id:number){
      this.productService.getProductById(id).subscribe(data=>{this.updateproduct=data});
      this.updateproduct.approved=true;
      this.productService.updateProduct(id,this.updateproduct).subscribe(data=>{alert("approved");this.getProduct()});
      
  }
      
}


