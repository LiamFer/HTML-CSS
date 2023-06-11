let menu = "";

function areaRetangulo(base, altura) {
  let resultado = base * altura;
  return resultado;
}

function areaTriangulo(base, altura) {
  let resultado = areaRetangulo(base, altura) / 2;
  return resultado;
}

function areaQuadrado(lado) {
  let resultado = lado * lado;
  return resultado;
}

function areaTrapezio(baseMaior, baseMenor, altura) {
  let resultado = ((baseMaior + baseMenor) * altura) / 2;
  return resultado;
}

function areaCirculo(raio) {
  let resultado = 3.14 * (raio * raio);
  return resultado;
}

do {
  menu = prompt(
    `Escolha o que deseja calcular:\n\n1.Área de um Triângulo\n2.Área de um Retângulo\n3.Área de um Quadrado\n4.Área de um Trapézio\n5.Área de um círculo\n6.Sair`
  );

  switch (menu) {
    case "1":
      let triangulo = areaTriangulo(
        prompt("Qual o tamanho da base?"),
        prompt("Qual a altura?")
      );
      alert(`O tamanho da área do triângulo é: ${triangulo}`);
      break;
    case "2":
      let retangulo = areaRetangulo(
        prompt("Qual o tamanho da base?"),
        prompt("Qual a altura?")
      );
      alert(`O tamanho da área do retângulo é: ${retangulo}`);
      break;
    case "3":
      let quadrado = areaQuadrado(
        prompt("Qual a medida dos lados do quadrado?")
      );
      alert(`O tamanho da área do quadrado é: ${quadrado}`);
      break;
    case "4":
      let trapezio = areaTrapezio(
        parseFloat(prompt("Qual o tamanho da Base maior?")),
        parseFloat(prompt("Qual o tamanho da Base menor?")),
        prompt("Qual a altura do trapézio?")
      );
      alert(`O tamanho da área do trapézio é: ${trapezio}`);
      break;
    case "5":
      let circulo = areaCirculo(prompt("Qual o raio do círculo?"));
      alert(`O tamanho da área do círculo é: ${circulo}`);
      break;
    case "6":
      alert("Encerrando...");
  }
} while (menu !== "6");
