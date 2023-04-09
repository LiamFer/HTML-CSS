var numbers_list = [];
var add_button = document.getElementById("addbutton");
add_button.addEventListener("click", adicionar);
var finish_button = document.getElementById("finishbutton");
finish_button.addEventListener("click", finalizar);

var box = document.getElementById("result");

function adicionar() {
  var number = Number(document.getElementById("inumber").value);
  var selection = document.getElementById("iselections");
  var decision = 0;
  box.style.display = "none";

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

function finalizar() {
  var totalnumberstxt = document.getElementById("result1");
  var highnumbertxt = document.getElementById("result2");
  var lownumbertxt = document.getElementById("result3");
  var sumtxt = document.getElementById("result4");
  var averagetxt = document.getElementById("result5");

var totalnumbers = numbers_list.length
  var maxnumber = numbers_list[0];
  var minnumber = numbers_list[0];
  var total = 0;
  var average = 0;

  for (var j in numbers_list) {
    if (numbers_list[j] > maxnumber) {
      maxnumber = numbers_list[j];
    }
  }

  for (var j in numbers_list) {
    if (numbers_list[j] < minnumber) {
      minnumber = numbers_list[j];
    }
  }

  for (var j in numbers_list) {
    total += numbers_list[j];
  }

  average = total/totalnumbers

  if (numbers_list.length == 0) {
    alert("Nenhum número foi adicionado!");
  } else {
    box.style.display = "block";
    totalnumberstxt.innerText = `Ao todo, temos ${totalnumbers} números cadastrados.`;
    highnumbertxt.innerText = `O maior valor informado foi ${maxnumber}.`
    lownumbertxt.innerText = `O menor valor informado foi ${minnumber}.`
    sumtxt.innerText = `Somando todos os valores, temos ${total}.`
    averagetxt.innerText = `A média dos valores digitados é ${average}.`
  }
}
