let medida = parseFloat(prompt("Insira um valor em Metros"));

const choice = prompt(
  "Quer converter esse valor para quanto?\na) milímetro\nb) centímetro\nc) decímetro\nd) decâmetro\ne) hectômetro\nf) quilômetro"
);

switch (choice) {
  case "a":
    medida *= 1000;
    alert(`A conversão de metros para milímetros é ${medida}`);
    break;
  case "b":
    medida *= 100;
    alert(`A conversão de metros para centímetros é ${medida}`);
    break;
  case "c":
    medida *= 10;
    alert(`A conversão de metros para decímetro é ${medida}`);
    break;
  case "d":
    medida /= 10;
    alert(`A conversão de metros para decâmetro é ${medida}`);
    break;
  case "e":
    medida /= 100;
    alert(`A conversão de metros para hectômetro é ${medida}`);
    break;
  case "f":
    medida /= 1000;
    alert(`A conversão de metros para quilômetro é ${medida}`);
    break;
  default:
    alert("Essa opção não existe");
}
