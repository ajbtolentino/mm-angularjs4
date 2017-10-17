import { SelectedMenuItemComponent } from './selected-menu-item/selected-menu-item.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItemsComponent;
  selectedMenuItem: SelectedMenuItemComponent;

  constructor() { }

  ngOnInit() {
  }

}
