//Agregar un nodo al final de la lista
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
    //todo ************************************************************
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
    //todo ************************************************************
    append(value) {
        // Crea un nuevo nodo con el valor proporcionado
        const node = new Node(value);

        // Si la lista está vacía, establece el nuevo nodo como la cabeza de la lista
        if (this.isEmpety()) {
            this.head = node;
        } else {
            // Inicializa un puntero al primer nodo (cabeza) de la lista
            let prev = this.head;

            // Recorre la lista hasta encontrar el último nodo (donde prev.next es null)
            while (prev.next) {
                prev = prev.next; // Avanza al siguiente nodo
            }

            // Establece el siguiente nodo del último nodo como el nuevo nodo creado
            prev.next = node;
        }

        // Incrementa el tamaño de la lista en 1
        this.size++;
    }

    //todo ************************************************************
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

list.append(10);  // Agrega 10 al final
list.print();     // Salida: 10

list.prepend(20); // Agrega 20 al inicio
list.print();     // Salida: 20 10

list.append(30);  // Agrega 30 al final
list.print();     // Salida: 20 10 30

list.prepend(40); // Agrega 40 al inicio
list.print();     // Salida: 40 20 10 30





