var numbers_list = [];
var add_button = document.getElementById("addbutton");
add_button.addEventListener("click", adicionar);

function adicionar() {
  var number = Number(document.getElementById("inumber").value);
  var selection = document.getElementById("iselections");

  if (number < 0 || number > 100) {
    alert("O Número é inválido!");
  } else {

    if ()

    numbers_list.push(number);
    console.log(numbers_list);
    var add_option = document.createElement("Option");
    add_option.innerText = `Valor ${number} adicionado`;
    selection.appendChild(add_option);
  }
}
