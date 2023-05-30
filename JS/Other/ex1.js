
// Exercicio 1

let now = new Date();

let currentYear = now.getFullYear();
console.log(currentYear);

let firstName = prompt("What's your first name?");
let lastName = prompt("What's your last name?");
let studyArea = prompt("What do you want to study?");
let birthYear = Number(prompt("When you were born?"));
let age = currentYear - birthYear;

console.log(`Welcome ${firstName} ${lastName}, you want to study ${studyArea} right? i see that you're ${age}`);

//  Exercicio 2

let firstNumber = Number(prompt("Insert number 1"));
let secondNumber = Number(prompt("Insert number 2"));

let plus = firstNumber + secondNumber;
let minus = firstNumber - secondNumber;
let times = firstNumber * secondNumber;
let division = firstNumber / secondNumber;

let results = [plus, minus, times, division];

for (i = 0; i < results.length; i++) {
  console.log(results[i]);
}
