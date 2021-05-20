let table = document.getElementById("Puzzle");
for (let i = 0; i < 8; i++) {
  var row = table.insertRow(i);

  for (var j = 0; j < 8; j++) {
    var cells = row.insertCell();
    cells.classList.add("blok");
    cells.style.background = "red";

    cells.addEventListener("click", (evt) => {
      evt.target.style.background = "green";
      if (evt.target.offsetTop == "296") {
        document.getElementById("antwoord").innerHTML = "Goedzo je hebt hem (Bekijk hier mijn github)";
      } else {
        document.getElementById("antwoord").innerHTML = "Sorry dat is niet de juiste blokje"
      }
    });
  }
}
