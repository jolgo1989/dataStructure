// Creación de clase Node y la clase LinKedlist
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinKedlist {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpety() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }
}

const list = new LinKedlist()

console.log('¿Esta vacia la lista?', list.isEmpety())
console.log('Tamaño de la lista', list.getSize())