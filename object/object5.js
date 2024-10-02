const usuario = {
    nombre: 'carlos',
    edad: 25,
    trabaja: true,
    // Agregar una función para saludar
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}
//Imprimir a las propiedades de un objeto
console.log(usuario)

//Imprimir propiedades por separado
console.log(usuario.nombre)
console.log(usuario.edad)
console.log(usuario.trabaja)

//Agregar propiedades a un objeto
usuario.carrera = 'ing de sistemas'
console.log(usuario)

//Eliminar una propiedad
delete usuario.trabaja
console.log(usuario)

//Consultar si una propiedad existe
console.log(usuario.hasOwnProperty('nombre'))
console.log(usuario.hasOwnProperty('apellido'))

// Llamar a la función dentro del objeto
usuario.saludar()


