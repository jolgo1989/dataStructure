//Insertar un nuevo nodo con un valor especificado en una posición específica de la lista.
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
    insert(value, index) {
        // Verifica si el índice es inválido (menor que 0 o mayor que el tamaño actual de la lista).
        if (index < 0 || index > this.size) {
            return; // Sale de la función sin hacer nada si el índice es inválido.
        }

        // Si el índice es 0, usa el método prepend para insertar el valor al inicio de la lista.
        if (index === 0) {
            this.prepend(value);
        } else {
            // Crea un nuevo nodo con el valor proporcionado.
            const node = new Node(value);

            // Comienza en la cabeza de la lista.
            let prev = this.head;

            // Recorre la lista hasta llegar al nodo anterior a la posición deseada.
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }

            // Ajusta los punteros: el nuevo nodo apunta al siguiente del nodo anterior,
            // y el nodo anterior ahora apunta al nuevo nodo.
            node.next = prev.next;
            prev.next = node;

            // Incrementa el tamaño de la lista para reflejar la inserción.
            this.size++;
        }
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

list.insert(10, 0);
list.print();

list.insert(5, 0);
list.print();

list.insert(15, 1);
list.print();

list.insert(25, 2);
list.print();

console.log(list.getSize())

// Nota: El 10 se desplaza a la ultima posición porque los índices en las listas empiezan en 0, y cada nueva inserción puede desplazar los elementos existentes según la posición en la que se inserte el nuevo valor.





