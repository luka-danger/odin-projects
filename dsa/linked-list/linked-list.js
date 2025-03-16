// Node constructor
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// Linked List constructor of size 1
class LinkedList {
    constructor(value) {
        let new_node = new Node(value)
        this.head = new_node
        this.tail = new_node
        this.length = 1
    }

    printList() {
        let temp = this.head
        for (let i = 0; i < this.length; i++) {
            console.log(temp.value)
            temp = temp.next
        }
    }

    getSize() {
        return this.length
    }

    printSize() {
        console.log(this.length)
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
        return temp.value
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

    
}

let coolList = new LinkedList(1)

coolList.append(2)
coolList.append(3)
coolList.append(4)
coolList.append(5)
coolList.append(6)

coolList.prepend(0)



