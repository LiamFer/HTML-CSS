// Encapsulamento

class Account {
  #password;
  #balance = 0;
  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    } else {
      return null;
    }
  }

  // Funciona com métodos também!
  #authenticate(email, password) {
    return this.email === email && this.#password === password;
  }
}

const user = {
  email: "liam@email.com",
  password: 123456,
};

const myAccount = new Account(user);
console.log(myAccount);
