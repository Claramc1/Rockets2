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
        var potencia;
        var i;
        var j;
        for (i = 0; i < this.propulsorsArray.length; i++) {
            for (j = 0; j < this.propulsorsArray[i].currentPot.length; j++) {
                if (this.propulsorsArray[i].currentPot[j] < this.propulsorsArray[i].maxPot[j]) {
                    this.propulsorsArray[i].currentPot[j] += 10;
                }
                console.log(this.propulsorsArray);
                potencia = "";
                potencia = potencia + "El coet " + this.codi + " té una potencia actual de " + this.propulsorsArray[i].currentPot + "<br>" + "<br>";
            }
        }
        return potencia; //El html en controller
    };
    Coets.prototype.frenar = function () {
        var potencia;
        var i;
        var j;
        for (i = 0; i < this.propulsorsArray.length; i++) {
            for (j = 0; j < this.propulsorsArray[i].currentPot.length; j++) {
                if (this.propulsorsArray[i].currentPot[j] > this.propulsorsArray[i].minPot[j]) {
                    this.propulsorsArray[i].currentPot[j] -= 10;
                }
                console.log(this.propulsorsArray);
                potencia = "";
                potencia = potencia + "El coet " + this.codi + " té una potencia actual de " + this.propulsorsArray[i].currentPot + "<br>" + "<br>";
            }
        }
        return potencia;
    };
    Coets.prototype.veureInfo = function () {
        var potencia;
        var i;
        for (i = 0; i < this.propulsorsArray.length; i++) {
            console.log(this.propulsorsArray);
            potencia = "";
            potencia = potencia + "El coet " + this.codi + " té una potencia actual de " + this.propulsorsArray[i].currentPot + "<br>" + "<br>";
        }
        return potencia;
    };
    return Coets;
}());
