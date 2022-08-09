import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from './cart';
import { LoginuserService } from './loginuser.service';
import { Product } from './product';
import { CartService } from './services/services/cart.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){    
  }
  
  ngOnInit(): void {
  }
}
