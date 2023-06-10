// Fila de espera em um Consultório Médico :0
/*
let pacients = ["jorge", "thiago", "Whilliam"];
let menu = "";
let order = "";
let newPacient = "";
let removPacient = "";

do {
  order = "";
  for (let i = 0; i < pacients.length; i++) {
    order += `${i + 1}° ${pacients[i]}\n`;
  }
  menu = parseFloat(
    prompt(
      `Seja bem vindo ao consultório, pacientes na fila:\n\n${order}\nO que deseja fazer?\n1.Novo Paciente\n2.Consultar Paciente\n3.Sair`
    )
  );

  if (menu === 1) {
    newPacient = prompt("Qual o nome do novo paciente?");
    pacients.push(newPacient);
  } else if (menu === 2) {
    removPacient = pacients.shift();
    alert(`O paciente ${removPacient} foi consultado com sucesso`);
  }
} while (menu < 3);

alert("Voce saiu do consultório");
*/

let cards = ["Rei", "Rainha", "Peão"];
let allcards = "";
let menu = "";
let newCard = "";
let slipCard = "";

do {
  allcards = "";
  for (let j = 0; j < cards.length; j++) {
    allcards += `${j + 1} - ${cards[j]}\n`;
  }

  menu = parseFloat(
    prompt(
      `As cartas que atualmente estão no baralho são:\n${allcards}\nO que deseja fazer?\n1.Adicionar uma carta\n2.Puxar uma carta\n3.Sair`
    )
  );

  if (menu === 1) {
    newCard = prompt("Qual é o nome da nova carta a ser adicionada?");
    cards.push(newCard);
  } else if (menu === 2) {
    slipCard = cards.pop();
    alert(`A carta puxada foi ${slipCard}`);
  }
} while (menu < 3);

alert('Quitou do jogo....')
