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

    //?Modificar el metodo set
    set(key, value) {
        const index = this.hash(key)// Obtiene el índice correspondiente a la clave 'key' utilizando la función hash.

        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
        // this.table[index] = value (No necesitamos esta linea de codigo)  

    }

    //?modificar el metodo get
    get(key) {
        const index = this.hash(key) // Calcula el índice en la tabla hash utilizando la clave proporcionada.
        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined
        //return this.table[index] (No la necesitamos)
    }

    //?Modificar el metodo remove
    remove(key) {
        const index = this.hash(key) // Calcula el índice en la tabla hash utilizando la clave proporcionada.

        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key)

            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }

        // this.table[index] = undefined (No la necesitamos)

    }

    display() {
        // Recorre cada posición en el array 'table' (que representa la tabla hash)
        for (let i = 0; i < this.table.length; i++) {

            // Si en la posición 'i' de la tabla hash hay un valor (es decir, no es undefined)
            if (this.table[i]) {

                // Muestra en la consola el índice actual (i) y el valor almacenado en esa posición de la tabla hash
                console.log(i, this.table[i])
            }
        }
    }

}

const table = new HashTable(50)//Crea una tabla hash con 50 espacios disponibles.
table.set('nombre', 'armando')//Name es la clave y armando es el valor
table.set('edad', 25)//Name es la clave y armando es el valor
table.display()

console.log(table.get('nombre'))//Obtener un valor

table.set('rebmon', 'pedro')//Name es la clave y armando es el 
table.display()

table.set('rebmon', 'alejandra')//Observemos que alejandra esta sobre escribiendo a armando
table.display()

table.remove('nombre')
table.display()

// Se puede observar que con los cambios que hemos realizado ahora estamos creando una submatriz (no es la mejora opción pero para metodos pedagogicos es buena utilizarlo)