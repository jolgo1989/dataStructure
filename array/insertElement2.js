const array = [1, 2, 3, 4, 5]

array.push(8)//Agregar un dato alfinal del arreglo
array.unshift(20)//Agregar un dato al principio del arreglo
console.log('Recorrer un array de forEach')
array.forEach((elemento, index) => {
    console.log(`${elemento} en la posición ${index}`)
})

