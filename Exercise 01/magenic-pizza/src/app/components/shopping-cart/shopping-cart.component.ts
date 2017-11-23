import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { DeliveryInformation } from './../../@shared/models/delivery-information';
import { PizzaSize } from '../../@shared/models/pizza-size';
import { MenuItem } from '../../@shared/models/menu-item';
import { ShoppingCartItem } from '../../@shared/models/shopping-cart-item';

import { CustomLabelDirective } from './../../@shared/directives/custom-label/custom-label.directive';
import { Validators } from '@angular/forms';
import { myFormatValidator } from '../../@shared/directives/validators/myformat-validator';
import { OrderSummaryComponent } from './../order-summary/order-summary.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  @ViewChild(OrderSummaryComponent) orderSummary: OrderSummaryComponent;

  cartItems: ShoppingCartItem[];
  deliveryInformation: DeliveryInformation;
  totalPrice: number;

  formGroup: FormGroup;
  submitted = false;

  /*TODO: Constant*/
  emailAddressRegex =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  streetRegex = /\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/;
  contactNumberRegex = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;
  zipRegex = /^(\d{5}((|-)-\d{4})?)|([A-Za-z]\d[A-Za-z][\s\.\-]?(|-)\d[A-Za-z]\d)|[A-Za-z]{1,2}\d{1,2}[A-Za-z]? \d[A-Za-z]{2}$/;

  constructor() { }

  ngOnInit() {
    this.cartItems = [];
    this.deliveryInformation = new DeliveryInformation();
    this.formGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required, myFormatValidator(this.emailAddressRegex)]),
      contactNumber: new FormControl('', [Validators.required, myFormatValidator(this.contactNumberRegex)]),
      street: new FormControl('', [Validators.required, myFormatValidator(this.streetRegex)]),
      city: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required, myFormatValidator(this.zipRegex)]),
    });
  }

  onBackClicked(event): void {
    this.orderSummary.cartItems = null;
    this.orderSummary.deliveryInformation = null;
    this.submitted = false;
  }

  onSubmit(formValue) {
    // if (this.formGroup.valid) {
      this.deliveryInformation.firstName = this.formGroup.get('firstName').value;
      this.deliveryInformation.lastName = this.formGroup.get('lastName').value;
      this.deliveryInformation.emailAddress = this.formGroup.get('emailAddress').value;
      this.deliveryInformation.contactNumber = this.formGroup.get('contactNumber').value;
      this.deliveryInformation.street = this.formGroup.get('street').value;
      this.deliveryInformation.zip = this.formGroup.get('zip').value;
    // }

    this.orderSummary.cartItems = this.cartItems;
    this.orderSummary.deliveryInformation = this.deliveryInformation;
    this.submitted = true;
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
