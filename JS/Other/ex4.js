const turista = prompt("Qual seu nome?");
let cidadesVisitadas = "";
let visitou = prompt("Já visitou alguma cidade? (S/N)");

while (visitou === "S") {
  let nomeCidade = prompt("Qual o nome da cidade que você visitou?");
  let visitouOutra = prompt("Já visitou alguma outra cidade? (S/N)");
  if (visitouOutra == "N") {
    cidadesVisitadas += ` ${nomeCidade}.`;
    break;
  }
  cidadesVisitadas += ` ${nomeCidade},`;
}

alert(`Então você ${turista} já visitou: ${cidadesVisitadas}`);

/*
const turista = prompt("Qual seu nome?");
let cidadesVisitadas = [];
let visitou = prompt("Já visitou alguma cidade? (s/n)");

while (visitou === "s") {
  let nomeCidade = prompt("Qual o nome da cidade que você visitou?");
  cidadesVisitadas.push(nomeCidade);
  let visitouOutra = prompt("Já visitou alguma outra cidade? (S/N)");
  visitou = visitouOutra;
}


alert(`Então você ${turista} já visitou: ${cidadesVisitadas}.`) */
