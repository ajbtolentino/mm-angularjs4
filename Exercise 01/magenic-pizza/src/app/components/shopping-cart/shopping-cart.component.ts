import { PizzaSize } from '../../@shared/models/pizza-size';
import { MenuItem } from '../../@shared/models/menu-item';
import { ShoppingCartItem } from '../../@shared/models/shopping-cart-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  cartItems: ShoppingCartItem[];
  totalPrice: number;
  constructor() { }

  ngOnInit() {
    this.cartItems = [];
  }

  addItem(cartItem: ShoppingCartItem): void {
      const e = this.cartItems.find(entry => entry.item.id === cartItem.item.id && cartItem.size.size === entry.size.size);

      if (e) {
        e.quantity++;
      } else {
        cartItem.quantity = 1;
        this.cartItems.push(cartItem);
      }

      this.totalPrice = this.getTotal();
  }

  onQuantityChange(cartItem: ShoppingCartItem, event: any): void {
    const e = this.cartItems.find(entry => entry.item.id === cartItem.item.id && cartItem.size.size === entry.size.size);
    e.quantity = event.target.value;

    this.totalPrice = this.getTotal();
  }

  onRemoveCartItem(cartItem: ShoppingCartItem): void {
    const e = this.cartItems.findIndex(entry => entry.item.id === cartItem.item.id && cartItem.size.size === entry.size.size);

    this.cartItems.splice(e, 1);
    this.totalPrice = this.getTotal();
  }

  getTotal() {
    let total = 0;

    for (const cartItem of this.cartItems) {
      total += cartItem.getPrice();
    }

    return total;
  }
}
