class Goku {
    constructor(nombre, nivel) {
        this.nombre = nombre;
        this.nivel = nivel; // Nivel actual de la transformación
    }

    // Método para mostrar la transformación actual
    mostrarTransformacion() {
        return `${this.nombre} está en la transformación: ${this.nivel}`;
    }

    // Método para cambiar de transformación
    transformar(nuevaTransformacion) {
        this.nivel = nuevaTransformacion;
        return `${this.nombre} se ha transformado en ${this.nivel}!`;
    }

    // Método para volver a la forma base
    volverFormaBase() {
        this.nivel = 'Base';
        return `${this.nombre} ha vuelto a su forma base.`;
    }
}

// Crear un objeto Goku con su forma base
let goku = new Goku('Goku', 'Base');

