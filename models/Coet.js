"use strict";
var Coets = /** @class */ (function () {
    function Coets(codi, numPropulsors) {
        this.propulsors = new Array();
        this.codi = codi;
        this.numPropulsors = numPropulsors;
    }
    Coets.prototype.addPropulsor = function (propulsor) {
        this.propulsors.push(propulsor);
    };
    return Coets;
}());
