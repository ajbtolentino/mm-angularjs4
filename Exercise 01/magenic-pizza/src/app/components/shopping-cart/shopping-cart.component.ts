import { CartItemComponent } from './cart-item/cart-item.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  cartItems: CartItemComponent[];

  constructor() { }

  ngOnInit() {
  }

}
