//Se importa la estructura (modelo) que tendrá la lista de tareas
import { Todo } from './1.TareasEsquema'


//Se define la clase TodoList...****************************************
export class TodoList {
  private todos: Todo[] = [] //Array de objetos vacío tipo Todo
//******************************************************************** */
// Dentro de esta clase se crean MÉTODOS, los cuales serán usados para interactuar con la lista, dentro de estos métodos tengo ( generarId, addTodo, getTodos, deleteTodo, completeTodo)

// Definición del método generadorNumeroProId, el cual busca el id mayor de la lista existente (todos) y a este id le suma 1.
  generadorNumeroProId () {
    const ids = this.todos.map(e => e.id)

    //Cuando el id es cero la condición es falsa, como se niega se hace verdadera y se ingresa al bloque condicional. 
    if (!ids.length) {
      ids.push(0)
    }
    return Math.max(...ids) + 1
    //spread operator
    //se retorna un número, que es mayor (en una unidad) que el id con mayor numeración.
  }

//Este método agrega una tarea...
// (todo: Todo) es una declaración de parámetro. Indica que este método espera un argumento llamado todo, y el tipo esperado de ese argumento es Todo (esta es la estructura de las tareas definidas en el archivo Todo.ts).
  addTodo (todo: Todo) {
//this se refiere al objeto actual (en este caso, una instancia de la clase TodoList). this.todos accede a la propiedad todos de ese objeto. En este contexto, todos es una matriz que almacena las tareas.
    this.todos.push(todo)
  }

  getTodos() {
    return console.log(this.todos)
  }

  //Función para eliminar o no mostrar una tarea determinada por ID.
  deleteTodo (id: number) {
    //se muestran las tareas que no coincidan con el id pasado como parámetro
    this.todos = this.todos.filter(e => e.id !== id)
    lista.getTodos()
  }

  // deleteTodo (hecha : boolean) {
  //   //se muestran las tareas que no coincidan con el id pasado como parámetro
  //   this.todos = this.todos.filter(e => e.hecha !== true)
  //   lista.getTodos()
  // }

  //Función para cambiar el estado de una tarea seleccionada por ID.
  completeTodo (id: number) {
    this.todos = this.todos.map(e => {
      if (e.id === id) {
        e.hecha = true
      }
      lista.getTodos()
      return e
    })
  }
}

//Se crea la instancia de listas en donde se guardarán las clases determinadas en TodoList...
const lista = new TodoList()

//  *************************************************************************************  //
//  Instanciación de ELEMENTOS DE LA LISTA ...
const tarea1: Todo = {
  id: lista.generadorNumeroProId(),
  title: 'Tarea 1',
  hecha: false,
  date: new Date().toLocaleString()
}
lista.addTodo(tarea1);

const tarea2: Todo = {
  id: lista.generadorNumeroProId(),
  title: 'Tarea 2',
  hecha: false,
  date: new Date().toLocaleString()
}
lista.addTodo(tarea2);

const tarea3: Todo = {
  id: lista.generadorNumeroProId(),
  title: 'Tarea 3',
  hecha: false,
  date: new Date().toLocaleString()
}
lista.addTodo(tarea3);
//**********************************    F I N    ******************************************* */

// lista.getTodos()
lista.completeTodo(2)
lista.deleteTodo(2)



