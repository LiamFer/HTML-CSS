class Wallet {
  #amount;
  #username;
  constructor() {
    this.#amount = 100.99 * 100;
  }

  // Daria para usar uma função normal para fazer isso
  get amount() {
    return this.#amount / 100;
  }

  set username(newUsername) {
    if (typeof newUsername == String) {
      this.#username = newUsername;
      return console.log("Username changed");
    } else {
      return console.log("Username isn't a string");
    }
  }

  get username() {
    return console.log(this.#username);
  }
}

const carteira = new Wallet();

carteira.username = 'willia'
console.log(carteira.username)
