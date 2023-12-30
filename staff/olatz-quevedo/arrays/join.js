const ciudades = ['Madrid', 'Barcelona', 'Castellón', 'Alicante']
const pais = ['España']
function joinFunction (array, charToAdd) {
	// TODO: IMPLEMENTAR PARÁMETROS Y FUNCIÓN
    let result = ""
    if(!charToAdd){
     charToAdd = ','
    }

    if(array.length === 1){
        result = array[0]

        return result
    }

    array.forEach((item, index) =>{
        if(index === 0){
            result = result + item
        }else {
            result = result + charToAdd + item 
        }
        
    })

    return result
}

console.log(joinFunction(pais, ','))
// "España"

console.log(joinFunction(ciudades, ','))
// "Madrid,Barcelona,Castellón,Alicante"

console.log(joinFunction(ciudades, '/'))
// "Madrid/Barcelona/Castellón/Alicante"

console.log(joinFunction(ciudades, ' '))
// "Madrid Barcelona Castellón Alicante"

console.log(joinFunction(ciudades))
// "Madrid,Barcelona,Castellón,Alicante"