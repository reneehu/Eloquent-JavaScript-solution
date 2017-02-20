function countChar(string, character){
	var total = 0;
	for(var i=0; i < string.length; i++)
		if (string.charAt(i) == character)
			total ++;
	return total + ' you entered: ' +string;
}

function countBs(string){
	return countChar((string, 'B'));
}

console.log(countChar("hahahaha", "a"));

console.log(countBs('BBB'));