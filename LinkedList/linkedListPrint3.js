// Imprimir nodos
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
        const node = new Node(value)

        // Si la lista está vacía...
        if (this.isEmpety()) {
            // ...el nuevo nodo se convierte en la cabeza de la listanode linkedListPrint3.js
            this.head = node
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

    print() { // Método para imprimir los elementos de la lista enlazada
        // Verifica si la lista está vacía
        if (this.isEmpety()) {
            console.log('lista vacia') // Imprime un mensaje indicando que la lista está vacía
        } else {
            let curr = this.head // Inicializa el nodo actual como la cabeza de la lista
            let lisValue = '' // Variable para almacenar los valores de los nodos

            // Recorre la lista hasta que curr (el nodo actual) sea null
            while (curr) {
                lisValue += `${curr.value} ` // Agrega el valor del nodo actual a la cadena de valores
                curr = curr.next // Avanza al siguiente nodo de la lista
            }

            // Imprime todos los valores de los nodos en la lista
            console.log(lisValue)
        }
    }



}

const list = new LinKedlist()

console.log('¿Esta vacia la lista?', list.isEmpety())
console.log('Tamaño de la lista', list.getSize())
//Imprimir
list.print()
list.prepend(6)//Agregar valores a la lista
list.print()

list.prepend(10)
list.prepend(14)
list.prepend(8)
list.print()




