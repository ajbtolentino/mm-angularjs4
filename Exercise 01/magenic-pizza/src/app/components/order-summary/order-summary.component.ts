import { DeliveryInformation } from '../../@shared/models/delivery-information';
import { ShoppingCartItem } from '../../@shared/models/shopping-cart-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})

export class OrderSummaryComponent implements OnInit {
  cartItems: ShoppingCartItem[];
  deliveryInformation: DeliveryInformation;

  constructor() { }

  ngOnInit() {
  }

}
