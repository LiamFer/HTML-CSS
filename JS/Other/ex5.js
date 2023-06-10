/*
let options = "";
do {
  options = parseFloat(
    prompt("Escolha uma opção:\n1.One\n2.Two\n3.Three\n4.Four\n5.Encerrar")
  );
  alert(`A opção escolhida foi ${options}`);
} while (options < 5);

alert(`Encerrando...`); */

//  Exercicio 2 de Dinheiro
let money = parseFloat(prompt("Qual seu saldo de dinheiro?"));
let amount = 0;
let question = "";

do {
  question = parseFloat(
    prompt(
      `Você tem R$${money}, qual operação deseja realizar?\n1.Adicionar\n2.Remover\n3.Encerrar`
    )
  );
  if (question == 1) {
    alert("Operação selecionada: Adicionar...");
    amount = parseFloat(prompt("Qual valor?"));
    money += amount;
  } else if (question == 2) {
    alert("Operação selecionada: Remover...");
    amount = parseFloat(prompt("Qual valor?"));
    money -= amount;
  }
} while (question < 3);

alert(`Seu saldo é ${money}`);
alert(`Encerrando...`);
