function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    console.log(old);
    array[i] = array[array.length - 1 - i];
    console.log(array[i]);
    array[array.length - 1 - i] = old;
    console.log(array[array.length - 1 - i]);
    console.log('array now ' + array);
  }
  return array;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
