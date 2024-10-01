const array = [10, 23, 31, 42, 53]

array.shift()//Eliminar el primer elemento del array
array.pop()//Eliminar el primer elemento del array

console.log('Recorrer un array de forEach')
array.forEach((elemento, index) => {
    console.log(`${elemento} en la posición ${index}`)
})



