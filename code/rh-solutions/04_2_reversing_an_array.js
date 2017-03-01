function reverseArray(array) {
	var reversed = [];
	for(i=(array.length-1); i>=0; i--){
		reversed.push(array[i]);
	}
	return reversed;
}

reverseArray([1,2,3]);

function reverseArrayInPlace(array) {
	for (var i = 0; i < Math.floor(array.length / 2); i++) {
		var old = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = old;
	}
	return array;
}
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
arrayValue