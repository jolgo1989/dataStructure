//Añadir nodos
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
    prepend(value) {
        // Crea un nuevo nodo con el valor proporcionado
        const nodo = new Node(value)

        // Si la lista está vacía...
        if (this.isEmpety()) {
            // ...el nuevo nodo se convierte en la cabeza de la lista
            this.head = nodo
        } else {
            // Si la lista no está vacía...
            // ...el siguiente nodo del nuevo nodo apunta al nodo actual de la cabeza
            node.next = this.head
            // ...y el nuevo nodo se convierte en la nueva cabeza de la lista
            this.head = node
        }

        // Incrementa el tamaño de la lista
        this.size++
    }
}

const list = new LinKedlist()

console.log('¿Esta vacia la lista?', list.isEmpety())
console.log('Tamaño de la lista', list.getSize())

list.prepend(6)
list.prepend(8)
list.prepend(10)