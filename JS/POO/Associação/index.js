const Address = require("./address")
const Person = require("./person")

const addr = new Address("7 de setembro",99,'vida nova','vinhedo','SP')
const guy = new Person('William',addr)

console.log(guy.address.fullAddress())