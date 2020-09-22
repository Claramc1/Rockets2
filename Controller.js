var llistaCoets = [];
//let coet1:any;
//let coet2:any;
//coet1 = new Coets("32WESSDS", 3, [10,30,80], [0,0,0]);
//llistaCoets.push(coet1);
//coet2 = new Coets("LDSFJA32", 6, [30,40,50,50,30,10], [0,0,0,0,0,0]);
//llistaCoets.push(coet2);
//console.log(llistaCoets);
var result = "";
var i;
function infoMaxPot() {
    for (i = 0; i < llistaCoets.length; i++) {
        result = result + "El coet " + llistaCoets[i].codi + " té " + llistaCoets[i].propulsors + " propulsors d'una potència màxima de " + llistaCoets[i].maxPot + "<br>" + "<br>";
        document.getElementById("resultat").innerHTML = result;
    }
}
function info() {
    var potencia = "";
    for (i = 0; i < llistaCoets.length; i++) {
        potencia = potencia + "El coet " + llistaCoets[i].codi + " té una potencia actual de " + llistaCoets[i].currentPot + "<br>" + "<br>";
        document.getElementById("resultatPotencia").innerHTML = potencia;
    }
    infoMaxPot();
}
function crear() {
    var coet1;
    var codi = prompt("Codi del coet:");
    var propulsors = parseInt(prompt("Introdueix el nombre de propulsors de " + codi + ":"));
    var maxPot = [];
    for (i = 0; i < propulsors; i++) {
        var maxPotEach = void 0;
        maxPotEach = parseInt(prompt("Introdueix la potència màxima del propulsor " + (i + 1) + " :"));
        maxPot.push(maxPotEach);
    }
    var currentPot = [];
    for (i = 0; i < propulsors; i++) {
        currentPot.push(0);
    }
    coet1 = new Coets(codi, propulsors, maxPot, currentPot);
    llistaCoets.push(coet1);
    console.log(llistaCoets);
}
//coet1.accelerar();
//coet1.frenar();
console.log(llistaCoets);
// cal agafar per l'id el num del  coet
