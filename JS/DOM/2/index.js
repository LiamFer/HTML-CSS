const newContact = document.getElementById("New");
const removeContact = document.getElementById("Remove");
const contactsFather = document.getElementById("contacts");
newContact.addEventListener("click", contactNew);
removeContact.addEventListener("click", contactRemove);
let contactList = [];

function contactNew() {
  let box = document.createElement("div");
  let ul = document.createElement("ul");

  let liTypes = ["Nome", "Telefone", "Endereço"];
  let inputTypes = ["text", "number", "text"];

  liTypes.forEach(function (i,index) {
    let li = document.createElement("li");
    let input = document.createElement("input");
    let h3 = document.createElement("h3");
    h3.innerText = "Contact";
    li.innerText = i;
    input.type = `${inputTypes[index]}`;
    li.appendChild(input);
    ul.appendChild(li);
  });

  box.appendChild(ul);
  contactsFather.appendChild(box);
  contactList.push(box);
  console.log(contactList);
}

function contactRemove() {
  contactsFather.removeChild(contactList[contactList.length - 1]);
  contactList.pop();
}
