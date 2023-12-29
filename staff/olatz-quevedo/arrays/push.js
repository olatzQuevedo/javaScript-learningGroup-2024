
/* const nombres = ['Nagore', 'Carmelo', 'Alejandro']

function pushFunction(array, item) {

    array.length = array.length + 1

    const result = array.length

    array[array.length -1]  =  item


    return result
}

console.log(pushFunction(nombres, 'Porti'))

console.log(nombres) */

const nombres = ['Nagore', 'Carmelo', 'Alejandro']

function pushFunction(array, ...arguments) {


    arguments.forEach(item => {

        array.length = array.length + 1

        array[array.length - 1] = item



    })
    const result = array.length
    return result


}

console.log(pushFunction(nombres, 'Porti', 'Victoria', 'Olatz'))

console.log(nombres)

