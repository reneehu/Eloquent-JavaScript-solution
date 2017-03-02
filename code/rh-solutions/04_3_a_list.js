function arrayToList(array) {
	var list = null;
	for(var i=array.length-1; i>=0; i--){
		list = {
			value: array[i],
			rest: list
		};
	}
	return list;
}

arrayToList([10,20,30]);

function listToArray(list) {
	var array = [];
	for (var node = list; node; node = node.rest){
		array.push(node.value);
	}
	return array;
}
listToArray(arrayToList([10, 20, 30]));

function prepend(element, list) {
	return prependedList = {
		value: element,
		rest : list
	};
}
prepend(10, prepend(20, null));

function nth(list, n) {
	if(!list)
		return undefined;
	else if (n == 0)
		return list.value;
	else
		return nth(list.rest, n - 1);
}
nth(arrayToList([10, 20, 30]), 1)