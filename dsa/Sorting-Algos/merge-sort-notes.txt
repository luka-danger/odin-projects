/* MERGE SORT */

// 5, 2, 1, 3, 6, 4

// how is storage and garbage collection in merge sort??
// faster - but is it memory efficient compared to other sorting algos? 

/* SORT LEFT HALF [5, 2, 1] */
// 5 is left half: 5
// Sort left half of 2, 1: 2
// Sort right half of left half: 1

// Merge left half
// 1 has lower element so it goes in index 0 of new array
// 2 is lower than null, so index 1 is 2
// Merge left half and right half. Compare 5 and 1
// 1 is smaller so 5 becomes index 1
// 2 i lower than 5, 2 becomes index 1 in new index 
// 5 is last number, so it become index 2 in new array

/* SORT RIGHT HALF [3, 6, 4] */
// Sort left half of array: 3
// Sort right half -> start w/ left half: 6
// 4 is last number so it is sorted w/ 4

// Merge right half
// 3 has lowest element so it is index 0 in new array
// 4 is lower index so it is index 1
// 6 is last remaining, so it is largest and goes in index 2 

/* MERGE BOTH ARRAYS */ 
// 3 is lowest number, so merge it with other array (index 4)
// We know everything in to the right of 3 is larger than 3, so merge 
// remainder of the array: current - 1, 2, 5, 3, 4, 6

/* FINAL SORTING */
// 2 halves: 1, 2, 5 | 3, 4, 6
// 1 is lower than 3 so 1 stays in current position 
// 2 is lower than 3 so 2 stays in current position 
// 3 is lower than 5 so they switch positions 
// 4 is lower than 5 so they switch positions 
// 5 is lower than 6 so it stays in current position 
// 6.next = null, so 6 stays

/* NOTES
- go through process recursively and breaking problems down into 
subarrays to complete the sort

- Pros: 
Worst case scenario is - O(n log n)
Best case scenaior is - O(n log n)

- Cons: 
Less straght forward than bubble sort, insertion sort, & selection sort
where worst case is O(n^2)

*/