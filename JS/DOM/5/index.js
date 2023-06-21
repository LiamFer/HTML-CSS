const form = document.getElementById("formulario");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const firstName = ev.currentTarget.children.name.value;
  const lastName = ev.currentTarget.children.lastname.value;
  const age = ev.currentTarget.children.age.value;
  const skin = document.querySelector('input[name="skintone"]:checked').value;
  const favoriteGame = document.getElementById("selectionid").value;
  const textArea = document.querySelector('textarea[name="areatext"').value;

  let videoGames = "";
  document
    .querySelectorAll("input[name = 'checkboxes']:checked")
    .forEach(function (checkbox) {
      videoGames += `- ${checkbox.value} `;
    });

  let allData = {
    fullname: `${firstName} ${lastName}`,
    age,
    skin,
    favoriteGame,
    textArea,
    videoGames,
  };

  console.log(allData);
});
