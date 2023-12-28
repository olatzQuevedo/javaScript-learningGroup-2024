//DECLARAMOS LA FUNCIÓN Y LE AÑADIMOS LOS PARÁMETROS
function indexOfFunction(text, charToSearch, startingIndex) {
    let start = 0
    if (startingIndex > 0) start = startingIndex
    //CREAMOS EL BUCLE EN EL QUE LE DAMOS UNA CONDICIÓN, LE DECIMOS HASTA DONDE QUEREMOS QUE LO HAGA, Y LO QUE HACE SI NO LLEGA AL FINAL
    for (i = 0; i < text.length; i++) {
        //PONEMOS UN CONDICIONANTE PARA PODER CUMPLIR LO QUE QUEREMOS EN EL BUCLE. QUE EN ESTE CASO ES QUE NOS DEVUELVA EL NUMERO DE LA POSICIÓN DE LA LETRA QUE ESCOGEMOS
        if (text[i] === charToSearch) {

            return i
        }
    }//Y EN CASO DE QUE LA LETRA NO ESTE NOS DEVUELVA UN -1
    return -1
}
console.log(indexOfFunction('Kratos', 'a'))