import { Todo } from "./todo.class";

 
export class TodoList {

    constructor() {

        //this.todos = [];
        this.cargarLocalStorage();
    }


    nuevoTodo( tareaTodo ) {
        this.todos.push( tareaTodo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ) {
        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();

    }

    marcarCompletado( id ) {
        for (const todo of this.todos) {
            
            if ( todo.id == id ) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }


    eliminarCompletados() {
        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        localStorage.setItem( 'todo', JSON.stringify( this.todos ) );
    }

    cargarLocalStorage() {
        // if (localStorage.getItem('todo')) {
        //     console.log( typeof this.todos );
        //     this.todos =    JSON.parse( localStorage.getItem('todo') );

        // }
        // else {
        //     this.todos = [];
        // }
         
         this.todoPaso = ( localStorage.getItem('todo') )  
                     ? JSON.parse( localStorage.getItem('todo') )
                     : [];

        //console.log('cargarLocalStorage' ,  this.todoPaso ); 
        //callback a función de flecha 
        //this.todos = this.todoPaso.map( Todo.fromJson );
        this.todos = this.todoPaso.map( obj => Todo.fromJson(  obj ));
        
    }
}