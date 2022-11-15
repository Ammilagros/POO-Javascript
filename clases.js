class Persona{
    //Protected -> #
    #nombre;//
    #edad; //Atributos privados
    constructor(nombre, edad, isDeveloper){
        this.nombre      = nombre
        this.edad        = edad  //Variables
        this.isDeveloper = isDeveloper
    } //Metodo por defecto para crear clases

    saludo(){
        console.log("Hola, mi nombre es ${this.nombre}")  //Metodos
    }

    obtenNombre(){ // Funcion getter -> nos permite acceder de manera controlada a un atributo protegido
        return this.#nombre
    }

    getEdad(){ // Funcion getter
        return this.#edad
    }

    setEdad(nuevaEdad){
        this.#edad = nuevaEdad
    }
}

const nueva_persona = new Persona("Milagros", 24, false)

let numero = 60 //Inicializar;
let persona_2 = new Persona("Juan", 50, true) //Instanciar

//Getter -> metodos que nos permiten obtener atributos, o metodos privados o peotegidos
const edad = persona.getEdad()
console.log(edad)
//Setter -> metodos que nos permiten cambiar el valor de atributos privados o protegidos
persona.setEdad(35)
console.log(persona.getEdad())