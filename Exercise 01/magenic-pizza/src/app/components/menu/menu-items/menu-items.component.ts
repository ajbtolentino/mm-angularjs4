import { ItemComponent } from './item/item.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  items: ItemComponent[];

  constructor() { }

  ngOnInit() {
    this.items = [
      new ItemComponent(1, 'Pepperoni', 495),
      new ItemComponent(2, 'BBQ', 495),
      new ItemComponent(3, 'Chicken BBQ', 495),
      new ItemComponent(4, 'Hawaiian', 495),
      new ItemComponent(5, 'Bacon Ranch', 495),
      new ItemComponent(6, 'Four-Cheese', 495),
      new ItemComponent(7, 'Garden Special', 495),
      new ItemComponent(8, 'Texas Heat', 495),
      new ItemComponent(9, 'Bicol Express', 495),
    ]
  }

}
