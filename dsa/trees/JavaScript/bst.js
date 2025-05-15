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

    breadthFirst(node) {
        const queue = []
        const result = []
        queue.push(node);

        while(queue.length) {
            // Make current node first element in queue
            const currrentNode = queue.shift()
            // Push current node to results
            result.push(currrentNode.value)

            // Add left child node (if exists)
            if (currrentNode.left) {queue.push(currrentNode.left)}

            // Add right child node (if exists)
            if (currrentNode.right) {queue.push(currrentNode.right)}
        }
        return result;
    }

    dfsPreOrder(node) {
        const queue = []
        const result = []
        queue.push(node)

        while (queue.length) {
            // Make current node last element in queue
            const currrentNode = queue.pop()
            result.push(currrentNode.value)

            if(currrentNode.right) {queue.push(currrentNode.right)}

            if (currrentNode.left) {queue.push(currrentNode.left)}
        }
        return result;
    }
    
    /* 
    Function: Recursively call _height for every level, find height of tree
    
    Definitions: 
    Height is largest depth 
    Depth is number of edges from root to node

    Example:
             4
            / \
           2   6
          /\   /\
         1 3  5  7
        
    Bottom Layer:
        root = 1 (not null), this.height(root.left) & root.right == null
        Math.max(-1, -1) + 1 = 0

    Next Layer:
        root = 2 (not null), this.height(root.left) & root.right == 0
        Math.max(0, 0) + 1 = 1

    Top Layer (Root):
        root = 4 (not null), this.height(root.left) & root.right == 1
        Math.max(1, 1) + 1 = 2

    Height = 2
     */
    _height(node) {
        // Use for leaf node (initializes height as 0)
        if (node === null) return -1;

        let leftHeight = this._height(node.left)
        const rightHeight = this._height(node.right)

        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Return the height of any subtree in BST
    height(value) {
        // Initalize node by finding value in tree
        const node = this.find(value)

        // If value not in tree
        if (!node) return `${value} not in tree`
        
        return this._height(node)
    }

    /* 
    Function: Recursively call depth for every level, starting at the node passed
    as param, to find depth of node
    
    Definitions: 
    Depth is number of edges from root to node

    Example:
             4
            / \
           2   6
          /\   /\
         1 3  5  7
        
    Top Layer (Root):
        depth(1, currentNode = 4, currentLevel = 0)

    Next Layer:
        depth(1, currentNode = 2, currentLevel = 1)

    Bottom Layer (Value):
        depth(1, currentNode = 1, currentLevel = 2)

    Depth = 2
     */
    depth(value, currentNode = this.root, currentLevel = 0) {
        // If value not in tree
        if (!currentNode) return `${value} not in tree`

        // Return depth 0 if currentNode is root
        if (currentNode.value === value) return currentLevel;

        // Recursively move left or right from root to node
        if (value < currentNode.value) {
            return this.depth(value, currentNode.left, currentLevel + 1)
        }
        else {
            return this.depth(value, currentNode.right, currentLevel + 1)
        }
    }
    
    /* 
    Function: Checks if the BST is balanced
    
    Definitions: 
    Balanced BST - For every node in tree, height difference between left 
    and right is no more than 1, and both left and right subtrees are balanced

    Example 1:
             4
            / \
           2   6
          /\   /\
         1 3  5  7

    isBalanced = true

    Example 2:
             4
            / \
           2   6
          /\   /\
         1 3  5  7
                  \ 
                  12

    isBalanced = true

    Example 3:
             4
            / \
           2   6
          /\   /\
         1 3  5  7
                  \ 
                  12
                  /\
                 9  15

    isBalanced = false
     */
    isBalanced(node = this.root) {
        // For empty tree
        if (!node) return true;

        // Calculate height of left and right side of trees
        const leftHeight = this._height(node.left)
        const rightHeight = this._height(node.right);

        // Calculate difference of heights
        const heightDifference = Math.abs(leftHeight - rightHeight);

        // Determine if left & right subtrees are balanced
        const leftBalanced = this.isBalanced(node.left)
        const rightBalanced = this.isBalanced(node.right)

        // Return true if difference <= 1 & both left and right subtrees are balanced
        return heightDifference <= 1 && leftBalanced && rightBalanced
    }
}


