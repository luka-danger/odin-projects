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

    insert(value) {
        // If tree is empty, make value root node
        if (this.root === null) {
            return this.root = new Node(value)
        }
        let current = this.root
        while(current) {
            // Prevent duplicate values
            if (value === current.value) return null
            if (value < current.value) {
                // If no left node, insert value on left
                if (!current.left) return current.left = new Node(value)
                // Otherwise make left node current node and continue
                current = current.left
            }
            else {
                // If no right node, insert value on right
                if (!current.right) return current.right = new Node(value)
                // Otherwise make left node current node and continue
                current = current.right
            }
        }
    }

    __delete(current, value) {
        // If tree is empty
        if (!this.root) return console.log('Tree empty')
        // If value not in tree
        if (current === null) {
            console.log(`${value} not in binary tree`)
            return null;
        }
        // If value is larger than current node value -> recursively move right 
        if (value > current.value) {
            current.right = this.__delete(current.right, value)
        }
        // If value is less than current node value -> recursively move left
        else if (value < current.value) {
            current.left = this.__delete(current.left, value)
        }
        else {
            // If node has one or no child 
            if (current.left === null) return current.right;
            if (current.right === null) return current.left;

            // If subtree node has two children
            // Find min value of subtree
            let subTreeMin = this.minValue(current.right.value)
            // Set value of current node to min value of subtree
            current.value = subTreeMin
            // Remove subtree min value
            current.right = this.__delete(current.right, subTreeMin)
            
        }
        return current
    }

    minValue(value) {
        // Use find function to set value 
        let current = this.find(value)
        // If value not in binary tree
        if (!current) return `${value} not in binary tree`
        // While a left node exists in subtree, continue moving left
        while (current.left) {
            current = current.left
        }
        // Return lowest value of subtree
        return current.value; 
    }

    find(value, current = this.root) {
        // If value does not exist in tree
        if (!current) return null;
        // Return value when found
        if (current.value === value) return current;
        // If value is less than current node, recursively move left down tree
        if (value < current.value) return this.find(value, current.left);
        // Else, value must be larger than current node, recursively move right down tree
        return this.find(value, current.right);
    }

    delete(value) {
        this.root = this.__delete(this.root, value)
    }
}

let myTree = new Tree()

let myArr = [1, 2, 3, 4, 5, 6, 7]

myTree.buildTree(myArr)


console.log(myTree.root.value)
console.log(myTree.root.left.value)
console.log(myTree.root.right.value)

myTree.insert(12)
myTree.insert(9)
myTree.insert(15)

myTree.delete(9)
myTree.delete(12)
myTree.delete(12)
myTree.prettyPrint(myTree.root)

console.log(myTree.minValue(12))

