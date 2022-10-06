/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClaseViajero() {
  class Viajero {
    constructor(nombre, edad, paises, compañeros) {
      // El constructor de la clase Viajero recibe nombre (string), 
      // edad (integer), paises (array de strings), compañeros (array de objetos)
      // Inicializar las propiedades del viajero con los valores recibidos como argumento

      // Tu código aca:
        this.nombre=nombre;
        this.edad= edad;
        this.paises=paises;
        this.compañeros=compañeros;
    }

    addCompañero(nombre, nacionalidad, edad) {
      // El método 'addCompañero' recibe un string 'nombre', 
      // un string 'nacionalidad' y un entero 'edad' y
      // debe agregar un objeto:
      // { nombre: nombre, nacionalidad: nacionalidad, edad: edad} al arreglo de compañeros del viajero.
      // No debe retornar nada.

      // Tu código aca:
      let comp=[];
      comp.nombre=nombre;
      comp.nacionalidad= nacionalidad;
      comp.edad=edad;
      
      this.compañeros.push(comp);

    }

    addPais(pais) {
      // El método 'AddPais' recibe un string 'pais' y debe agregarlo al arreglo de paises del viajero.
      // No debe retornar nada.

      // Tu código aca:
      this.paises.push(pais);
    }

    getCompañeros() {
      // El método 'getCompañeros' debe retornar un arreglo con sólo 
      //los nombres del arreglo de compañeros
      // del viajero.
      // Ej:
      // Suponiendo que el viajero tiene estos 
      //compañeros: [
        //          {nombre: 'John', nacionalidad: "Australiano", edad: 27},
      //             {nombre: 'Peter', nacionalidad: "Belga", edad: 23}
    //              ]
      // viajero.getCompañeros() debería devolver ['John', 'Peter']

      // Tu código aca:
      let arrayCompaneros=[];
      this.compañeros.forEach(element => {
        arrayCompaneros.push(element.nombre);
      });
      
      return arrayCompaneros;
    }

    getPaises() {
      // El método 'getPaises' debe retornar un arreglo con los paises del viajero
      // Ej:
      // viajero.getPaises() debe devolver ['Belgica', 'Estados Unidos', 'Islandia']

      // Tu código aca:
      let arrayPaises=[];
      this.paises.forEach(element => {
        arrayPaises.push(element.nombre);
      });
      return arrayPaises;
    }

    getPromedioEdad() {
      // El método 'getPromedioEdad' debe retornar el promedio de edad de los compañeros de un viajero.
      // Ej:
      // Si el viajero tuviera estos compañeros:
      // {
      //   compañeros: [{
      //     nombre: 'John',
      //     nacionalidad: "Australiano",
      //     edad: 27,
      //   }, {
      //     nombre: 'Peter',
      //     nacionalidad: "Belga",
      //     edad: 23
      //   }]
      // }
      // viajero.getPromedioEdad() debería devolver 25 ya que (27 + 23) / 2 = 25

      // Tu código aca:
      let sumaEdades=0;
      this.compañeros.forEach(element => {
        (sumaEdades+=element.edad);
      })
      return sumaEdades/this.compañeros.length;
    }
  };

  return Viajero;
}

// No modifiques nada debajo de esta linea //

module.exports = crearClaseViajero