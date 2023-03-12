var button = document.getElementById("button");
button.addEventListener("click", verificador);

function verificador() {
  var now = new Date();
  var currentYear = now.getFullYear();
  var year = document.getElementById("born");
  var yearInput = Number(year.value);
  var gender = document.getElementsByName("gender");
  var age = currentYear - yearInput;
  var image = document.getElementById("image");
  var paragraph = document.getElementById("text");
  var sex = "";
  var resultbox = document.getElementById("box");

  if (
    year.value.length == 0 ||
    yearInput > currentYear ||
    year.value.length == 1 ||
    year.value.length == 2 ||
    year.value.length == 3 ||
    yearInput < 1920
  ) {
    alert("[ERROR]");
  } else {
    if (gender[0].checked) {
      resultbox.style.display = "block";
      if (age < 14) {
        sex = "Criança";
        paragraph.innerText = `Detectamos ${sex} com ${age} anos de idade.`;
        image.src = "images/boy.jpg";
      } else if (age < 65) {
        sex = "Homem";
        paragraph.innerText = `Detectamos ${sex} com ${age} anos de idade.`;
        image.src = "images/man.jpg";
      } else {
        sex = "Idoso";
        paragraph.innerText = `Detectamos ${sex} com ${age} anos de idade.`;
        image.src = "images/old-man.jpg";
      }
    } else if (gender[1].checked) {
      resultbox.style.display = "block";
      if (age < 14) {
        sex = "Criança";
        paragraph.innerText = `Detectamos ${sex} com ${age} anos de idade.`;
        image.src = "images/girl.jpg";
      } else if (age < 65) {
        sex = "Mulher";
        paragraph.innerText = `Detectamos ${sex} com ${age} anos de idade.`;
        image.src = "images/woman.jpg";
      } else {
        sex = "Idosa";
        paragraph.innerText = `Detectamos ${sex} com ${age} anos de idade.`;
        image.src = "images/old-woman.jpg";
      }
    }
  }
}
