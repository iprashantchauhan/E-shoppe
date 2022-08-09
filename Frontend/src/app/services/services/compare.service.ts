import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Compare } from 'src/app/compare';
import { Product } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})
export class CompareService {
 compareItems: Array<Product> = [];
 private compare: Compare = this.getProductFromSessionStorage();
 private compareSubject: BehaviorSubject<Compare> = new BehaviorSubject(this.compare);
  constructor() { }

  getCompareObservable(): Observable<Compare> {
    return this.compareSubject.asObservable();
  }

  public addItem(item: Product): void{
    
    let product = this.compare.items.find(i=>i.id==item.id);
    if(product==undefined){
      product = new Product();
      product.id = item.id;
      product.price = item.price;
      product.name = item.name;
      product.description = item.description;
      product.category = item.category;
      product.imageUrl = item.imageUrl;
      product.quantity = 1;
      this.compare.items.push(product);
    }
    else{
      if(this.compare.items.length<=5){
      for(var i = 0; i< this.compare.items.length; i++){
        if(this.compare.items[i].id == item.id){
          alert("already in compare list");
        }
      }
    }
    else{
      alert("you can compare only 5 products")
    }
    }
    sessionStorage.setItem("compare", JSON.stringify(this.compare));
  }

  remItem(item: Product): void{
    console.log("on remove list: "+ JSON.stringify(this.compare));
    for(var i = 0; i < this.compare.items.length; i++){
      if(this.compare.items[i].id==item.id){
        this.compare.items.splice(i,1);
      }
    }
    sessionStorage.setItem("compare", JSON.stringify(this.compare));
  }

  getProductFromSessionStorage(): Compare{
    const compareJson = sessionStorage.getItem("compare");
    return compareJson ? JSON.parse(compareJson) : new Compare();
  }
}

