/*
#
##
###
####
#####
######
#######
*/
var tree = "";
for (var counter=0;counter < 7; counter++) {
	tree += '#';
  //console.log(tree);
}



/*Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, you’re now allowed to feel good about yourself.)
*/
for(var counter=1;counter<=100;counter++){
	var output = "";
	if(counter%3 == 0){
		output += "Fizz";
	}
	if(counter%5 == 0){
		output += "Buzzzzzz";
	}
  // console.log(output || counter);
}




/*Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/

function chess(size){
	var chess_row = "",
	chess_grid = "#",
	chess_space =" ";
	for(var y=0;y<=size;y++){
		for(var x=0;x<=size;x++ ){
			if((y+x)%2 == 0){
				chess_row += chess_space;
			}else{
				chess_row +=chess_grid;
			}   
		}
		chess_row +="\n";
	}
	// console.log(chess_row);
}
chess(8);

