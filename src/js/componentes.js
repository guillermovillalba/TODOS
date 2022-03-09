import { Todo } from "../Classes"; 
import { todoList} from "../index.js"; 
///referencias del html//
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo'); //se llama al input 
const btnEliminarCompletados    = document.querySelector('.clear-completed');
const ulFiltros    =document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro'); //recorre a todos lo que tengan esta clase y lo devuelve como un array


//aqui se crea el html, se toma el parametro de la funcion 'todo', y una caracteristica de la clase TODO, en el
//Primer ejemplo se tomo 'completado' y si se ve en la clase es una expresion booleana, entonces se hizo una operacion condicional ternaria
//y se uso la siguiente logica "si todo.completado es verdadero(?) va 'completed' sino(:) Vacio('')"


export const crearTodoHtml =(todo)=>{

const htmlTodo = `
<li class="${  todo.completado ? 'completed': '' }" data-id="${todo.id}"> 
<div class="view">
    <input class="toggle" type="checkbox"  ${ todo.completado ?  'checked' : ''}>
    <label>${todo.tarea}</label>
    <button class="destroy"></button>
</div>
<input class="edit" value="Create a TodoMVC template">
</li>`;

const div= document.createElement('div');
 div.innerHTML= htmlTodo;
 divTodoList.append(div.firstElementChild);// aqui se uso el firstElementChild para que solo inserta el LI y no el div
                                            // o sea el segundo elemento, en este caso el padre es el div y el hijo el li
                                            //lo que hara es insertar a partir del hijo

 return div.firstChild;


};




////////

txtInput.addEventListener('keyup', (event)=>{ //se hace una escucha del input, y se usa keyup para saber que teclapresiono

    if( event.keyCode === 13 && txtInput.value.length > 0){ // keyCode da el codigo de cada tecla en este caso el del enter es 13
        //console.log(txtInput.value)                                                    //si es igual y tambien ni esta vacio pasa al evento
     const nuevoTodo = new Todo(txtInput.value); // llamo a la clase todo y se le da como parametro lo que esta en ek txtInput
        todoList.nuevoTodo(nuevoTodo); //llamo a la clase todolist meteodo nuevo todo y le doy el parametro nuevo todo hecho antes

       crearTodoHtml(nuevoTodo); // aqui se llama a la funcion crearHtml y se le da el parametro nuevoTodo

       txtInput.value='';
    };

});


divTodoList.addEventListener('click', (evento)=>{
    const nombreElemento = evento.target.localName; // nos dice que tipo de elemento le hicimos click (label, input, botton);
    const todoElemento = evento.target.parentElement.parentElement; // te retorna al elemnto html, y van 2 parents porque se necesita una instancia antes.
    const todoId = todoElemento.getAttribute('data-id'); // lo que hace es retornar el contenido del atributo que le des en este caso es el id(buscar en el html el atributo)
    //console.log(nombreElemento)
    if(nombreElemento.includes('input')){ // busca si en el nombreElento se hizo click y es igual a input significa
                                            ///que se hizo click en el check(pestañita verde de V listo)
        todoList.marcarCompletado(todoId); //aqui se llama al metodo marcarCompletado de la clase todolist y se le da el parametro del id;
        todoElemento.classList.toggle('completed');// aqui al elemento html con classList se busca todas las clases, y con toggle se le agrega una clase en caso que no este.
                                                    ///asi se cambia a completed


    }else if(nombreElemento.includes('button')){ //Lo que hace es, si se hace click en la x el nombre lelmento retorna button, entonces si es eso cumple la funcion.
        todoList.guardarLocalStorage();
        todoList.eliminarTodo(todoId); //aqui llama al metodo de todolist y le da como parametro el id;
        divTodoList.removeChild(todoElemento); // como ya tenemos al elemento en la constante 'todoElemento' lo que hecemos es eliminarlo;
       
        
    }
    
   //console.log(todoList)

});

/////////  ELIMINAR LOS COMPLETADOS //////

btnEliminarCompletados.addEventListener('click', ()=>{ //Se Eschucha el boton de eliminar completados.
  todoList.eliminarCompletados();            //se llama al modulo eliminar completados.

    for(let i = divTodoList.children.length-1; i>=0; i--) //se hace un for para que vea cuantos li hay(por eso es children), y se hace de abajo hacia arriba, por esoes i>=0; i--
    {
            const elemento = divTodoList.children[i]; //recorre al UL segun el i

            if(elemento.classList.contains('completed')){ //Ve al elemento, verifica si contiene a la clase 'completed'
                divTodoList.removeChild(elemento); //  si es verdadero elimina el elemento.
            }
    }

});


/////   Filtros   ////

ulFiltros.addEventListener('click', (evento)=>{
   const  flitro=  evento.target.text; //Al hacer click en algunos de los filtros muestra el texto que tiene si no undefined
    if(!flitro){return;}; 
//es la pestañita de seleccion 
    anchorFiltros.forEach(elemento => elemento.classList.remove('selected') ); //El forEach recorre todo los elementos del array y le quita la clase selected
    evento.target.classList.add('selected') // le agrega la clase selected al elemento que se le haga click


    for(const elemento of divTodoList.children){ //recorre todos los elementos de la lista
       
        elemento.classList.remove('hidden'); //remueve la clase hidden a cada elemento.
        const completado = elemento.classList.contains('completed'); // ve si el elemento contiene la clase completed.

        switch(flitro){ //El parametro es el filtro
            case 'Pendientes': 
                if(completado){ //en caso que posea la clase 'conmpleted' = true 
                    elemento.classList.add('hidden'); //entonces añade la clase hidden(o sea que esconde al elemento)
                };
                break;
            case'Completados': 
            if(!completado){ //en caso que no posea la clase completed = false
                elemento.classList.add('hidden'); //entonces añade la clase hidden(o sea que esconde al elemento)
            };
            break;
        }
        //y si no presionas nada muestra a todos
    }

})

