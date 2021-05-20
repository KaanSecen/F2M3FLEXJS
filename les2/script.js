let achtergronden = document.getElementsByClassName('achtergrond');
let voorgronden = document.getElementsByClassName('voorgrond');
let achtergrondKleuren = ['green','blue','white'];
let voorgrondKleuren = ['orange', 'yellow','black'];

for(let i = 0; i<achtergronden.length;i++) {
    achtergronden[i].addEventListener("click", function(){
        setAchtergrond(i);
    });
}

function setAchtergrond(i) {
    console.log(i)
    document.body.style.background = achtergrondKleuren[i];
}

for(let i = 0; i<voorgronden.length;i++) {
    voorgronden[i].addEventListener("click", function(){
        setVoorgrond(i);
    });
}

function setVoorgrond(i) {
    console.log(i)
    document.body.style.color = voorgrondKleuren[i];
}