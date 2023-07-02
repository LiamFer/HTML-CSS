class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  Login(email, password) {
    if (email === this.email && password == this.password) {
      console.log("Accessing the database...");
    } else {
      console.log("Access denied...");
    }
  }
}

const usuario = new User('Friedrich Gauss','gauss@orkut.com',123456)

console.log(usuario)

usuario.Login('gauss@orkut.com',123456)