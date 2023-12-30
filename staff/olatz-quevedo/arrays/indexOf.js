const fruits = ['apple', 'orange', 'pineapple', 'watermelon', 'apple']
//declaro la función con los parámetros de la array y el elemento que buscamos.
function indexOfFunction(array, wordToSearch, number) {
    // TODO: IMPLEMENTAR PARÁMETROS Y FUNCION
    let result = -1
    if(!number) number = 0
    array.forEach((item, index) => {//creamos un bucle de forEach para poder recorrer la matriz, y así encontrar el elemento en cuestión.
        if(result >= 0){
            return
        }
        
        if (index >= number && item === wordToSearch) {//creamos un condicionante en el que declaramos que el item que recorre la array sea estrictamente igual que el elemento a buscar.
            result = index
        }  
    })
    return result

}

console.log(indexOfFunction(fruits, 'orange'))
// 1

console.log(indexOfFunction(fruits, 'watermelon'))
// 3

console.log(indexOfFunction(fruits, 'strawberry'))
// -1

console.log(indexOfFunction(fruits, 'apple'))
// 0

console.log(indexOfFunction(fruits, 'orange', 3))
// -1


// A PARTIR DE AQUÍ ESTOS LOS HAREMOS JUNTOS
// console.log(indexOfFunction(fruits, 'orange', -8))
// 1

// console.log(indexOfFunction(fruits, 'orange', -2))
// -1
