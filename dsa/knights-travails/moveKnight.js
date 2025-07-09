import { getValidKnightMoves } from "./validKnightMoves.js";
import { samePosition } from "./utilities.js";

/* 
Function Type: Breadth-First Search (BFS)

Description: 
This function finds the shortest path a knight can take from a starting square 
to an ending square on a standard 8x8 chessboard.

It uses a queue to explore paths in breadth-first order, ensuring the shortest 
path is found. Each item in the queue is a path (an array of positions on the
chessboard), and each step expands all valid knight moves from the current position.

A Set is used to track visited positions to exploring repeat paths (unique values only).

The function returns an array representing the full sequence of moves the knight 
makes from the start to the end position (inclusive).

Expected Output:
An array of positions (each a [x, y] array) showing the shortest path.
Example: moveKnight([0, 0], [3, 3]) => [[0, 0], [1, 2], [3, 3]]
*/
export function moveKnight(start, end) {
    // Track next position
    const queue = [[start]]
    // Track all explored paths 
    // Use set to prevent duplicates
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        // Take first item in queue (index 0)
        const path = queue.shift()
        const current = path[path.length - 1]

        // Check if current === end
        if (samePosition(current, end)) {
            return path
        }
        // Get valid moves and add to queue
        for (const move of getValidKnightMoves(current)) {
            const key = move.toString();
            if (!visited.has(key)) {
                // Add unique value to set
                visited.add(key)
                // Use spread operator to push path output into new array
                queue.push([...path, move])
            }
        }
    } 
}