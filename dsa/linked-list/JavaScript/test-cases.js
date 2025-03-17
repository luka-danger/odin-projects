import { LinkedList } from "./linked-list.js"

// Create New Linked List
let coolList = new LinkedList(1)

// Test Append Method
coolList.append(2)
coolList.append(3)
coolList.append(4)
coolList.append(5)
coolList.append(6)

// Test Prepend Method
coolList.prepend(0)


// Test contains method
console.log(coolList.contains(19))
console.log(coolList.contains(3))


// Test insert method
coolList.insert(3, 'dance party!!!!')
coolList.insert(8, 7)
coolList.insert(7, 'another dance party!!!!!!')

// Test Remove Method
coolList.prepend('remove me')
coolList.remove(0)
coolList.printList()


// Test Get Value at Index Method
console.log(`Index 0 value: ${coolList.getValueAtIndex(0).value} `)
console.log(`Index 3 value: ${coolList.getValueAtIndex(3).value} `)


// Test To String Method
coolList.remove(7)
coolList.remove(3)
coolList.pop()
console.log(coolList.toString())


