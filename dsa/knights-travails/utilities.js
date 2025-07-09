// Helper function to determine if current position === end position
export function samePosition(pos1, pos2) {
    return pos1[0] === pos2[0] && pos1[1] === pos2[1]
}

/*
Expected Output:
'You made it in 2 moves! Here's your path:
[ 3, 3 ]
[ 5, 4 ]
[ 4, 2 ]'
*/
export function prettyPrint(path) {
    // Edge case - only 1 move required
    if ((path.length - 1) === 1) {
        console.log(`You made it in ${path.length - 1} move! Here's your path:`)
    }
    else {
        console.log(`You made it in ${path.length - 1} moves! Here's your path:`)
    }
    // Loop through each node in path
    for (const node of path) {
        console.log(node)
    }
}