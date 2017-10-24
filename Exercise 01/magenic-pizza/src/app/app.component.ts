import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartItem } from './components/shopping-cart/shopping-cart-item';
import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ShoppingCartComponent) cart: ShoppingCartComponent;

  title = 'app';

  onAddPizza(cartItem: ShoppingCartItem): void{
      this.cart.addItem(cartItem);
  }
}
