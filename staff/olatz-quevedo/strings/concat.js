
/* function concatFunction(text1,text2){

    let result = text1 + text2 

    return result 

}

let nombre = concatFunction("Nagore", "Quevedo")
console.log(nombre) */

function concatFunction(...arguments) {
    let result = ""

    for (let i = 0; i < arguments.length; i++) {
        result = result + arguments[i]
    }
    
    return result
}

let nombre = concatFunction("Nagore", " ", "Quevedo")
console.log(nombre)