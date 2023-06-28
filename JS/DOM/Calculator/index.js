import switchTheme, {enableTyping,copyContent} from "./modules.js";

const inputCalc = document.getElementById("inputCalc");
const inputResult = document.getElementById("inputResult");


// Funcionamento das teclas

let keys = document.querySelectorAll(".keyBtn");

keys.forEach(function (button) {
  button.addEventListener("click", function () {
    let value = button.dataset.value;
    inputCalc.value += value;
  });
});

// Funcionamento da digitação

enableTyping()

// Botão de limpar

document.getElementById("clear").addEventListener("click", function () {
  inputCalc.value = "";
});

// Funcionamento do Botão de resolver

document.getElementById("equal").addEventListener("click", calculate);

// Copiar para o clipboard

document.getElementById("copyButton").addEventListener("click", copyContent);

// Botão de Trocar o tema da página

document.getElementById("themeButton").addEventListener("click", switchTheme);

// Função de resultado

function calculate() {
  inputCalc.focus();
  if (inputCalc.value === "") {
    inputResult.value = "";
  } else {
    inputResult.value = "ERROR";
    inputResult.style.backgroundColor = "var(--error-color)";
    inputResult.value = eval(inputCalc.value);
    inputResult.style.backgroundColor = "var(--back-color)";
    inputCalc.value = "";
  }
}





