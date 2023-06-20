const escalateBtn = document.getElementById("escalateBtn");
const removeBtn = document.getElementById("removeBtn");
escalateBtn.addEventListener("click", escalatePlayer);
removeBtn.addEventListener("click", removePlayer);

let teamPlayers = [];
let elementPlayers = [];

function escalatePlayer() {
  const lista = document.getElementById("lista-players");

  // Escalate Player Variables
  let playerPosition = document.getElementById("Playerposition").value;
  let playerName = document.getElementById("Playername").value;
  let playerNumber = document.getElementById("Playernumber").value;

  // Checar se os inputs estão preenchidos
  if (
    playerPosition.length === 0 ||
    playerName.length === 0 ||
    playerNumber.length === 0
  ) {
    return alert("Insira os dados do jogador!");
  }

  // Criação do elemento do jogador
  let box = document.createElement("li");
  let h3 = document.createElement("h3");
  let position = document.createElement("p");
  let number = document.createElement("p");
  h3.innerText = `Jogador -> ${playerName}`;
  position.innerText = `Posição -> ${playerPosition}`;
  number.innerText = `Número -> ${playerNumber}`;
  box.append(h3, position, number);
  lista.appendChild(box);

  let player = {
    position: playerPosition,
    name: playerName,
    number: playerNumber,
  };

  elementPlayers.push(box);
  teamPlayers.push(player);
}

function removePlayer() {
  const lista = document.getElementById("lista-players");
  // Remove Player Variable
  let removePlayerNumber = document.getElementById("Removeplayernumber").value;

  if (removePlayerNumber.length === 0) {
    return alert("Insira o número para remover o jogador!");
  }

  let indexRemove = 0;

  teamPlayers.forEach(function (element, index) {
    if (element.number === removePlayerNumber) {
      indexRemove = index;
    }
  });

  teamPlayers.splice(indexRemove, 1);
  lista.removeChild(elementPlayers[indexRemove]);
  elementPlayers.splice(indexRemove, 1);
  console.log(teamPlayers);
  console.log(elementPlayers);
}
