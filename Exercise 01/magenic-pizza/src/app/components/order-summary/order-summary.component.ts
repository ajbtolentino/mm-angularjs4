import { DeliveryInformation } from '../../@shared/models/delivery-information';
import { ShoppingCartItem } from '../../@shared/models/shopping-cart-item';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})

export class OrderSummaryComponent {
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  cartItems: ShoppingCartItem[];
  deliveryInformation = new DeliveryInformation();
  totalPrice: number;

  onBackClicked(): void {
    this.notify.emit(true);
  }

  computeTotal(cartItems: ShoppingCartItem[]) {
    this.cartItems = cartItems;

    let total = 0;

    for (const cartItem of this.cartItems) {
      total += cartItem.getPrice();
    }

    this.totalPrice = total;
  }
}
