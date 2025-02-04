// test Node CLI
function testLoop() {
    let arr = ['cherry', 'peach', 'kiwi']

    for (element in arr) {
        // Output each element of array
        console.log(arr[element])
    }
}


function fibonacciWhileLoop(length) { 
    // Return empty array for 0 or negative values
    if (length <= 0) return []
    // Base case
    if (length === 1) return [0]

    // Initialize array w/ first 2 values of Fibonacci sequence
    myArr = [0, 1]
    let x = 0
    let y = 1
    let z
    
    // Start from third element since 2 items in array
    let i = 2
    while (i < length) {
        z = x + y
        myArr.push(z)
        x = y
        y = z
        i++
    }
    return `While Loop: [${myArr}]`
}

// Read command-line argument
const args = process.argv.slice(2);  // The first two elements are node and the script path, so slice to get actual arguments
const length = parseInt(args[0], 10);  // Convert the argument to an integer

// Call the function and output the result
if (!isNaN(length)) {
    testLoop()
    console.log(fibonacciWhileLoop(length));
} else {
    console.log("Please provide a valid number.");
}
