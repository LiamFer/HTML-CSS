var button = document.getElementById("button");
button.addEventListener("click", generator);

function generator() {
  for (var start = 1; start <= 10; start++) {
    var number = Number(document.getElementById("number").value);
    var solve = number * start;
    console.log(`${number} X ${start} = ${solve} `);
  }
}
