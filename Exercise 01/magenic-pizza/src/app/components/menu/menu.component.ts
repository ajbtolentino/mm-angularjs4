import { ShoppingCartItem } from '../../@shared/models/shopping-cart-item';
import { MenuItem } from '../../@shared/models/menu-item';
import { PizzaSize } from '../../@shared/models/pizza-size';
import { SelectedMenuItemComponent } from './selected-menu-item/selected-menu-item.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() onAddPizza: EventEmitter<ShoppingCartItem> = new EventEmitter<ShoppingCartItem>();

  items: MenuItem[];

  selectedPizza: MenuItem;

  constructor() { }

  ngOnInit() {
    this.items = [
      new MenuItem(1, 'Pepperoni', 395,
                    "C’mon… you gotta love original pepperoni! Nothing says pizza quite like thin slices of pepperoni, evenly shuffled across a spread of tomato sauce under delicious 100% real cheese surrounded by a traditional garlic buttery crust. I mean, this is what pizza’s all about #amirite?",
                    "https://www.cicis.com/media/1138/pizza_trad_pepperoni.png"),
      new MenuItem(2, 'BBQ', 495,
                    "Love barbecue? Of course you do. Love pork? Pssh… who doesn’t? That’s why we knew these two should get to know each other in our BBQ Pork Pizza. Just look at that photo (yeah, why are you even reading?) It’s got all the goods and then some – sweet and tangy honey BBQ sauce, deliciously seasoned pulled pork and plenty of 100% real mozzarella cheese. All surrounded by a flavorful golden buttery crust.",
                    "https://www.cicis.com/media/1338/kansas-city-bbq-pizza-three-quarte.png"),
      new MenuItem(3, 'Chicken BBQ', 595,
                    "Traditional garlic butter crust topped with zesty Parmesan ranch sauce, 100% real cheese, chicken, fresh mushrooms and Parmesan oregano seasoning",
                    "https://www.cicis.com/media/1336/buffalo-chicken_new72dpi.png"),
      new MenuItem(4, 'Hawaiian', 695,
                    "Traditional garlic butter crust topped with tomato sauce, 100% real cheese, sliced ham and pineapple",
                    "https://www.cicis.com/media/1140/pizza_adven_hampineapple.png"),
      new MenuItem(5, 'Bacon Ranch', 795,
                    "Crispy flatbread crust topped with 100% Real Cheddar Cheese, Premium Chicken, Bacon and Bruschetta Tomatoes with zesty Parmesan Ranch. ",
                    "https://www.cicis.com/media/1289/chickenbaconclubflatbread.png"),
      new MenuItem(6, 'Four-Cheese', 595,
                    "Traditional, deep dish or flatbread – our pizza is made with dough that’s made from scratch in every one of our restaurants. Every single day. On that canvas, we make fan-favorite flavors and bold new tastes. Don’t see your favorite flavor on the buffet? Just ask.",
                    "https://www.cicis.com/media/1137/pizza_trad_alfredo.png"),
      new MenuItem(7, 'Garden Special', 555,
                    "Traditional garlic butter crust topped with zesty Parmesan ranch sauce, 100% real cheddar cheese, mushrooms, red onions, green peppers, tomatoes and Parmesan oregano seasoning",
                    "https://www.cicis.com/media/1143/pizza_adven_zestyveggie.png"),
      new MenuItem(8, 'Texas Heat', 545,
                    "Beef crumbles and fresh lettuce with spicy red sauce topped with shredded cheddar cheese on our traditional crust",
                    "http://www.cicispizza.com/media/1238/pizza_adven_ole.png"),
      new MenuItem(9, 'Bicol Express', 795,
                    "Laing with mushroom, mozzarella, green pepper, and pineapple chunks.",
                    "http://www.lakwatseradeprimera.com/wp-content/uploads/2011/01/small-talk-cafe6.jpg"),
    ];
  }

  onPizzaSelected(pizza: MenuItem): void {
      this.selectedPizza = pizza;
  }

  onAddPizzaClicked(size: PizzaSize): void {
      const item = new ShoppingCartItem();
      item.size = size;
      item.item = this.selectedPizza;

      this.onAddPizza.emit(item);
  }
}
