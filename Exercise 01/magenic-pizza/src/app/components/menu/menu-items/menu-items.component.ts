import { MenuItem } from '../../menu-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  @Input() item: MenuItem;
  @Output() notify: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelectedPizza(): void {
      this.notify.emit(this.item);
  }

}
