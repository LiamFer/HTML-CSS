var button = document.getElementById("button");
button.addEventListener("click", generator);

function generator() {
  var tab = document.getElementById("seltab");
  var number = Number(document.getElementById("number").value);
  tab.innerHTML = "";
  if (number.length == 0) {
    alert("Please type a number");
  } else {
    for (var start = 1; start <= 10; start++) {
      var number = Number(document.getElementById("number").value);
      var solve = number * start;
      var text = document.createElement("option");
      text.text = `${number} X ${start} = ${solve}`;
      text.value = `tab${start}`;
      tab.appendChild(text);
    }
  }
}
