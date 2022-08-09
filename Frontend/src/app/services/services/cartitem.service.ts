import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { CartItem } from './cartitem';
import { Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemService
 {
   private baseUrl="http://54.184.85.63:8080/cartitems";
   
  constructor(private httpClient:HttpClient) { }

  getCartItemList():Observable<CartItem[]>{
    return this.httpClient.get<CartItem[]>(`${this.baseUrl}`);
  }
  getCartItemById(id:number):Observable<CartItem>{
    return this.httpClient.get<CartItem>(`${this.baseUrl}`);
  }

  updateCartItem(id:number,cartitem:CartItem):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,cartitem);
  }
  deleteCartItem(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  createCartItem(cartitem:CartItem):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,cartitem);
  }
}
