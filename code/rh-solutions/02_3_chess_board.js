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