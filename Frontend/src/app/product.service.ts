import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService
 {
   private baseUrl="http://54.184.85.63:8080/products";
   
  constructor(private httpClient:HttpClient) { }

  getProductList():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}`);
  }
  getProductById(id:any):Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseUrl}/${id}`);
  }

  updateProduct(id:number,product:Product):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,product);
  }
  deleteProduct(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  createProduct(product:Product):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,product);
  }
}
