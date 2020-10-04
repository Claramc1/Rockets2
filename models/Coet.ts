class Coets{
    codi:string;
    numPropulsors:number;
    propulsorsArray:Propulsor[]=new Array();

    
    constructor(codi:string,numPropulsors:number){
        this.codi=codi;
        this.numPropulsors=numPropulsors;
    }

    addPropulsor(propulsor:Propulsor):void{
        this.propulsorsArray.push(propulsor);
    }


    accelerar(){
        document.getElementById("resultat").innerHTML ="";
        document.getElementById("resultatPotencia").innerHTML ="";
        document.getElementById("resultatPotenciaTots").innerHTML ="";
        let i:number;
        let j: number;
        for(i=0;i<this.propulsorsArray.length;i++){
            for(j=0;j<this.propulsorsArray[i].currentPot.length;j++){
            if((this.propulsorsArray[i].currentPot[j])<(this.propulsorsArray[i].maxPot[j])){
                this.propulsorsArray[i].currentPot[j] += 10;
            }
        
        console.log(this.propulsorsArray);
        var potencia="";
        potencia = potencia + "El coet "+ this.codi +" té una potencia actual de "+ this.propulsorsArray[i].currentPot + "<br>"+ "<br>";
        document.getElementById("resultatPotencia").innerHTML = potencia;}
    }
}

    frenar(){
        document.getElementById("resultat").innerHTML ="";
        document.getElementById("resultatPotencia").innerHTML ="";
        document.getElementById("resultatPotenciaTots").innerHTML ="";
        let i:number;
        let j: number;
        for(i=0;i<this.propulsorsArray.length;i++){
            for(j=0;j<this.propulsorsArray[i].currentPot.length;j++){
            if((this.propulsorsArray[i].currentPot[j])>(this.propulsorsArray[i].minPot[j])){
                this.propulsorsArray[i].currentPot[j] -= 10;
            }
        
        console.log(this.propulsorsArray);
        var potencia="";
        potencia = potencia + "El coet "+ this.codi +" té una potencia actual de "+ this.propulsorsArray[i].currentPot + "<br>"+ "<br>";
        document.getElementById("resultatPotencia").innerHTML = potencia;}
    }
}



    veureInfo(){
        document.getElementById("resultat").innerHTML ="";
        document.getElementById("resultatPotencia").innerHTML ="";
        document.getElementById("resultatPotenciaTots").innerHTML ="";
        let i:number;
        let j: number;
        for(i=0;i<this.propulsorsArray.length;i++){
            console.log(this.propulsorsArray);
            var potencia="";
            potencia = potencia + "El coet "+ this.codi +" té una potencia actual de "+ this.propulsorsArray[i].currentPot + "<br>"+ "<br>";
            document.getElementById("resultatPotencia").innerHTML = potencia;
            }
        

    }
    }
    /*veureInfo(){
        let i:number;
        let j:number;
        var potencia="";
        var actualPot;
        for(i=0;i<this.propulsorsArray.length;i++){
            for(j=0;j<this.propulsorsArray[i].currentPot.length;j++){  
                actualPot += this.propulsorsArray[i].currentPot[j];}
        potencia = potencia + "El coet "+ this.codi +" té una potencia actual de "+ actualPot + "<br>"+ "<br>";
        document.getElementById("resultatPotencia").innerHTML = potencia;}
    }*/
    
}