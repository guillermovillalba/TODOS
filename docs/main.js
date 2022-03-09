(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}function o(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.d({},{L:()=>s});var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cargarLocalStorage()}var r,n;return r=e,(n=[{key:"nuevoTodo",value:function(e){this.todos.push(e),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(e){var o,r=function(e,o){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,o){if(e){if("string"==typeof e)return t(e,o);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,o):void 0}}(e))||o&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw i}}}}(this.todos);try{for(r.s();!(o=r.n()).done;){var n=o.value;if(n.id==e){n.completado=!n.completado,this.guardarLocalStorage();break}}}catch(e){r.e(e)}finally{r.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(e){return!e.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){localStorage.getItem("todo")?this.todos=JSON.parse(localStorage.getItem("todo")):this.todos=[]}}])&&o(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function n(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}var i=a((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tarea=t,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date})),l=document.querySelector(".todo-list"),c=document.querySelector(".new-todo"),u=document.querySelector(".clear-completed"),d=function(e){var t='\n<li class="'.concat(e.completado?"completed":"",'" data-id="').concat(e.id,'"> \n<div class="view">\n    <input class="toggle" type="checkbox"  ').concat(e.completado?"checked":"",">\n    <label>").concat(e.tarea,'</label>\n    <button class="destroy"></button>\n</div>\n<input class="edit" value="Create a TodoMVC template">\n</li>'),o=document.createElement("div");return o.innerHTML=t,l.append(o.firstElementChild),o.firstChild};c.addEventListener("keyup",(function(e){if(13===e.keyCode&&c.value.length>0){var t=new i(c.value);s.nuevoTodo(t),d(t),c.value=""}})),l.addEventListener("click",(function(e){var t=e.target.localName,o=e.target.parentElement.parentElement,r=o.getAttribute("data-id");t.includes("input")?(s.marcarCompletado(r),o.classList.toggle("completed")):t.includes("button")&&(s.guardarLocalStorage(),s.eliminarCompletados(r),l.removeChild(o))})),u.addEventListener("click",(function(){s.eliminarCompletados();for(var e=l.children.length-1;e>=0;e--){var t=l.children[e];t.classList.contains("completed")&&l.removeChild(t)}}));var s=new r;s.todos.forEach((function(e){return d(e)}))})();