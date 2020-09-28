let coet: Coets;
var llistaCoets: any = [];

//let coet1:any;
//let coet2:any;
//coet1 = new Coets("32WESSDS", 3, [10,30,80], [0,0,0]);
//llistaCoets.push(coet1);
//coet2 = new Coets("LDSFJA32", 6, [30,40,50,50,30,10], [0,0,0,0,0,0]);
//llistaCoets.push(coet2);
//console.log(llistaCoets);

var result ="";
let i:number;

function crear(){
    let codi = prompt("Codi del coet:");
    var numPropulsors = prompt("Introdueix el nombre de propulsors de "+ codi + ":");
    let coet=new Coets(codi,numPropulsors);
    llistaCoets.push(coet);
    console.log(coet);
    crearPropulsors();


function crearPropulsors(){
    let maxPot =[];
    for(i=0;i<parseInt(numPropulsors);i++){
        let maxPotEach:number;
        maxPotEach = parseInt(prompt("Introdueix la potència màxima del propulsor "+ (i+1)+ " :"));
        maxPot.push(maxPotEach);
    }

    let currentPot=[];
    for(i=0;i<numPropulsors;i++){
        currentPot.push(0);
    }
    console.log(coet.propulsors);
    coet.addPropulsor(new Propulsor(maxPot,currentPot));
 
}



    /*coet1 = new Coets(codi, propulsors, maxPot, currentPot);
    llistaCoets.push(coet1);*/
    console.log(llistaCoets);
}


/*



function infoMaxPot(){
    for(i=0;i<llistaCoets.length;i++){
        result = result + "El coet "+ llistaCoets[i].codi +" té "+ llistaCoets[i].propulsors +" propulsors d'una potència màxima de "+ llistaCoets[i].maxPot +"<br>"+ "<br>";
        document.getElementById("resultat").innerHTML = result;
    }
}

function info(){
    var potencia="";
    for(i=0;i<llistaCoets.length;i++){
        potencia = potencia + "El coet "+ llistaCoets[i].codi +" té una potencia actual de "+ llistaCoets[i].currentPot + "<br>"+ "<br>";
        document.getElementById("resultatPotencia").innerHTML = potencia;
    }
    infoMaxPot();
}
*/



//coet1.accelerar();
//coet1.frenar();
console.log(llistaCoets);

// cal agafar per l'id el num del  coet