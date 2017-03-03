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