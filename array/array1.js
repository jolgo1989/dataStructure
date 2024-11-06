const array = [1, 2, 3, 4, 5]

// console.log(`Accediendo al indice ${array[3]}`)//Acceder a un elemento de Array mediante su índice

// console.log('Recorrer un array con for')
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

console.log('Recorrer un array de forEach')
array.forEach((elemento, index) => {
    console.log(`${elemento} en la posición ${index}`)
})

// Diferencia enentre un bucle for y forEach

// El ciclo for es una estructura de control que te permite iterar sobre los elementos de un array de manera manual, controlando el índice y los límites de la iteración.

// forEach no te da ese nivel de control. No puedes usar break o continue para detener o saltar elementos. Para detener forEach, necesitarías formas alternativas, como devolver false o utilizar try...catch, pero en general, no está diseñado para ese propósito.

//Todo: Ejercicio#1
// Definir un arreglo de 5 componentes de tipo Float que representen las alturas de 5 personas.
// Obtener el promedio de las mismas. Contar cuántas personas son más altas que el promedio y cuántas más bajas.

// let alturas = [1.78, 1.53, 1.85, 1.90, 1.73]
// let suma = 0

// for (let i = 0; i < alturas.length; i++) {

//     suma += alturas[i]
// }

// let promedio = suma / alturas.length
// console.log(`El promedio de las alturas es ${promedio}`)

// let acumulador1 = 0
// let acumulador2 = 0
// for (let i = 0; i < alturas.length; i++) {

//     if (alturas[i] > promedio) {
//         acumulador1++
//     } else {
//         acumulador2++
//     }
// }

// console.log(`Las alturas mayores que el promedio son: ${acumulador1}`)
// console.log(`Las alturas menores que el promedio son: ${acumulador2}`)

//Todo: Ejercicio#2
// Realizar un programa que pida la carga de dos arreglos numéricos enteros de 4 elementos. Obtener la suma de los dos arreglos elemento a elemento, dicho resultado guardarlo en un tercer arreglo del mismo tamaño.