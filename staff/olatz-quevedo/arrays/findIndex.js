const numbers = [5, 10, 8, 20, 70, 60]

function findFunction(array, callbackFunction) {
	// TODO: IMPLEMENTAR EL CÓDIGO

	let result = -1
	array.forEach((item, index) => {

		const resultCallBack = callbackFunction(item)

		/* if(result > -1){
			return
		} */

		if (resultCallBack && (result === -1)) {
			result = index
		}
	})
	return result
}


const numberBiggerThan50Function = function (number) {
	return number > 50
}

console.log(findFunction(numbers, numberBiggerThan50Function))
// 4