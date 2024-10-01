const array = [1, 2, 3, 4, 5]

console.log(`Accediendo al indice ${array[3]}`)//Acceder a un elemento de Array mediante su índice

console.log('Recorrer un array con for')
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log('Recorrer un array de forEach')
array.forEach((elemento, index) => {
    console.log(`${elemento} en la posición ${index}`)
})

// Diferencia enentre un bucle for y forEach

// El ciclo for es una estructura de control que te permite iterar sobre los elementos de un array de manera manual, controlando el índice y los límites de la iteración.

// forEach no te da ese nivel de control. No puedes usar break o continue para detener o saltar elementos. Para detener forEach, necesitarías formas alternativas, como devolver false o utilizar try...catch, pero en general, no está diseñado para ese propósito.
