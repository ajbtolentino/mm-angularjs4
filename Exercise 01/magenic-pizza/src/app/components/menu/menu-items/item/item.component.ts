export class ItemComponent {
  id: number;
  name: string;
  price: number;
  image: string;

  constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
  }

  ngOnInit() {
  }

}
