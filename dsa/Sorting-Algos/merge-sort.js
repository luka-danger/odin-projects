// Sort left half of numbers
// Sort right half of numbers
// Merge sorted halves

let unsortedArray = [5, 2, 1, 3, 6]
let unsortedArrayUneven = [5, 2, 7, 1, 3, 6]

function mergeSort(array) {
    // base case
    if (array.length <= 1) {
        return array
    }
    // Divide array into 2 sides
    let middle = Math.floor(array.length / 2)
    let leftSide = array.slice(0, middle)
    let rightSide = array.slice(middle)

    // Recursive Sort
    return merge(mergeSort(leftSide), mergeSort(rightSide))
} 

function merge(left, right) {
    // add empty array
    let sortedArray = []

    // Merge sorted halves
    while (left.length > 0 && right.length > 0) {
        /* 
        Ternary Conditional Statement: 

        If left[0] < [right], push left element
        Else, push right element
        Use .shift() to remove and remove first element

        While Loop will continue to run until no elements remain
        */
        sortedArray.push(left[0] < right[0] ? left.shift() : right.shift())
    }
    
    // Add any remaining numbers
    return sortedArray.concat(left, right)
    
}

console.log(mergeSort(unsortedArray))
console.log(mergeSort(unsortedArrayUneven))