class HashTable {
    constructor(size) {
        this.table = new Array(size)// Crea un arreglo con el tamaño especificado para almacenar los elementos de la tabla hash.
        this.size = size// Guarda el tamaño de la tabla hash en una propiedad para utilizarlo más tarde en operaciones.
    }
}

const table = new HashTable(50)//Crea una tabla hash con 50 espacios disponibles.

console.log(table)