import { MenuItem } from './menu-item';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  @Output() notify: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();

  items: MenuItem[];
  size: number;

  constructor() { }

  ngOnInit() {
    this.items = [
      new MenuItem(1, 'Pepperoni', 495),
      new MenuItem(2, 'BBQ', 495),
      new MenuItem(3, 'Chicken BBQ', 495),
      new MenuItem(4, 'Hawaiian', 495),
      new MenuItem(5, 'Bacon Ranch', 495),
      new MenuItem(6, 'Four-Cheese', 495),
      new MenuItem(7, 'Garden Special', 495),
      new MenuItem(8, 'Texas Heat', 495),
      new MenuItem(9, 'Bicol Express', 495),
    ]
  }

  onSelectedPizza(menuItem): void {
      this.notify.emit(menuItem);
  }

}
