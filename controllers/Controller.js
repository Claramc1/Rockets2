"use strict";
var coet;
var llistaCoets = [];
var coet1;
var coet2;
coet1 = new Coets("32WESSDS", 3);
var propulsors1;
propulsors1 = new Propulsor([10, 30, 80], [0, 0, 0], [0, 0, 0]);
coet1.addPropulsor(propulsors1);
llistaCoets.push(coet1);
coet2 = new Coets("LDSFJA32", 6);
var propulsors2;
propulsors2 = new Propulsor([30, 40, 50, 50, 30, 10], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]);
coet2.addPropulsor(propulsors2);
llistaCoets.push(coet2);
console.log(llistaCoets);
var result = "";
var i;
/*
function crear(numero){
    var codi = prompt("Codi del coet:");
    var numPropulsors = prompt("Introdueix el nombre de propulsors de "+ codi + ":");
        if(codi == null||numPropulsors == null){
        let errorClass = <HTMLInputElement>document.getElementById("resultat");
        errorClass.innerHTML = "Sisplau, revisa els valors introduïts."

        }else{
         let coet = "coet"+numero; ///////////////////////Aquí és on falla. Al passar-ho de Javascript a Typescript, m'ho escriu com coet_1 i no com coet1. (Perquè falli,cal afegir a la funció d'onclick a l'HTML el valor que li passem)
        coet=new Coets(codi,parseInt(numPropulsors));
        llistaCoets.push(coet);
        console.log(coet);
        crearPropulsors();
        }


function crearPropulsors(){ //recorre bucle per saber al coet que correspon (cal pasar una variable tipo codi)
    let coetEspecific = llistaCoets[(llistaCoets.length-1)];
    let maxPot =[];
    for(i=0;i<parseInt(numPropulsors);i++){
        let maxPotEach:number;
        maxPotEach = parseInt(prompt("Introdueix la potència màxima del propulsor "+ (i+1)+ " :"));
        maxPot.push(maxPotEach);
    }

    let currentPot=[];
    for(i=0;i<parseInt(numPropulsors);i++){
        currentPot.push(0);
    }
    let minPot=[];
    for(i=0;i<parseInt(numPropulsors);i++){
        minPot.push(0);
    }
    coetEspecific.addPropulsor(new Propulsor(maxPot,currentPot,minPot));
}
console.log(llistaCoets);
}
 */
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
function accelerar1() {
    coet1.accelerar();
}
function accelerar2() {
    coet2.accelerar();
}
function frenar1() {
    coet1.frenar();
}
function frenar2() {
    coet2.frenar();
}
function informacio1() {
    coet1.veureInfo();
}
function informacio2() {
    coet2.veureInfo();
}
// cal agafar per l'id el num del  coet
