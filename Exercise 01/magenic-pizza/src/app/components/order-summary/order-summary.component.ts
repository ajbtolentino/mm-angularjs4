import { DeliveryComponent } from './../shopping-cart/delivery/delivery.component';
import { CartItemComponent } from './../shopping-cart/cart-item/cart-item.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})

export class OrderSummaryComponent implements OnInit {
  cartItems: CartItemComponent[];
  delivery: DeliveryComponent;

  constructor() { }

  ngOnInit() {
  }

}
