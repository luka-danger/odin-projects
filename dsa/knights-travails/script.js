/* 
Function: Takes the initial knight position on the 8x8 chessboard, 
loop through all possible knight moves, check constraints to ensure 
the moves are within the chessboard, and add them to an array that 
stores all possible moves
*/
function getValidKnightMoves(position) {
  // Set current position on the 8x8 chessboard
  const [x, y] = position;
  // Create array of all possible knight moves
  const knightMoves = [
    [2, 1], [2, -1], [1, 2], [1, -2], [-2, 1], [-2, -1], [-1, 2], [-1, -2]
  ];
  // Create array to store list of valid moves
  const validMoves = []

  // Add possible moves to initial position 
  for (const [moveX, moveY] of knightMoves) {
    const newX = x + moveX;
    const newY = y + moveY;

    // Prevent adding moves that are outside the 8x8 board
    if (newX > 0 && newX < 8 && newY > 0 && newY < 8) {
    validMoves.push([newX, newY])
    }
  }

  return validMoves
}

// Test case 
// Should output 8 moves
console.log(getValidKnightMoves([3, 3])); 