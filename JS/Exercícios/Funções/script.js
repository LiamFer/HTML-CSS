var numbers_list = [];
var add_button = document.getElementById("addbutton");
add_button.addEventListener("click", adicionar);

function adicionar() {
  var number = Number(document.getElementById("inumber").value);
  var selection = document.getElementById("iselections");
  var decision = 0;

  if (number < 0 || number > 100) {
    alert("O Número é inválido!");
  } else {
    for (var i in numbers_list) {
      if (number == numbers_list[i]) {
        console.log(`O número ${number} já está na lista`);
        break;
      } else {
        decision++;
      }
    }
    if (decision == numbers_list.length) {
      numbers_list.push(number);
      console.log(numbers_list);
      var add_option = document.createElement("Option");
      add_option.innerText = `Valor ${number} adicionado`;
      selection.appendChild(add_option);
    } else {
      alert(`O número ${number} já está na lista`);
    }
  }
}
