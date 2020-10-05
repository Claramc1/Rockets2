class Coets {
  codi: string;
  numPropulsors: number;
  propulsorsArray: Propulsor[] = new Array();

  constructor(codi: string, numPropulsors: number) {
    this.codi = codi;
    this.numPropulsors = numPropulsors;
  }

  addPropulsor(propulsor: Propulsor): void {
    this.propulsorsArray.push(propulsor);
  }

  accelerar() {
    var potencia: any;
    let i: number;
    let j: number;
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
  }

  frenar() {
    var potencia: any;
    let i: number;
    let j: number;
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
  }

  veureInfo() {
    var potencia: any;
    let i: number;
    for (i = 0; i < this.propulsorsArray.length; i++) {
      console.log(this.propulsorsArray);
      potencia = "";
      potencia = potencia + "El coet " + this.codi + " té una potencia actual de " + this.propulsorsArray[i].currentPot + "<br>" + "<br>";
    }
    return potencia;
  }

}
