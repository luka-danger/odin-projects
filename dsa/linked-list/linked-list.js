// Node constructor
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// Linked List constructor of size 0
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0

    }
    append(value) {
        let new_node = new Node(value)
        if (!this.head) {
            this.head = new_node
            this.tail = new_node
        }
        else {
            this.tail.next = new_node
            this.tail = new_node
        }
        while (this.head.next != null) {

            length ++ 
        }
    }
}

// Tutorial :) :) :) 
// https://www.raulmelo.me/en/blog/data-structure-with-javascript-linked-list

let myList = new LinkedList()
myList.append(7)
myList.append(9)
myList.append(12)

console.log(myList)