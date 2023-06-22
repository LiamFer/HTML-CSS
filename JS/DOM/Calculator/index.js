const main = document.querySelector("main");
const inputCalc = document.getElementById("inputCalc");
const inputResult = document.getElementById("inputResult");
const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

// Funcionamento das teclas

let keys = document.querySelectorAll(".keyBtn");

keys.forEach(function (button) {
  button.addEventListener("click", function () {
    let value = button.dataset.value;
    inputCalc.value += value;
  });
});

// Funcionamento da digitação

inputCalc.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  // Verificar se as teclas digitadas são válidas
  if (allowedKeys.includes(ev.key)) {
    inputCalc.value += ev.key;
  }
  // Permitir o delete no campo
  if (ev.key === "Backspace") {
    inputCalc.value = inputCalc.value.slice(0, -1);
  }
  // Efetuar o calculo com os valores do input
  if (ev.key === "Enter") {
    calculate();
  }
});

// Botão de limpar

document.getElementById("clear").addEventListener("click", function () {
  inputCalc.value = "";
});

// Funcionamento do Botão de resolver

document.getElementById("equal").addEventListener("click", calculate);

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

// Copiar para o clipboard

const copyBtn = document.getElementById("copyButton");

copyBtn.addEventListener("click", function () {
  if (copyBtn.innerText === "Copy") {
    copyBtn.innerText = "Copied :)";
    navigator.clipboard.writeText(inputResult.value);
    setTimeout(function () {
      copyBtn.innerText = "Copy";
    }, 2000);
  }
});

// Botão de Trocar o tema da página

const themeButton = document.getElementById("themeButton");
const root = document.querySelector(":root");

themeButton.addEventListener("click", function () {
  console.log(root);
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--back-color", "#ffffff");
    root.style.setProperty("--accent-color", "#dd7834");
    root.style.setProperty("--font-color", "rgb(17, 17, 17)");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--back-color", "#131214");
    root.style.setProperty("--accent-color", "#8934dd");
    root.style.setProperty("--font-color", "white");
    main.dataset.theme = "dark";
  }
});
