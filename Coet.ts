class Coets{
    codi:string;
    propulsors:number;
    maxPot:number[];
    currentPot:number[];
    
    constructor(codi:string,propulsors:number,maxPot:number[],currentPot:number[]){
        this.codi=codi;
        this.propulsors=propulsors;
        this.maxPot=maxPot;
        this.currentPot=currentPot;
    }

    accelerar(){
        let i:number;
        for(i=0;i<this.currentPot.length;i++){
            if(((this.currentPot[i])+10)<=this.maxPot[i]){
                this.currentPot[i] = this.currentPot[i]+10;
            }
        }
        console.log(this.currentPot);
        var potencia="";
        potencia = potencia + "El coet "+ this.codi +" té una potencia actual de "+ this.currentPot + "<br>"+ "<br>";
        document.getElementById("resultatPotencia").innerHTML = potencia;
    }

    frenar(){
        let j:number;
        for(j=0;j<this.currentPot.length;j++){
            if(((this.currentPot[j])-10)>=0){
                this.currentPot[j] = this.currentPot[j]-10;
            }
        }
        console.log(this.currentPot);
        var potencia="";
        potencia = potencia + "El coet "+ this.codi +" té una potencia actual de "+ this.currentPot + "<br>"+ "<br>";
        document.getElementById("resultatPotencia").innerHTML = potencia;
    }

    veureInfo(){
        var potencia="";
        potencia = potencia + "El coet "+ this.codi +" té una potencia actual de "+ this.currentPot + "<br>"+ "<br>";
        document.getElementById("resultatPotencia").innerHTML = potencia;
    }
    
}