var button = document.getElementById("button");
button.addEventListener("click", calculate);

function calculate() {
  var start = Number(document.getElementById("start").value);
  var end = Number(document.getElementById("end").value);
  var step = Number(document.getElementById("step").value);
  var textbox = document.getElementById("text");
  textbox.innerText = "";

  if (start < 0 || end < start || step == 0) {
    alert("Error, something is wrong!");
  } else {
    for (start; start < end; start = start + step) {
      var text = document.createTextNode(`${start} e `);
      textbox.appendChild(text);
    }
    var finaltxt = document.createTextNode("Fim");
    textbox.appendChild(finaltxt);
  }
}
