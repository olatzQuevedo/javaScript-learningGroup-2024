
const nombre = ['Nagore', 'Porti', 'Olatz']


function popFunction(array) {

    const result = array[array.length -1]

    array.length = array.length - 1

    return result

}

console.log(popFunction(nombre))