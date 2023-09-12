// 3. *Biblioteca Virtual:*
// Crea un sistema de biblioteca virtual en el que los alumnos puedan definir una clase `Libro` con propiedades como `título`, `autor`, etc. 
//*Implementa métodos para prestar y devolver libros, y lleva un 
//*registro de los libros disponibles y prestados. Esto les permitirá practicar la encapsulación y el manejo de objetos.
import {LibrosEsquema} from './3.LibrosEsquema'

export class LibrosList {
    private librosList: LibrosEsquema[]=[]

    generadorNumeroProId () {
        const ids = this.librosList.map(e => e.id)
    
        if (!ids.length) {
          ids.push(0)
        }
        return Math.max(...ids) + 1
    
    }
    addLibro(libro:LibrosEsquema){
        this.librosList.push(libro)
    }

    getLibros(){
        return console.log(this.librosList)
    }

//*************    Función para mostrar los libros NO PRESTADOS    ******************/
    getLibrosDispo(){
       const librosDispo = this.librosList.filter(e=> e.prestado == false)
        if (librosDispo.length>0) {
            librosDispo.map(e => console.log(e))
        }else{
            console.log('No hay libros disponibles')
        }
    }

//*****************    Función para mostrar los libros PRESTADOS    **************/    
    getLibrosPrestados(){
        const libPrestados = this.librosList.filter(e=>e.prestado==true)
        console.log(libPrestados)
    }
//*********    FUNCIÓN PARA MOSTRAR LOS LIBROS SEGÚN CONDICIÓN PRESTATARIA  ****/
    getlibrosCondicion(x:number){
        if (x==1) {
            this.getLibrosDispo()
        } 
        if(x==2) {
            this.getLibrosPrestados()
        }
    }
//*********************    Función para pedir prestado un libro    ********************/
    llevarLibro(id: number, prestado_a:string){
        this.librosList = this.librosList.map(e =>{
            if(e.id === id  && e.prestado== false){
                e.prestado = true
                e.prestado_a = prestado_a
            }else{
                console.log('No se puede prestar el libro')
            }
            return e
        })
    }
//******************   Función para devolver un libro  ********************************/
    devolverLibro(id: number, prestado_a: string){
        const libroEncontrado = this.librosList.find(e => e.id === id && e.prestado_a === prestado_a);
    
        if (libroEncontrado) {
            libroEncontrado.prestado = false;
            libroEncontrado.prestado_a = '';
        } else {
            console.log('El número de libro o usuario no coinciden');
        }
    }

}

//***********************    Creación de libros    *********************************** */
const listado = new LibrosList()

const libro1: LibrosEsquema = {
    id:listado.generadorNumeroProId(),
    titulo: 'El alquimista',
    autor: 'Cohelo',
    disponibilidad: true,
    prestado: true,
    fecha: new Date().toLocaleString(),
    prestado_a:'a'
}
listado.addLibro(libro1)

const libro2: LibrosEsquema = {
    id:listado.generadorNumeroProId(),
    titulo: 'El demonio y la señorita Prym',
    autor: 'Cohelo',
    disponibilidad: true,
    prestado: true,
    fecha: new Date().toLocaleString(),
    prestado_a:'b'
}
listado.addLibro(libro2)

const libro3: LibrosEsquema = {
    id:listado.generadorNumeroProId(),
    titulo: 'Padre rico',
    autor: 'Kiyosaki',
    disponibilidad: true,
    prestado: true,
    fecha: new Date().toLocaleString(),
    prestado_a:'c'
}
listado.addLibro(libro3)

//*************************************************************************************/
// Muestra todos los libros...
//listado.getLibros();

//----Función para mostrar el registro de libros:
//disponibles= 1
//prestados= 2
// listado.getlibrosCondicion(1)

//-----Función para llevar libro...parámetros: id y nombre alumno que lleva el libro
// listado.llevarLibro(2,'juan')

//-----Función para devolver libro... parámetros: id y nombre del alumno que devuelve
// listado.devolverLibro(3,'c')
// listado.getlibrosCondicion(1)


