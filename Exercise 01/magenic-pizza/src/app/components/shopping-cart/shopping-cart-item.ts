import { PizzaSize } from './../pizza-size';
import { MenuItem } from '../menu-item';

export class ShoppingCartItem {
  item: MenuItem;
  size: PizzaSize;
  quantity: number;

  constructor() {
  }

  ngOnInit() {
  }

}
