// Exercicio 1

// let car1 = prompt("Insert the first car name: ");
// let speed1 = parseFloat(prompt("What's the vehicle speed?"));

// let car2 = prompt("Insert the second car name: ");
// let speed2 = parseFloat(prompt("What's the vehicle speed?"));

// if (speed1 > speed2) {
//   alert(`${car1} is faster`);
// } else if (speed1 === speed2) {
//   alert(`${car1} and ${car2} have the same speed`);
// } else {
//   alert(`${car1} is faster`);
// }

//  Exercicio 2

// Attack Stats
let charName = prompt("Insert the character name");
let atkPower = parseFloat(prompt("Insert his attack power"));

// Defender Stats
let defName = prompt("Insert the defender character name");
let defLife = parseFloat(prompt("Insert the life points"));
let defPower = parseFloat(prompt("Insert the defence power"));
let hasShield = prompt("Does he have a shield? (Y/N)");
let shield = hasShield == "Y" ? true : false;

let damage = 0;

if (atkPower > defPower && shield == false) {
  damage = atkPower - defPower;
} else if (atkPower > defPower && shield) {
  damage = (atkPower - defPower) / 2;
} else {
  damage = 0;
}

defLife -= damage

alert(`The defender has suffered ${damage} and now has ${defLife} life points remaining!`);
