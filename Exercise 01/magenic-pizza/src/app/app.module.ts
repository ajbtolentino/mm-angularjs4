import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MenuItemsComponent } from './components/menu/menu-items/menu-items.component';
import { SelectedMenuItemComponent } from './components/menu/selected-menu-item/selected-menu-item.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { DeliveryComponent } from './components/shopping-cart/delivery/delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemsComponent,
    SelectedMenuItemComponent,
    OrderSummaryComponent,
    DeliveryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
