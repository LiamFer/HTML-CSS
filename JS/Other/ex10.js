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
      "Sistema de Vagas de Emprego\n\n1. Listar vagas disponíveis\n2. Criar uma nova vaga\n3. Visualizar uma nova vaga\n4. Inscrever um candidato em uma vaga\n5. Excluir uma vaga\n6. Sair"
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
    }
  } while (menu != 6);
}

function listarVagas(arr) {
  let showVagas = "";
  for (let i = 0; i < arr.length; i++) {
    showVagas += `Vaga Índice: ${i + 1}\nNome da Vaga: ${
      arr[i].nome
    }\nDescrição: ${arr[i].descricao}\nQuantidade de Candidatos: ${
      arr[i].candidatos.length
    }`;
    alert(showVagas);
    showVagas = "";
  }
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
    console.log(arr);
  } else {
    novaVaga(arr);
  }
}

function visualizarVaga(arr) {

  let indice = Number(prompt("Qual o índice da vaga?"));

  let vaga = arr.filter(function (element, index) {
    if (index === indice - 1) {
      return element;
    }
  })

  let candidatos = "";
  vaga[0].candidatos.forEach(function (element, index) {
    candidatos += `${index + 1}. ${element}\n`;
  });
  alert(
    `Vaga: ${indice}\nNome: ${vaga[0].nome}\nDescrição: ${vaga[0].descricao}\nData Limite: ${vaga[0].dataLimite}\nQuantidade de Candidatos: ${vaga[0].candidatos.length}\nCandidatos:\n\n${candidatos}`
  );
}

function inscreverCandidato(arr) {}

Program();
