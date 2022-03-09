import './styles.css'
import { Todo,TodoList } from './Classes/index.js';

import {crearTodoHtml, saludar} from './js/Componentes.js'


export const todoList = new TodoList(); ///aqui se llama a la Clase donde esta el array de TODOS 

///const tarea = new  Todo('Aprender javascript y SASS'); //Clase de cada TODO// aqui se da el parametro del TODO


//todoList.nuevoTodo(tarea); // aqui se llamo a la funcion nuevo TODO para hacer un push al array de TODOS

//crearTodoHtml(tarea);// Aqui se llamo a la funcion para crear el html, y como parametro se uso a la clase TODO ya que poesee en ella las caracteristicas del TODO

//localStorage.setItem('Contraseña', 'BRA1234');
//sessionStorage.setItem('Contraseña', 'BRA1234');

//setTimeout( ()=>{       //Eliminara el item del localStorage en 2500 milisegundos
    //localStorage.removeItem('Contraseña')
//},2500);


todoList.todos.forEach(todo => crearTodoHtml(todo)); // aqui el for each se ejecuta por aca elemento del array
                                                    ///y llama a la funcion crearTodoHtml y lo crea