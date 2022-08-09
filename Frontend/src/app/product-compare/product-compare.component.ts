import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../services/services/cart.service';
import { CompareService } from '../services/services/compare.service';

@Component({
  selector: 'app-product-compare',
  templateUrl: './product-compare.component.html',
  styleUrls: ['./product-compare.component.css']
})
export class ProductCompareComponent implements OnInit {
  id!:number;
  product:any;
  newItems: Array<Product> = [];
    constructor(private route:ActivatedRoute, private compareService: CompareService,private productService:ProductService, private cartService: CartService) { 
      this.compareService.getCompareObservable().subscribe((product) => {
        this.product = product;
      })
    }
  
    ngOnInit(): void {
      // this.id=this.route.snapshot.params['id'];
      // this.product =new Product();
      // this.productService.getProductById(this.id).subscribe(data=>{this.product=data});
      // this.reload();
    }
  
    reload(){
      let compareSession = sessionStorage.getItem("compare");
      console.log("the session : "+ compareSession);
  
      if(compareSession != null){
        this.newItems = JSON.parse(compareSession);
        }else{
          
          sessionStorage.setItem("compare", JSON.stringify(this.newItems));
        }
      } 

      addtocart(item:any){
        this.cartService.addItem(item);
        
        console.log(item);
      }
      remcompare(item:any){
        this.compareService.remItem(item);
        
        console.log(item);
      }

}
