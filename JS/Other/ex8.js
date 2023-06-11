// Cadastro de Imóveis

let imoveis = [];
let menu = "";

do {
  menu = prompt(
    `Imóveis cadastrados: ${imoveis.length}\nO que deseja fazer?\n1.Salvar um Imóvel\n2.Mostrar Imóveis\n3.Sair`
  );
  switch (menu) {
    // Adicionando novo imóvel sem ter um nome em si, com base no index do array
    case "1":
      imoveis[imoveis.length] = {
        name: prompt("Qual o nome do proprietário?"),
        rooms: prompt("Qual a quantidade de quartos?"),
        bathrooms: prompt("Qual a quantidade de banheiros?"),
        garage: prompt("O imóvel possui garagem? (s/n)"),
      };
      alert("Imóvel cadastrado com Sucesso!");
      break;

    case "2":
      let allProperties = "";
      for (let i = 0; i < imoveis.length; i++) {
        allProperties += `Proprietário do Imóvel ${i + 1}: ${
          imoveis[i].name
        }\nQuartos: ${imoveis[i].rooms}\nBanheiros: ${
          imoveis[i].bathrooms
        }\nPossui Garagem: ${imoveis[i].garage}\n\n`;
      }
      alert(`Todos os imóveis cadastrados estão a seguir:\n\n${allProperties}`);
      allProperties = "";
      break;

    case "3":
      alert("Encerrando...");
  }
} while (menu !== "3");
