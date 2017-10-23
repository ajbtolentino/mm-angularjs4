import { ShoppingCartItem } from './shopping-cart-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  cartItems: ShoppingCartItem[];

  constructor() { }

  ngOnInit() {
  }

}
