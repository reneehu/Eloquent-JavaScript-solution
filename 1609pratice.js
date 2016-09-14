// 160913
	function checkary(str) {
		var balence = 0;
		for(var i=0; i<str.length; i++){
			if (str[i]=="(") {
				balence = balence +1;
				for(var a=i+1; a<str.length; a++){
					if (str[a]==")") {
						balence = balence -1;
					};
				}
			// return balence;
		}
	}
	if (balence !== 0){
		console.log('this is not ok' + balence);
	}else{
		console.log("valid parentheses");
	}

}

checkary("(haha)");	


function validPa(str) {
	var arr = [];
	for(var i = 0; i < str.length; i++) {
		if(str[i]=='(') arr.push(str[i]);
	    else {
	    	if(str[i]==')') {
	    		var elem = arr.pop();
	    		if(!elem) return false;

	    	}
	    }		
	}
	return arr.length==0;
}
validPa('()))))');


function validstr(str) {
	var checkarr = [];
	for(i=0; i<str.length;i++){
		if(str[i]=="("){
			checkarr.push("str[i]");
		}else if(str[i]==")"){
			var elm = checkarr.pop();
			if(!elm){
				return false;
			}
		}

	}
	return checkarr.length==0;
}

validstr("(()))");
