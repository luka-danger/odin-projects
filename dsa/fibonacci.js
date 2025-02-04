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
    return myArr
}

function fibonacciForLoop(length) {
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
    for (let i = 2; i < length; i++) {
        z = x + y
        myArr.push(z)
        x = y
        y = z
    }
    return myArr
}

function fibonacciRecursion(length) {
    // Return empty array for 0 or negative values
    if (length <= 0) return []
    // Base case
    if (length === 1) return [0]
    if (length === 2) return [0, 1]

    const fibonacci = fibonacciRecursion(length - 1);

    // Add sum of last 2 elements
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);

    return fibonacci
}

// Output to Console
console.log('--------Test Loop-----------')
testLoop()
console.log("")
console.log('--------Fibonacci-----------')
console.log(`While Loop:  [${fibonacciWhileLoop(10)}]`)
console.log(`For Loop: [${fibonacciForLoop(10)}]`)
console.log(`Recursion [${fibonacciRecursion(10)}]`)
console.log("")

/* USE TO CALL FUNCTIONS VIA COMMAND LINE :) 

// Read command-line argument 
const args = process.argv.slice(2)  // The first two elements are node and the script path, so slice to get actual arguments
const length = parseInt(args[0], 10)  // Convert the argument to an integer

// Call the function and output the result
if (!isNaN(length)) {
    testLoop()
    // console.log(fibonacciWhileLoop(length));
    // console.log(fibonacciForLoop(length))
    // console.log(fibonacciRecursion(length))
} else {
    console.log("Please provide a valid number.")
}

*/ 