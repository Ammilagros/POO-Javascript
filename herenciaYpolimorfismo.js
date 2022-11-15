//Intheritance - Herencia
class Persona {
    _nombre
    _edad //Atributos protegidos que heredan la clase hija
    constructor(nombre, edad){
        this._nombre      = nombre
        this._edad        = edad  
    } 
    saludo(){
        console.log("Hola, mi nombre es ${this.nombre}")  
    }
}

class Desarrollador extends Persona{
    constructor(nomnre, edad, lenguaje){
        super(nombre, edad) //heredados de la clase madre
        this.lenguaje = lenguaje
}
    saludo(){
        super()
        console.log("Y soy desarrollador de ${this.lenguaje}")
    }
}

//Polimorfismo -> Varias formas