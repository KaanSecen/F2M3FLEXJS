let opgave, getalA, getalB, input1, som, antwoord, execButton, container;

opgave = document.getElementById("opgave");
input1 = document.getElementById("input1");
execButton = document.getElementById("execButton");
container = document.getElementById("container");
foutshow = document.getElementById("showfout");
goedshow = document.getElementById("showgoed");
let fout = 0;
let goed = 0;


function maakOpgave() {
  getalA = Math.floor(Math.random() * 11);
  getalB = Math.floor(Math.random() * 11);
  som = getalA * getalB;

  opgave.innerHTML = getalA + "x" + getalB;
}

execButton.addEventListener("click", checkAntwoord);

function checkAntwoord() {
  if (som == input1.value) {
    goed += 1;
    goedshow.innerHTML = "Goed: " + goed;
    container.style.background = "#29702b";
    setTimeout(Wachten, 1000);
  } else {
    fout += 1;
    foutshow.innerHTML = "Fout: " + fout;
    container.style.background = "#702929";
    setTimeout(Wachten, 1000);
  }
}

function Wachten() {
  input1.value = "";
  container.style.background = "#f8f8f8";
  maakOpgave();
}

document.addEventListener("DOMContentLoaded", maakOpgave);
