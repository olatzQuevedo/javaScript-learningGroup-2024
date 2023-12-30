const coches = ['BMW', 'Ford', 'Audi', 'Seat']

function includesFunction(array, wordToSearch, number) {//declaramos la función con los parámetros de la array y la palabra que buscamos.
	// TODO: IMPLEMENTAR PARÁMETROS Y FUNCIÓN
    let result = false

    if(!number) number = 0
    
    array.forEach((item, index) =>{//bucle forEach para recorrer la matriz. 

        /* if(index === number){
             if(item === wordToSearch){
            console.log('true')//si item es igual al elemento que buscamos me devuelve true, sino false.
            result = true
          
        } 
        } */

        if(index >= number && item === wordToSearch) {
            result = true
        }
       
    })

    return result

}

console.log(includesFunction(coches, 'Audi'))
// true

console.log(includesFunction(coches, 'audi'))
// false

console.log(includesFunction(coches, 'Audi', 1))
// true

console.log(includesFunction(coches, 'Ford', 3))
// false


// A PARTIR DE AQUÍ LOS HAREMOS JUNTOS
// console.log(includesFunction(coches, 'Ford', -2))
// false

// console.log(includesFunction(coches, 'Ford', -3))
// true

// console.log(includesFunction(coches, 'Ford', 8))
// false