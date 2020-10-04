"use strict";
var Coets = /** @class */ (function () {
    function Coets(codi, numPropulsors) {
        this.propulsorsArray = new Array();
        this.codi = codi;
        this.numPropulsors = numPropulsors;
    }
    Coets.prototype.addPropulsor = function (propulsor) {
        this.propulsorsArray.push(propulsor);
    };
    Coets.prototype.accelerar = function () {
        document.getElementById("resultat").innerHTML = "";
        document.getElementById("resultatPotencia").innerHTML = "";
        document.getElementById("resultatPotenciaTots").innerHTML = "";
        var i;
        var j;
        for (i = 0; i < this.propulsorsArray.length; i++) {
            for (j = 0; j < this.propulsorsArray[i].currentPot.length; j++) {
                if ((this.propulsorsArray[i].currentPot[j]) < (this.propulsorsArray[i].maxPot[j])) {
                    this.propulsorsArray[i].currentPot[j] += 10;
                }
                console.log(this.propulsorsArray);
                var potencia = "";
                potencia = potencia + "El coet " + this.codi + " té una potencia actual de " + this.propulsorsArray[i].currentPot + "<br>" + "<br>";
                document.getElementById("resultatPotencia").innerHTML = potencia;
            }
        }
    };
    Coets.prototype.frenar = function () {
        document.getElementById("resultat").innerHTML = "";
        document.getElementById("resultatPotencia").innerHTML = "";
        document.getElementById("resultatPotenciaTots").innerHTML = "";
        var i;
        var j;
        for (i = 0; i < this.propulsorsArray.length; i++) {
            for (j = 0; j < this.propulsorsArray[i].currentPot.length; j++) {
                if ((this.propulsorsArray[i].currentPot[j]) > (this.propulsorsArray[i].minPot[j])) {
                    this.propulsorsArray[i].currentPot[j] -= 10;
                }
                console.log(this.propulsorsArray);
                var potencia = "";
                potencia = potencia + "El coet " + this.codi + " té una potencia actual de " + this.propulsorsArray[i].currentPot + "<br>" + "<br>";
                document.getElementById("resultatPotencia").innerHTML = potencia;
            }
        }
    };
    Coets.prototype.veureInfo = function () {
        document.getElementById("resultat").innerHTML = "";
        document.getElementById("resultatPotencia").innerHTML = "";
        document.getElementById("resultatPotenciaTots").innerHTML = "";
        var i;
        var j;
        for (i = 0; i < this.propulsorsArray.length; i++) {
            console.log(this.propulsorsArray);
            var potencia = "";
            potencia = potencia + "El coet " + this.codi + " té una potencia actual de " + this.propulsorsArray[i].currentPot + "<br>" + "<br>";
            document.getElementById("resultatPotencia").innerHTML = potencia;
        }
    };
    return Coets;
}());
