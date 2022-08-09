import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  product : Product = new Product();
  httpClient: any;
  user:any=JSON.parse(sessionStorage.getItem("user" )|| '{}');
  constructor(private productService:ProductService,private router:Router) { }
  
  saveProduct()
  {
    this.productService.createProduct(this.product).subscribe(data=>{console.log(data);
    this.goToProductList();},error=>console.log(error));
  }
  goToProductList()
  { 
    if(this.user.userType=='Admin'){
      this.router.navigate(['/admindesc']);
    }else if(this.user.userType=='Retailer'){
      this.router.navigate(['/retailerdesc']);
    }
    
  }
  onSubmit()
  {
    console.log(this.product);
    alert("your product is submitted for approval by admin");
    this.saveProduct();
  }
  
}


