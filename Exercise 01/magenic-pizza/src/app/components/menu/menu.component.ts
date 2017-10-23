import { PizzaSize } from './selected-menu-item/pizza-size';
import { SelectedMenuItemComponent } from './selected-menu-item/selected-menu-item.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { MenuItem } from './menu-items/menu-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItemsComponent;
  selectedPizza: MenuItem;

  constructor() { }

  ngOnInit() {
  }

  onPizzaSelected(selectedPizza: MenuItem){
    this.selectedPizza = selectedPizza;
  }

  onAddPizzaClicked(pizzaSize: PizzaSize){
    alert(pizzaSize.name);
  }
}
