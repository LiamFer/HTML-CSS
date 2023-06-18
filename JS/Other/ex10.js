let vagas = [
  {
    nome: "Vaga 1",
    candidatos: ["William", "Thiago", "hugo"],
    descricao: "Vaga mnagal",
    dataLimite: "Junho-2022",
  },
  {
    nome: "Vaga 23123212",
    candidatos: [],
    descricao: "tesssste",
    dataLimite: "adsqwjdqwodkowdq",
  },
];

function Program() {
  let menu = "";
  do {
    menu = prompt(
      "Sistema de Vagas de Emprego\n\n1. Listar vagas disponíveis\n2. Criar uma nova vaga\n3. Visualizar vaga\n4. Inscrever um candidato em uma vaga\n5. Excluir uma vaga\n6. Sair"
    );

    switch (menu) {
      case "1":
        listarVagas(vagas);
        break;
      case "2":
        novaVaga(vagas);
        break;
      case "3":
        visualizarVaga(vagas);
        break;
      case "4":
        inscreverCandidato(vagas);
        break;
      case "5":
        excluirVaga(vagas);
        break;
      default:
        alert(`${menu} não é uma opção válida, selecione outra!`);
        alert;
    }
  } while (menu != 6);
}

function listarVagas(arr) {
  arr.forEach(function (item, index) {
    let showVagas = `Vaga Índice: ${index + 1}\nNome da Vaga: ${
      item.nome
    }\nDescrição: ${item.descricao}\nQuantidade de Candidatos: ${
      item.candidatos.length
    }`;
    alert(showVagas);
  });
  alert("Não existem mais vagas!");
  alert("Retornando ao menu...");
}

function novaVaga(arr) {
  let vaga = {
    nome: prompt("Qual o nome da vaga?"),
    candidatos: [],
    descricao: prompt("Insira uma breve descrição sobre a vaga:"),
    dataLimite: prompt("Qual a data limite da vaga?"),
  };
  let check = confirm(
    `As informações estão corretas?\nNome da Vaga: ${vaga.nome}\nDescrição da vaga: ${vaga.descricao}\nData Limite: ${vaga.dataLimite}?`
  );

  if (check) {
    arr.push(vaga);
  } else {
    novaVaga(arr);
  }
}

function visualizarVaga(arr) {
  let indice = Number(prompt("Qual o índice da vaga?"));

  if (indice <= 0 || indice > arr.length) {
    return alert("Vaga não encontrada!");
  }

  let vaga = arr.filter(function (element, index) {
    return index === indice - 1
  });

  let candidatos = "";
  vaga[0].candidatos.forEach(function (element, index) {
    candidatos += `${index + 1}. ${element}\n`;
  });
  alert(
    `Vaga: ${indice}\nNome: ${vaga[0].nome}\nDescrição: ${vaga[0].descricao}\nData Limite: ${vaga[0].dataLimite}\nQuantidade de Candidatos: ${vaga[0].candidatos.length}\nCandidatos:\n\n${candidatos}`
  );
}

function inscreverCandidato(arr) {
  let nomeCandidato = prompt("Qual o nome do candidato?");
  let indice = Number(prompt("Qual o índice da vaga?"));

  if (indice <= 0 || indice > arr.length) {
    return alert("Vaga não encontrada!");
  }

  let vaga = `Vaga Índice: ${indice}\nNome da Vaga: ${
    arr[indice - 1].nome
  }\nDescrição: ${arr[indice - 1].descricao}\nQuantidade de Candidatos: ${
    arr[indice - 1].candidatos.length
  }`;

  let check = confirm(`Deseja adicionar ${nomeCandidato} na vaga:\n\n${vaga}`);

  if (check) {
    arr[indice - 1].candidatos.push(nomeCandidato);
    return alert("Candidato adicionado com sucesso!");
  } else {
    inscreverCandidato(arr);
  }
}

function excluirVaga(arr) {
  let indice = Number(prompt("Qual o índice da vaga?"));

  if (indice <= 0 || indice > arr.length) {
    return alert("Vaga não encontrada!");
  }

  let vaga = `Vaga Índice: ${indice}\nNome da Vaga: ${
    arr[indice - 1].nome
  }\nDescrição: ${arr[indice - 1].descricao}\nQuantidade de Candidatos: ${
    arr[indice - 1].candidatos.length
  }`;

  let check = confirm(`Deseja excluir a vaga:\n\n${vaga}`);
  if (check) {
    arr.splice(indice - 1, 1);
    return alert(`A vaga com Índice ${indice} foi removida do sistema!`);
  } else {
    excluirVaga(arr);
  }
}

Program();
