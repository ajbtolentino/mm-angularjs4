import { MenuItemsComponent } from './../menu-items/menu-items.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-menu-item',
  templateUrl: './selected-menu-item.component.html',
  styleUrls: ['./selected-menu-item.component.css']
})
export class SelectedMenuItemComponent implements OnInit {
  menuItem: MenuItemsComponent;
  size: number;

  constructor() { }

  ngOnInit() {
  }

}
