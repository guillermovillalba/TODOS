import { Todo } from "./todo.class";

export class TodoList{

    constructor(){
        
            this.cargarLocalStorage();

        //this.todos=[]; ///se crea un  array vacio donde van los todos
    }
    
     /////////    METODOS   //////
     
    nuevoTodo(todo) {
        this.todos.push(todo); //aqui hace un push de los nuevos todos
        this.guardarLocalStorage();  
    }

    eliminarTodo(id){
             
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();  // lo que hace es ver el id que se tomo como parametro y retorna a todos los TODO 
                                                                ///que tengan un id distinto, lo inserta de nuevo en el array.

             // lo que se hace es guardar en  localStorage los TODOS                                                   
                                                            }

    marcarCompletado(id){
        for (const todo of this.todos){

            if(todo.id == id){
                todo.completado= !todo.completado;
                this.guardarLocalStorage();   // lo que se hace es guardar en  localStorage los TODOS
                break;
            }
        }
    }

    eliminarCompletados(){

        this.todos = this.todos.filter(todo => !todo.completado) 
        this.guardarLocalStorage();//aqui lo que hara es retornar a todos los que no estan completados y los 
                                                                    ///guardara en el array todos.
            // lo que se hace es guardar en  localStorage los TODOS
                             }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos)); // lo que se hace es guardar en  localStorage los TODOS
                                                                /// y con JSON.stringify los convierte en Json(string)
    }

    cargarLocalStorage(){
            if(localStorage.getItem('todo')){     //Si en el localStorage existe todo hace esto:
                    this.todos= JSON.parse(localStorage.getItem('todo')) ; // carga en el array todos lo que esta en el localStorage pero antes 
                                                                            //lo convierte en de nuevo a un array
            }else{
                this.todos=[]; ///se crea un  array vacio donde van los todos
            }
            
           //// Aqui esta lo mismo que antes solo que en operacion ternaria   /// 
           // this.todos= JSON.parse(localStorage.getItem('todo')) 
                    //        ? JSON.parse(localStorage.getItem('todo'))
                       //     : [];
                
    }

}