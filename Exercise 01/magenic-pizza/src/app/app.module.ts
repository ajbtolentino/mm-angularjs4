import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MenuItemsComponent } from './components/menu/menu-items/menu-items.component';
import { SelectedMenuItemComponent } from './components/menu/selected-menu-item/selected-menu-item.component';
// import { CartItemComponent } from './components/shopping-cart/cart-item/cart-item.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { ItemComponent } from './components/menu/menu-item/item/item.component';
import { DeliveryComponent } from './components/shopping-cart/delivery/delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemsComponent,
    SelectedMenuItemComponent,
    // CartItemComponent,
    OrderSummaryComponent,
    ItemComponent,
    DeliveryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
