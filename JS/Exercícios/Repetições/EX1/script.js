var button = document.getElementById("button");
button.addEventListener("click", calculate);

function calculate() {
  var start = Number(document.getElementById("start").value);
  var end = Number(document.getElementById("end").value);
  var step = Number(document.getElementById("step").value);
  var textbox = document.getElementById("text");
  textbox.innerText = "";

  if (start.length == 0 || end.length == 0 || step.length == 0) {
    alert("Error, something is wrong!");
  } else if (start > end) {
    for (end; start <= end; start = end -= step) {
      textbox.innerText += ` ${start} \u{1F449}`;
    }
    textbox.innerText += `\u{1F9A7}`;
  } else {
    for (start; start <= end; start = start + step) {
      textbox.innerText += ` ${start} \u{1F449}`;
    }
    textbox.innerText += `\u{1F9A7}`;
  }
}
