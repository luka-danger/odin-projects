import { Tree } from "./bst.js";

let myTree = new Tree()

let myArr = [1, 2, 3, 4, 5, 6, 7]

myTree.buildTree(myArr)


console.log(myTree.root.value)
console.log(myTree.root.left.value)
console.log(myTree.root.right.value)


myTree.insert(12)
myTree.insert(9)
myTree.insert(15)

// myTree.delete(9)
// myTree.delete(12)
// myTree.delete(12)

myTree.prettyPrint(myTree.root)

console.log(myTree.minValue(12))

console.log(myTree.breadthFirst(myTree.root))

console.log(myTree.dfsPreOrder(myTree.root))

console.log(`Height: ${myTree.height(4)}`)

console.log(`Depth: ${myTree.depth(7)}`)

console.log(myTree.isBalanced())



