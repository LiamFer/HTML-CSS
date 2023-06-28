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

function enableTyping(){
const inputCalc = document.getElementById("inputCalc");
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
});}

function themeChanger() {
  const root = document.querySelector(":root");
  const main = document.querySelector("main");
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
}

function copyContent (ev) {
  let button = ev.currentTarget
  if (button.innerText === "Copy") {
    button.innerText = "Copied :)";
    navigator.clipboard.writeText(inputResult.value);
    setTimeout(function () {
      button.innerText = "Copy";
    }, 2000);
  }
}


export {enableTyping, copyContent}
export default themeChanger