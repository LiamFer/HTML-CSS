const button = document.getElementsByClassName("btn")[0];
button.addEventListener("click", add);
const span = document.querySelectorAll("h2 > span");
let count = 0;
function add() {
  let times = Number(document.getElementById("times").value);
  console.log(span);

  const listaPai = document.getElementById("dad");

  for (let i = 0; i < times; i++) {
    count++;
    let newLi = document.createElement("li");
    newLi.className = "input";
    newLi.innerText = `${count}. Input `;

    let newInput = document.createElement("input");
    newInput.type = "text";
    newLi.appendChild(newInput);
    listaPai.appendChild(newLi);
    span[0].innerText = count;
  }
}
