const numbers = [10, 20, 30, 40, 50]

function mapFunction(array, callbackFunction) {

	let result = []

	for (let i = 0; i < array.length; i++) {
		const resultCallBack = callbackFunction(array[i])

		result[i] = resultCallBack
	}

	return result
}

function multiplyFunction(number) {
	return number * 2
}

console.log(mapFunction(numbers, multiplyFunction))
// [20, 40, 60, 80, 100]