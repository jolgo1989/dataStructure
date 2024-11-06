// Objeto de la tienda con productos iniciales
const tienda = {
    productos: [
        { nombre: "Camisa", precio: 25, cantidad: 10 },
        { nombre: "Pantalón", precio: 40, cantidad: 5 },
        { nombre: "Zapatos", precio: 60, cantidad: 8 }
    ],
    // Función para agregar un nuevo producto
    agregarProducto: function (nombre, precio, cantidad) {
        this.productos.push({ nombre, precio, cantidad });
    },
    // Función para actualizar la cantidad de un producto
    actualizarCantidad: function (nombre, nuevaCantidad) {
        const producto = this.productos.find(p => p.nombre === nombre);
        if (producto) {
            producto.cantidad = nuevaCantidad;
        } else {
            console.log("Producto no encontrado.");
        }
    },
    // Función para mostrar información de todos los productos
    mostrarProductos: function () {
        this.productos.forEach(producto => {
            console.log(`Nombre: ${producto.nombre}, Precio: $${producto.precio}, Cantidad: ${producto.cantidad}`);
        });
    }
};

// Ejemplos de uso:
tienda.agregarProducto("Sombrero", 15, 20);
tienda.actualizarCantidad("Pantalón", 10);
tienda.mostrarProductos();
