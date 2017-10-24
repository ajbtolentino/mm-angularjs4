import { MenuItem } from './../../menu-item';
import { PizzaSize } from '../../pizza-size';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selected-menu-item',
  templateUrl: './selected-menu-item.component.html',
  styleUrls: ['./selected-menu-item.component.css']
})
export class SelectedMenuItemComponent implements OnInit {
  @Input() selectedPizza: MenuItem;
  @Output() notify: EventEmitter<PizzaSize> = new EventEmitter<PizzaSize>();

  selectedPizzaSize: PizzaSize;
  pizzaSizes: PizzaSize[];

  constructor() { }

  ngOnInit() {
    this.pizzaSizes = [
      new PizzaSize(9, "Regular (9\")", 1),
      new PizzaSize(12, "Family (12\")", 1.25),
      new PizzaSize(14, "Party (14\")", 1.5)
    ];

    this.selectedPizzaSize = this.pizzaSizes[0];
  }

  onSelectionChange(size: PizzaSize): void {
    this.selectedPizzaSize = size;
}

  onAddPizzaClicked():void{
    this.notify.emit(this.selectedPizzaSize);
  }
}
