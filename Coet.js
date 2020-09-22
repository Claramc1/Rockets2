var Coets = /** @class */ (function () {
    function Coets(codi, propulsors, maxPot, currentPot) {
        this.codi = codi;
        this.propulsors = propulsors;
        this.maxPot = maxPot;
        this.currentPot = currentPot;
    }
    Coets.prototype.accelerar = function () {
        var i;
        for (i = 0; i < this.currentPot.length; i++) {
            if (((this.currentPot[i]) + 10) <= this.maxPot[i]) {
                this.currentPot[i] = this.currentPot[i] + 10;
            }
        }
        console.log(this.currentPot);
        var potencia = "";
        potencia = potencia + "El coet " + this.codi + " té una potencia actual de " + this.currentPot + "<br>" + "<br>";
        document.getElementById("resultatPotencia").innerHTML = potencia;
    };
    Coets.prototype.frenar = function () {
        var j;
        for (j = 0; j < this.currentPot.length; j++) {
            if (((this.currentPot[j]) - 10) >= 0) {
                this.currentPot[j] = this.currentPot[j] - 10;
            }
        }
        console.log(this.currentPot);
        var potencia = "";
        potencia = potencia + "El coet " + this.codi + " té una potencia actual de " + this.currentPot + "<br>" + "<br>";
        document.getElementById("resultatPotencia").innerHTML = potencia;
    };
    Coets.prototype.veureInfo = function () {
        var potencia = "";
        potencia = potencia + "El coet " + this.codi + " té una potencia actual de " + this.currentPot + "<br>" + "<br>";
        document.getElementById("resultatPotencia").innerHTML = potencia;
    };
    return Coets;
}());
