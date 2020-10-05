"use strict";
var coet;
var llistaCoets = [];
var coet1;
var coet2;
/*coet1 = new Coets("32WESSDS", 3);
let propulsors1: any;
propulsors1 = new Propulsor([10, 30, 80], [0, 0, 0], [0, 0, 0]);
coet1.addPropulsor(propulsors1);
llistaCoets.push(coet1);

coet2 = new Coets("LDSFJA32", 6);
let propulsors2: any;
propulsors2 = new Propulsor([30, 40, 50, 50, 30, 10], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]);
coet2.addPropulsor(propulsors2);
llistaCoets.push(coet2);*/
console.log(llistaCoets);
var result = "";
var i;
var numPropulsors;
function crear() {
    var codi = prompt("Codi del coet:");
    numPropulsors = prompt("Introdueix el nombre de propulsors de " + codi + ":");
    if (codi == null || numPropulsors == null) {
        var errorClass = document.getElementById("resultat");
        errorClass.innerHTML = "Sisplau, revisa els valors introduïts.";
    }
    else {
        coet = new Coets(codi, parseInt(numPropulsors));
        llistaCoets.push(coet);
        console.log(coet);
        crearPropulsors();
    }
    function crearPropulsors() {
        var coetEspecific = llistaCoets[(llistaCoets.length - 1)];
        var maxPot = [];
        for (i = 0; i < parseInt(numPropulsors); i++) {
            var maxPotEach = void 0;
            var maxPotString = prompt("Introdueix la potència màxima del propulsor " + (i + 1) + " :");
            maxPotEach = parseInt(maxPotString);
            maxPot.push(maxPotEach);
        }
        var currentPot = [];
        for (i = 0; i < parseInt(numPropulsors); i++) {
            currentPot.push(0);
        }
        var minPot = [];
        for (i = 0; i < parseInt(numPropulsors); i++) {
            minPot.push(0);
        }
        coetEspecific.addPropulsor(new Propulsor(maxPot, currentPot, minPot));
    }
    console.log(llistaCoets);
}
function infoMaxPot() {
    var result = "";
    var j;
    for (i = 0; i < llistaCoets.length; i++) {
        for (j = 0; j < llistaCoets[i].propulsorsArray.length; j++) {
            result = result + "El coet " + llistaCoets[i].codi + " té " + llistaCoets[i].numPropulsors + " propulsors d'una potència màxima de " + llistaCoets[i].propulsorsArray[j].maxPot + "<br>" + "<br>";
            document.getElementById("resultat").innerHTML = result;
        }
    }
}
function info() {
    var potencia = "";
    var j;
    for (i = 0; i < llistaCoets.length; i++) {
        for (j = 0; j < llistaCoets[i].propulsorsArray.length; j++) {
            potencia = potencia + "El coet " + llistaCoets[i].codi + " té una potencia actual de " + llistaCoets[i].propulsorsArray[j].currentPot + "<br>" + "<br>";
            document.getElementById("resultatPotencia").innerHTML = potencia;
        }
    }
    infoMaxPot();
}
function clean() {
    document.getElementById("resultat").innerHTML = "";
    document.getElementById("resultatPotencia").innerHTML = "";
    document.getElementById("resultatPotenciaTots").innerHTML = "";
}
function accelerar(positionArray) {
    clean();
    coet = llistaCoets[positionArray];
    document.getElementById("resultatPotencia").innerHTML = coet.accelerar();
}
function frenar(positionArray) {
    clean();
    coet = llistaCoets[positionArray];
    document.getElementById("resultatPotencia").innerHTML = coet.frenar();
}
function informacio(positionArray) {
    clean();
    coet = llistaCoets[positionArray];
    document.getElementById("resultatPotencia").innerHTML = coet.veureInfo();
}
