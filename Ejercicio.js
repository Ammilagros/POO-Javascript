class Estudiante{
    
    constructor(nombre, asignaturas){
        this.nombre = nombre;
        this.asignaturas = [HTML, CSS, JavaScript]
    }

    obtenDatos(){
        return this.asignaturas, this.nombre
    }
} 

nuevo_Estudiante = new Estudiante("Milagros")
datos = Estudiante.obtenDatos()