class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }
  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {
  constructor(number, area, price) {
    super(area, price);
    this.number = number;
  }
}
