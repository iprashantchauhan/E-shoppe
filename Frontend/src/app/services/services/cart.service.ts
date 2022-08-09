import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from 'src/app/cart';
import { Product } from 'src/app/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private baseUrl = 'http://54.184.85.63:8080/cart';

  newItems: Array<Product>=[];
  private cart: Cart = this.getCartFromSessionStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor(private http: HttpClient) { }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  createCart(cart: Object): Observable<any>{
    return this.http.post(`${this.baseUrl}/create`, cart);
  }

  getCartByCustomerId(id: any): Observable<Object>{
    return this.http.get<Object>(`${this.baseUrl}/${id}`);
  }

  getAllCarts(): Observable<any>{
    return this.http.get(`${this.baseUrl}/carts`);
  }

  public addItem(item: Product): void{
    let product = this.cart.items.find(i=>i.id==item.id);
    if(product==undefined){
      product = new Product();
      product.id = item.id;
      product.price = item.price;
      product.name = item.name;
      product.description = item.description;
      product.category = item.category;
      product.imageUrl = item.imageUrl;
      product.quantity = 1;
      product.totalPrice = item.price;
      this.cart.items.push(product);
      
      console.log(this.cart.items);
    }
    else{
      for(var i = 0; i< this.cart.items.length; i++){
        if(this.cart.items[i].id == item.id){
          this.cart.items[i].quantity = this.cart.items[i].quantity + 1;
          this.cart.items[i].totalPrice = this.cart.items[i].price * this.cart.items[i].quantity; 
        }
      }
    }
    this.setCartToSessionStorage();
    
  }

  public remItem(id: number): void{
    console.log("on remove list: "+ JSON.stringify(this.cart));
    this.cart.items = this.cart.items
      .filter(item => item.id != id);
      this.setCartToSessionStorage();
  }

  private setCartToSessionStorage(): void{
    this.cart.totalAmount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.totalPrice, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    sessionStorage.setItem('cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromSessionStorage(): Cart{
    const cartJson = sessionStorage.getItem("cart");
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
