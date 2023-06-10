/*
const number = parseFloat(
  prompt("Escolha um número pra ver a tabuada do 1 ao 20:")
);
let result = "O resultado é:";
let charger = 0;

for (let i = 1; i <= 20; i++) {
  charger = number * i;
  result += `\n${number} X ${i} = ${charger}`;
}
alert(result);
*/

let word = prompt(
  "Digite a palavra para efetuar a verificação se ela é um palíndromo ou não:"
);

let verify =''

for (let i = word.length - 1; i >= 0; i--) {
  verify += word[i]
}

if (verify === word) {
  alert(`É um palíndromo!\n${word} = ${verify}`);
} else {
  alert(`Não é um palíndromo!\n${word} != ${verify}`);
}
