import { Node } from "./new-node.js"

export class Tree {
    constructor() {
        this.root = null;
    }

    __buildTree(array, start, end) {
        if (start > end) return null;
        
        // Set root node (mid point of array)
        let mid = start + Math.floor((end - start) / 2)
        let root = new Node(array[mid])

        // Create left subtree
        root.left = this.__buildTree(array, start, mid - 1)

        // Create right subtree
        root.right = this.__buildTree(array, mid + 1, end)

        return root;
    }

    buildTree(array) {
        this.root = this.__buildTree(array, 0, array.length - 1);
    }

    prettyPrint(node, prefix = '', isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }
}

let myTree = new Tree()

let myArr = [1, 2, 3, 4, 5, 6, 7]

myTree.buildTree(myArr)

console.log(myTree.root.value)
console.log(myTree.root.left.value)
console.log(myTree.root.right.value)

myTree.prettyPrint(myTree.root)