import { Tree } from "./bst.js";

// Initialize new BST
let myTree = new Tree()

let myArr = [1, 2, 3, 4, 5, 6, 7]

// TEST: buildTree()
// Build BST using array values
myTree.buildTree(myArr)

// Output values for root, root.left, and root.right
console.log(myTree.root.value)
console.log(myTree.root.left.value)
console.log(myTree.root.right.value)

// TEST: insert()
// Insert values into BST
myTree.insert(12)
myTree.insert(9)
myTree.insert(15)

// TEST: delete()
// Delete values from BST
// myTree.delete(9)
// myTree.delete(12)
// myTree.delete(12)

/* Prints BST

Example Output: 

│               ┌── 15
│           ┌── 12
│           │   └── 9
│       ┌── 7
│   ┌── 6
│   │   └── 5
└── 4
    │   ┌── 3
    └── 2
        └── 1
*/
myTree.prettyPrint(myTree.root)

// TEST: minValue()
// Find minimum value of subtree
console.log(myTree.minValue(12))

// TEST: breadthFirst()
// Traverse BST following BFS
console.log(myTree.breadthFirst(myTree.root))

// TEST: dfsPreOrder()
// Traverse BST following DFS - Pre-Order
console.log(myTree.dfsPreOrder(myTree.root))

// TEST: height()
// Find height of any subtree
console.log(`Height: ${myTree.height(4)}`)

// TEST: depth()
// Find depth from given node to root
console.log(`Depth: ${myTree.depth(7)}`)

// TEST: isBalanced()
// Return true if BST is balanced, or false
console.log(myTree.isBalanced())



