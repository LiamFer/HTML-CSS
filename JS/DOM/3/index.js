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

  let repeat = 0;

  teamPlayers.forEach(function (element) {
    if (
      element.number === playerNumber ||
      element.position === playerPosition
    ) {
      repeat++;
    }
  });

  if (repeat === 0) {
    let check = confirm(
      `Quer adicionar o jogador ${playerPosition} - ${playerName} - ${playerNumber}?`
    );

    // Criação do elemento do jogador
    if (check) {
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

      document.getElementById("Playerposition").value = '';
      document.getElementById("Playername").value = '';
      document.getElementById("Playernumber").value = '';
    }
  } else {
    return alert("Já existe um jogador com esse número ou posição!");
  }
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

  let nome = teamPlayers[indexRemove].name;
  let posicao = teamPlayers[indexRemove].position;
  let numero = teamPlayers[indexRemove].number;

  let check = confirm(`Remover o jogador ${posicao} - ${nome} - ${numero}?`);

  if (check) {
    teamPlayers.splice(indexRemove, 1);
    lista.removeChild(elementPlayers[indexRemove]);
    elementPlayers.splice(indexRemove, 1);
    console.log(teamPlayers);
    console.log(elementPlayers);
  }

  document.getElementById("Removeplayernumber").value = "";
}

const changer = document.getElementById("changer");
changer.addEventListener("click", change);
let counter = 0;

function change() {
  let box1 = document.getElementById("box1");
  let box2 = document.getElementById("box2");

  if (counter === 0) {
    box1.classList.toggle("change");
    box2.classList.toggle("change");
    box1.classList.remove("backchange");
    box2.classList.remove("backchange");
  } else {
    box1.classList.toggle("change");
    box2.classList.toggle("change");
    box1.classList.toggle("backchange");
    box2.classList.toggle("backchange");
    counter = 0;
  }

  counter++;
}
