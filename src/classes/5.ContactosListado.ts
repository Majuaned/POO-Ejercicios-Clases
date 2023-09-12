//** Implementa métodos para agregar nuevos contactos, buscar contactos por nombre y mostrar la lista completa de contactos.  Esto les permitirá practicar la creación de clases.

import {ContactosEsquema} from "./5.ContactosEsquema"

export class ContactosList {
    private contactosList: ContactosEsquema[] = []

    //generador números incrementales para el id...
    generadorNumeroProId () {
        const ids = this.contactosList.map(e => e.id)
    
        if (!ids.length) {
          ids.push(0)
        }
        return Math.max(...ids) + 1
    }

    addContacto(contacto:ContactosEsquema){
        this.contactosList.push(contacto)
    }

    getContactos(){
        return console.log(this.contactosList)
    }

    getContactosNombre(nombre:string){
        this.contactosList = this.contactosList.filter(e => e.nombre == nombre)
        console.log(this.contactosList)
    }

    getContactosApellido(apellido:string){
        this.contactosList = this.contactosList.filter(e=>e.apellido == apellido)
            console.log(this.contactosList)
    }

}

//**********************   Creación de contactos   *************************************/
const listado = new ContactosList()

const contacto1: ContactosEsquema = {
    id:listado.generadorNumeroProId(),
    apellido: 'Maldonado',
    nombre: 'Juan Eduardo',
    telefono: 3704256868,
    email: 'maldo@g.com'
}
listado.addContacto(contacto1)

const contacto2: ContactosEsquema = {
    id:listado.generadorNumeroProId(),
    apellido: 'Salazar',
    nombre: 'Agustín René',
    telefono: 3704000000,
    email: 'salaz@g.com'
}
listado.addContacto(contacto2)

const contacto3: ContactosEsquema = {
    id:listado.generadorNumeroProId(),
    apellido: 'Velarde',
    nombre: 'Martín',
    telefono: 3704111111,
    email: 'vela@g.com'
}
listado.addContacto(contacto3)

const contacto4: ContactosEsquema = {
    id:listado.generadorNumeroProId(),
    apellido: 'Maldonado',
    nombre: 'Cristian Alfredo',
    telefono: 3704222222,
    email: 'cris@g.com'
}
listado.addContacto(contacto4)

// listado.getContactos();



// Muestra todos los Contactos...
//listado.getContactos();

//Muestra los contactos por nombre
// listado.getContactosNombre('Martín')

//Muestra los contactos por apellido
listado.getContactosApellido('Maldonado')









