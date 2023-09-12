import { Circle, Figure, Square, Triangle } from './2.Figures'

export class Geometry {
  constructor (private figure: Figure) {}

  area () {
    return this.figure.obtenerArea()
  }
}
const cuadr1 = new Square(7)
cuadr1

const miGeometria = new Geometry(new Square(10))
const miGeometria2 = new Geometry(new Triangle(10, 20))
const miGeometria3 = new Geometry(new Circle(10))

console.log(miGeometria.area())
console.log(miGeometria2.area())
console.log(miGeometria3.area())
