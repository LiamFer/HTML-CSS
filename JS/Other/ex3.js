const metros = parseFloat(
  prompt("Insira um valor em metros para ser convertido:")
);
let uniMedida = parseFloat(prompt(
  "Para qual unidade você deseja converter? (1 mm/ 2 cm/ 3 dm/ 4 dam/ 5 hm/ 6 km)"
))

switch (uniMedida) {
  case 1:
    alert("A conversão de metros para mm é" + metros * 1000);
    break;
  case 2:
    alert("A conversão de metros para cm é" + metros * 100);
    break;
  case 3:
    alert("A conversão de metros para dm é" + metros * 10);
    break;
  case 4:
    alert("A conversão de metros para dam é" + metros * 0.1);
    break;
  case 5:
    alert("A conversão de metros para hm é" + metros * 0.01);
    break;
  case 6:
    alert("A conversão de metros para km é" + metros * 0.001);
    break;
}
