
function range(start, end, step){
	var ary = [];
	step = (step !== undefined) ? step : 1;
	if(step>0){
		for(var i = start; i <= end; i+=step){
			ary.push(i);
		}
	}else{
		for(var i = start; i >= end; i+=step){
			ary.push(i);
		}
	}
	return ary;
}
range(1,10);

function sum(array){
	var sumUp = 0;
	for(i=0; i < array.length; i++){
		sumUp += array[i];
	}
	return sumUp;
}
sum(range(1,10));
