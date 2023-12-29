
const nombres = ['Nagore', 'Porti', 'Olatz']

function findFuction(array, callBackFunction){

    let result 

    array.forEach(item => {

        const resultCallBack = callBackFunction(item)

        if(result){
            
            return

        }
        if(resultCallBack){
            result = item 
        }
        
    });

    return result
  

}


const checkFunction = (string)=> {
    return string.includes('o')
}

console.log(findFuction(nombres, checkFunction))