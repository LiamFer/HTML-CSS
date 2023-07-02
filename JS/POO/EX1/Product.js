class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addToStock(units) {
    this.inStock += units;
    console.log(`${units} units added successfuly!`);
  }
  calculateDiscount(discountPercentage) {
    let discount = (this.price * discountPercentage)/100;
    console.log(`The discount is ${discount}`);
  }
}

const teclado = new Product(
  "Teclado Razer",
  "Teclado mecânico branco da marca Razer",
  200
);

console.log(teclado);
teclado.addToStock(15);
console.log(teclado);
teclado.calculateDiscount(10)
