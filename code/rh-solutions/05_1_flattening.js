function flatten(arrays) {
	return arrays.reduce(
		function(a, b) {
			console.log('a is' + a + ' ' + 'b is' + b);
			return a.concat(b);
		},[]
		);
}

var arrays = [[1, 2, 3], [4, 5], [6]];
flatten(arrays);

// function flat(ary) {
// 	return ary.reduce( function(a,b){
// 		return a.concat(b);
// 	} ,[]);
// }


// var arrays = [[1, 2, 3], [4, 5], [6]];
// flat(arrays);


function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

var overNinety = ancestry.filter(function(person) {
  return person.died - person.born > 90;
});

console.log(map(overNinety, function(person) {
  return person.name;
}));