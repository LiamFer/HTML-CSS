const form = document.getElementById("formulario");
const techContent = document.getElementById("technologies");
const newBtn = document.getElementById("addTec");
let devData = [{nome_completo:'',tecnologias:[],}];
let techIds = [];
let expIds = [];
let count = 0;

newBtn.addEventListener("click", addTech);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let fullname = document.getElementById("fullname").value;
  devData[0].nome_completo = fullname;

  techIds.forEach(function (id,index) {
    let technology = document.getElementById(id);
    let techName = technology.children.Tecnologia.value;
    let experience = document.querySelector(`input[name="experience${expIds[index]}"]:checked`).value;
    let infos = {
      techName,
      experience,
    };
    devData[0].tecnologias.push(infos);
    console.log(devData);
  });

  techContent.remove();
});

function addTech() {
  let div = document.createElement("div");
  div.id = "tec-box" + count;
  let hr = document.createElement("hr");
  let br = document.createElement("br");
  let labelTec = document.createElement("label");
  labelTec.innerText = "Tecnologia: ";
  let inputTec = document.createElement("input");
  inputTec.type = "text";
  inputTec.name = "Tecnologia";
  div.append(hr, labelTec, inputTec, br);
  div.append(document.createElement("br"));
  let labelTempo = document.createElement("label");
  labelTempo.innerText = "Tempo de Experiência: ";
  div.append(labelTempo);
  div.append(document.createElement("br"));
  div.append(document.createElement("br"));

  let values = ["0-2 Anos", "3-4 Anos", "5+ Anos"];

  for (let i = 0; i < 3; i++) {
    let exp = document.createElement("input");
    let label = document.createElement("label");
    exp.type = "radio";
    exp.name = "experience"+count;
    exp.value = values[i];
    label.innerText = values[i];
    div.append(exp, label);
  }
  div.append(document.createElement("br"));
  div.append(document.createElement("br"));
  let inputRem = document.createElement("input");
  inputRem.type = "button";
  inputRem.class = "remover";
  inputRem.value = "Remover Tecnologia";

  inputRem.addEventListener("click", function (activator) {
    let actualBox = activator.currentTarget.parentNode;
    techIds.forEach(function (id, index) {
      if (id === actualBox.id) {
        techIds.splice(index, 1);
        expIds.splice(index, 1);
        console.log(techIds);
        console.log(expIds);
      }
    });
    alert("Removendo Tecnologia");
    actualBox.remove();
  });
  techIds.push(div.id);
  expIds.push(count);
  div.append(inputRem);
  techContent.append(div);
  count++;
  console.log(div.id);
}
