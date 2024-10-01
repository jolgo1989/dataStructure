const array = [10, 23, 31, 42, 53]

console.log('Recorrer un array de forEach')
array.forEach((elemento, index) => {
    console.log(`${elemento} en la posición ${index}`)
})

const index = array.indexOf(53)//Buscar el indice del arreglo
console.log(index)

