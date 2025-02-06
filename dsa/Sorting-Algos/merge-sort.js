// Sort left half of numbers
// Sort right half of numbers
// Merge sorted halves

let unsortedArray = [5, 2, 1, 3, 6, 4]

function mergeSort(array) {
    // base case
    if (array.length == 1 || array.length == 0) {
        return array
    }
    // Divide array into 2 sides
    let middle = Math.floor(array.legnth / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle)

    // Recursive

    /* 
    General idea of how to do it lol
    // add empty array
    let sortedArray = []
    if (array[0] < array[array.length / 2]) {
        sortedArray.push(array[0])
    } else { sortedArray.push(array[array.length / 2]) }

    if (array[1] < array[array.length / 2 + 1]) {
        sortedArray.push(array[2])
    } else { sortedArray.push(array[array.length / 2 + 1]) }

    return console.log(sortedArray)
    */ 
}

// console.log(unsortedArray[(6 / 2) + 2])

mergeSort(unsortedArray)