// 160913
// 	function checkary(str) {
// 		var balence = 0;
// 		for(var i=0; i<str.length; i++){
// 			if (str[i]=="(") {
// 				balence = balence +1;
// 				for(var a=i+1; a<str.length; a++){
// 					if (str[a]==")") {
// 						balence = balence -1;
// 					};
// 				}
// 			// return balence;
// 		}
// 	}
// 	if (balence !== 0){
// 		console.log('this is not ok' + balence);
// 	}else{
// 		console.log("valid parentheses");
// 	}

// }

// checkary("(haha)");	


// function validPa(str) {
// 	var arr = [];
// 	for(var i = 0; i < str.length; i++) {
// 		if(str[i]=='(') arr.push(str[i]);
// 	    else {
// 	    	if(str[i]==')') {
// 	    		var elem = arr.pop();
// 	    		if(!elem) return false;

// 	    	}
// 	    }		
// 	}
// 	return arr.length==0;
// }
// validPa('()))))');


// function validstr(str) {
// 	var checkarr = [];
// 	for(i=0; i<str.length;i++){
// 		if(str[i]=="("){
// 			checkarr.push("str[i]");
// 		}else if(str[i]==")"){
// 			var elm = checkarr.pop();
// 			if(!elm){
// 				return false;
// 			}
// 		}

// 	}
// 	return checkarr.length==0;
// }

// validstr("(()))");



// //closure

// //first class functions
// var foo = function(){
// 	alert("hello world");
// };

// var bar = function(arg){
// 	return arg;
// }
// bar(foo)();



// //inner/nested functions
// function add(value1, value2){
// 	function addmore(c,d){
// 		return c+a;
// 	}
// }

// 160927

//**  Prototypal inheritance
var parent = {
  value: "parentValue",
  obj: {
    objValue: "parentObjValue"
  },
  walk: function () {
    console.log("walking!");
  }
};

var child = Object.create(parent);
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);

child.value = "childValue";
child.obj.objValue = "childObjValue";
console.log("*** CHANGED: child.value = 'childValue'");
console.log("*** CHANGED: child.obj.objValue = 'childObjValue'");
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);

// console.log("child.obj === parent.obj ? ", child.obj === parent.obj);

// var grandChild = Object.create(child);
// console.log("Grandchild: ", grandChild);
// grandChild.walk();

// ** Function constructors
// See my other course: HTML, CSS, and Javascript for Web Developers
// Lecture #48
function Dog(name) {
  this.name = name;
  console.log("'this' is: ", this);
}

var myDog = new Dog("Max");
console.log("myDog: ", myDog);

// Not being used as a function constructor
Dog("Max2");

