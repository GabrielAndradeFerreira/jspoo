import { Automovel } from "./Auto.js";

class Car extends Automovel {

    constructor(marca, modelo, ano) {
        super(marca)
    }

    comprar() {
        this.setModelo("Porsche 911");
        this.setMarca("Porsche");
        this.setAno(2024);

        return "Seu modelo é:" +this.getModelo() + "\n" 
        + "Sua Marca é: " +  this.getMarca() + "\n" 
        + "Seu ano é: " + this.getAno();
    }
}

class Principal {
    main(){
        const auto = new Car();

        console.log(auto.comprar());
    }
}
