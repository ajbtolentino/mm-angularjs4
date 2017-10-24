import { PizzaSize } from './../pizza-size';
import { MenuItem } from './../menu-item';
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
    this.cartItems = [];
  }

  addItem(cartItem: ShoppingCartItem): void{
      var e = this.cartItems.find(entry => entry.item.id == cartItem.item.id && cartItem.size.size == entry.size.size);

      if(e){
        e.quantity++;
      }
      else{
        cartItem.quantity = 1;
        this.cartItems.push(cartItem);
      }
  }

  onQuantityChange(cartItem: ShoppingCartItem, event: any): void{
    var e = this.cartItems.find(entry => entry.item.id == cartItem.item.id && cartItem.size.size == entry.size.size);
    e.quantity = event.target.value;
  }

  onRemoveCartItem(cartItem: ShoppingCartItem): void{
    var e = this.cartItems.findIndex(entry => entry.item.id == cartItem.item.id && cartItem.size.size == entry.size.size);

    this.cartItems.splice(e, 1);
  }
}
