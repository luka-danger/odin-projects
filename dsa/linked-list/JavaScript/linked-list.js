import { Node } from "./node-class.js"

// Linked List constructor of size 1
export class LinkedList {
    constructor(value) {
        let new_node = new Node(value)
        this.head = new_node
        this.tail = new_node
        this.length = 1
    }

    printList() {
        if (this.length == 0) {
            return console.log('No nodes in list :(')
        }
        let temp = this.head
        for (let i = 0; i < this.length; i++) {
            console.log(temp.value)
            temp = temp.next
        }
    }

    getValueAtIndex(index) {
        if (index < 0 || index >= this.length) {
            return false
        }
        let temp = this.head
        let count = 0;
        while (count < index) {
            temp = temp.next
            count ++
        }
        return temp
    }

    append(value) {
        let new_node = new Node(value)
        if (this.length == 0) {
            this.head = new_node
            this.tail = new_node
        }
        else {
            this.tail.next = new_node
            this.tail = new_node
        }
        this.length ++
        return true
    } 
    prepend(value) {
        let new_node = new Node(value)
        if (this.length == 0) {
            this.head = new_node
            this.tail = new_node
        }
        else {
            new_node.next = this.head
            this.head = new_node
        }
        this.length ++
        return true
    }

    pop() {
        if (this.length == 0) {
            return null
        }
        let temp = this.head
        let pre = this.tail

        while (temp.next) {
            pre = temp
            temp = temp.next
        }

        this.tail = pre
        this.tail.next = null
        this.length -- 
        return temp
    } 

    popFirst() {
        if (this.length == 0) {
            return null
        }
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length --
        if (this.length == 0) {
            this.tail = null
        } 
        return temp
    }

    contains(value) {
        let temp = this.head
        for (let i = 0; i < this.length; i++) {
            if (temp.value == value) {
                return `Value ${value} at index ${i}`
            }
            temp = temp.next
        }
        return `Value ${value} not in linked list`
    }

    
    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false
        }
        if (index == 0) {
            return this.prepend(value)
        }
        if (index == this.length) {
            return this.append(value)
        }
        let new_node = new Node(value)
        let temp = this.getValueAtIndex(index - 1)
        new_node.next = temp.next
        temp.next = new_node
        this.length ++
    }
    
    remove(index) {
        if (index < 0 || index > this.length) {
            return null
        }
        if (index == this.length - 1) {
            return this.pop()
        }
        if (index == 0) {
            return this.popFirst()
        }
        let prev = this.getValueAtIndex(index - 1)
        let temp = prev.next
        prev.next = temp.next
        temp.next = null 
        this.length --
        return temp
    }

    toString() {
        if (this.length == 0) {
            return null
        }
        let temp = this.head
        let string = ''
        while (temp.next != null) {
            string = string.concat(`( ${temp.value} ) -> `)
            temp = temp.next
        }
        string = string.concat(`( ${temp.value} ) -> null`)
        return string
    }   
     
}
