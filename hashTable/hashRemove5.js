class HashTable {
    constructor(size) {
        this.table = new Array(size)// Crea un arreglo con el tamaño especificado para almacenar los elementos de la tabla hash.
        this.size = size// Guarda el tamaño de la tabla hash en una propiedad para utilizarlo más tarde en operaciones.
    }

    //función que toma una clave (string) como argumento y devuelve un índice dentro de la tabla hash.
    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) { // Recorre cada carácter de la clave proporcionada ('key').
            total += key.charCodeAt(i)// Suma el valor ASCII del carácter en la posición 'i' al total.
        }
        // sumado los valores ASCII de todos los caracteres de la clave, el total es modulado (% this.size).
        // Esto asegura que el resultado esté dentro del rango del tamaño de la tabla hash.
        return total % this.size
    }

    // función permite almacenar un valor en la tabla hash, asociándolo con una clave.
    set(key, value) {
        const index = this.hash(key)// Obtiene el índice correspondiente a la clave 'key' utilizando la función hash.

        this.table[index] = value  // Almacena el valor en la tabla hash en el índice calculado.

    }

    //método te permite acceder a los valores almacenados en la tabla hash utilizando las claves originales.
    get(key) {
        const index = this.hash(key) // Calcula el índice en la tabla hash utilizando la clave proporcionada.
        return this.table[index]// Devuelve el valor almacenado en el índice calculado de la tabla hash.
    }

    // Método para eliminar el valor asociado a una clave en la tabla hash.
    remove(key) {
        const index = this.hash(key) // Calcula el índice en la tabla hash utilizando la clave proporcionada.
        this.table[index = undefined] // Asigna `undefined` al valor en el índice calculado para eliminar el valor almacenado.
    }


}

const table = new HashTable(50)//Crea una tabla hash con 50 espacios disponibles.

console.log(table)
console.log(table.hash)
console.log(table.set)
console.log(table.get)
console.log(table.remove)