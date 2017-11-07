import { PizzaSize } from './pizza-size';
import { MenuItem } from './menu-item';

export class ShoppingCartItem {
  item: MenuItem;
  size: PizzaSize;
  quantity: number;

  getPrice() {
      return (this.item.price * this.size.multiplier) * this.quantity;
  }
}
