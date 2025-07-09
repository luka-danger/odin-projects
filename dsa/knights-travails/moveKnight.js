import { getValidKnightMoves } from "./validKnightMoves.js";
import { samePosition } from "./utilities.js";

// Move Knight - BFS Function
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
        // TODO: Get valid moves and add to queue
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