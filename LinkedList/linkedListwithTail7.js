//Eliminar un nodo de la lista enlazada al inicio y al final
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinKedlist {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpety() {
        return this.size === 0
    }

    getSize() {
        return this.size
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
    prepend(value) {
        // Crear un nuevo nodo con el valor proporcionado
        const node = new Node(value);

        // Si la lista está vacía
        if (this.isEmpety()) {
            // El nuevo nodo es tanto la cabeza como la cola, ya que es el único nodo
            this.head = node;
            this.tail = node; //? Esta línea asegura que el nodo también sea la cola(agregar esta linea de codigo)
        } else {
            // Si la lista no está vacía, el nuevo nodo apunta al actual head
            node.next = this.head;
            // Se actualiza el head al nuevo nodo
            this.head = node;
        }

        // Incrementar el tamaño de la lista
        this.size++;
    }

    //todo ************************************************************

    //?Modificar este codigo
    append(value) {
        // Crear un nuevo nodo con el valor proporcionado
        const node = new Node(value);

        // Si la lista está vacía
        if (this.isEmpety()) {
            // El nuevo nodo es tanto la cabeza como la cola, ya que es el único nodo
            this.head = node;
            this.tail = node;
        } else {
            // Si la lista no está vacía, el nodo actual en la cola (tail) apunta al nuevo nodo
            this.tail.next = node;
            // Se actualiza el tail al nuevo nodo
            this.tail = node;
        }

        // Incrementar el tamaño de la lista
        this.size++;
    }

    //todo ************************************************************
    //Elimina el primer nodo (cabeza) de la lista enlazada y devuelve su valor.
    removeFromFront() {
        // Verifica si la lista está vacía
        if (this.isEmpety()) {
            return null;
        }
        // Almacena el valor del nodo cabeza actual
        const value = this.head.value;
        // Actualiza el head para que apunte al siguiente nodo
        this.head = this.head.next;
        // Disminuye el tamaño de la lista
        this.size--;
        // Retorna el valor del nodo eliminado
        return value;
    }
    //todo ************************************************************
    //Elimina el último nodo (cola) de la lista enlazada y devuelve su valor.
    removeFromEnd() {
        // Verifica si la lista está vacía
        if (this.isEmpety()) {
            return null;
        }

        // Almacena el valor del nodo cola actual
        const value = this.tail.value;

        // Si la lista solo tiene un nodo
        if (this.size === 1) {
            // Establece tanto head como tail como null, ya que la lista quedará vacía
            this.head = null;
            this.tail = null;
        } else {
            // Busca el penúltimo nodo
            let prev = this.head;
            while (prev.next !== this.tail) {
                prev = prev.next;
            }
            // Elimina la referencia al último nodo
            prev.next = null;
            // Establece el penúltimo nodo como la nueva cola
            this.tail = prev;
        }

        // Disminuye el tamaño de la lista
        this.size--;
        // Retorna el valor del nodo eliminado
        return value;
    }

    //todo ************************************************************
    removeFrom(index) {
        // Verifica si el índice está fuera del rango válido (menor que 0 o mayor o igual al tamaño de la lista).
        if (index < 0 || index >= this.size) {
            return null; // Retorna null si el índice no es válido.
        }

        let removeNode; // Variable para almacenar el nodo que será eliminado.

        // Caso especial: si se elimina el primer nodo (índice 0).
        if (index === 0) {
            removeNode = this.head; // Guarda el nodo actual de la cabeza.
            this.head = this.head.next; // Mueve la cabeza al siguiente nodo.
        } else {
            // Para eliminar un nodo que no está al inicio, se debe iterar hasta el nodo anterior al que se eliminará.
            let prev = this.head; // Comienza desde la cabeza.

            // Itera hasta el nodo previo al que se desea eliminar.
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next; // Avanza al siguiente nodo.
            }

            removeNode = prev.next; // Guarda el nodo a eliminar.
            prev.next = removeNode.next; // Ajusta el puntero del nodo previo al siguiente del nodo eliminado.
        }

        this.size--; // Decrementa el tamaño de la lista.
        return removeNode.value; // Retorna el valor del nodo eliminado.
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

list.print()

list.append(1)
list.append(2)
list.append(3)
list.print()

list.prepend(0)
list.print()

console.log('Tamaño de la lista', list.getSize())

list.removeFromFront()//Elimina el primer nodo
list.print()


list.removeFromEnd()//Elimina el ultimo nodo
list.print()






