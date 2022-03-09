 //clase realizada para las caracteristicas de cada TODO
export class Todo {

    constructor(tarea){ //parametro 'tarea'

        this.tarea=tarea; //aqui va lo que se escriba ej: Comprar pan

        this.id= new Date().getTime(); // como id se una una funcion que da el dia y la hora en el que se realizo el TODO
        this.completado = false;   //Expresion booleana de completado
        this.creado =  new Date();// Fecha en la que fue creada el TODO
    }
}