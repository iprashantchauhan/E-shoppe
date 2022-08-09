import { NONE_TYPE } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../services/services/cart.service';
import { CompareService } from '../services/services/compare.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id:any;
  itemproduct: any;
  // product=JSON.parse(sessionStorage.getItem("productdetails")|| '{}');
  compareItem!: Product;
  compareItems: Array<Product> = [];
  
  
    constructor(private productService: ProductService,private route:ActivatedRoute,
      private compareService:CompareService, private cartService: CartService,
      private router: Router) {
      route.paramMap.subscribe((params) => {
        if(params.get('id'))
        this.productService.getProductById(params.get('id')).subscribe(data=>{this.compareItem=data});
      })
    }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe(params=>{
        this.id = params.get('id');
      });this.getProductbyId(this.id);

      // console.log(this.product);
      // this.product =new Product();
      // this.productService.getProductById(this.product).subscribe(data=>{this.product=data});
      
    }
    getProductbyId(id:any){
      this.productService.getProductById(id).subscribe((res)=>{
        this.itemproduct = res;
      });
    }
    addtocart(){
      this.cartService.addItem(this.compareItem);
      this.router.navigateByUrl('/cart-page');
    }

    // addtocompare(){
    //     let product = this.compareItems.find(i=>i.id==item.id);
    //     if(product==undefined){
    //       this.compareItems.push(item);
    //     }
    //     else{
    //       for(var i = 0; i< this.compareItems.length; i++){
    //         if(this.compareItems[i].id == item.id){
    //           alert("already added");
    //         }
    //       }
    //     }
    //     sessionStorage.setItem("compare", JSON.stringify(this.compareItems));
    //   }
    
    addtocompare(){
      this.compareService.addItem(this.compareItem);
    this.router.navigateByUrl('/compare');
    }  
    }

