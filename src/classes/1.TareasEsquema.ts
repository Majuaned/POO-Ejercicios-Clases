// *******   Definición de la estructura del objeto  *********
//Esta interfaz define la estructura que deben tener los objetos que representan tareas
export interface Todo {
    id: number
    title: string
    hecha: boolean   //done = hecho
    date: string
}
