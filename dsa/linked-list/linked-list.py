class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

# LL Constructor w/ one node
class LinkedList:
    def __init__(self, value):
        new_node = Node(value)
        self.head = new_node
        self.tail = new_node
        self.length = 1
    
    def print_list(self):
        temp = self.head
        while temp:
            print(temp.value)
            temp = temp.next

    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else: 
            # Add new node to end of linked list
            self.tail.next = new_node
            # Set tail to newly added node
            self.tail = new_node
        self.length += 1
        # Used for methods that call append() and require boolean
        return True
    
    def pop(self):
        if self.length == 0:
            return None
        temp = self.head
        pre = self.head

        while temp.next:
            pre = temp
            # Move temp pointer to the end of the linked list
            temp = temp.next
        # Pre will be pointing at second to last node
        # Set new tail to node pre is pointing to
        self.tail = pre
        # Pop end node off linked list
        self.tail.next = None
        self.length -= 1
        # If the linked list only had one node, use this to reset head and tail pointers
        if self.length == 0:
            self.head = None
            self.tail = None
        return temp

    def prepend(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            # Point new node to head
            new_node.next = self.head
            # Set head to newly prepended node
            self.head = new_node
        self.length += 1
        # Used for methods that call append() and require boolean
        return True

    def pop_first(self):
        if self.length == 0:
            return None
        # Set temp variable to first node in list
        temp = self.head
        # Set head pointer to next Node
        self.head = self.head.next
        # Remove first node from list
        temp.next = None
        self.length -= 1
        # When starting w/ one item
        if self.length == 0:
            self.tail = None
        return temp

    # Return value of item in index
    def get(self, index):
        # Prevent out of range error
        if index < 0 or index >= self.length:
            return None
        temp = self.head
        # Iterate to the length of the index
        # Use _ as it is not being used inside for loop
        for _ in range(index):
            temp = temp.next
        return temp

    # Set value at given index (think change value - not insert)
    def set_value(self, index, value):
        temp = self.get(index)
        if temp: 
            temp.value = value
            return True
        # If temp value returns None
        return False


    def insert(self, index, value):
        # Out of range
        if index < 0 or index > self.length:
            return False
        # Add node to beginning 
        if index == 0:
            return self.prepend(value)
        # Add node to end
        if index == self.length:
            return self.append(value)
        # Insert new node somewhere else in list
        new_node = Node(value)
        # Point temp to given node
        temp = self.get(index - 1)
        # Point new node to next node
        new_node.next = temp.next
        # Point previous node at index to new node
        temp.next = new_node
        self.length += 1
        return True 


    def remove(self, index):
        

    #def reverse():


## Time Complexity for each Method

## Space Complexity

## Test Methods ## 

my_linked_list = LinkedList(7)


my_linked_list.append(9)
my_linked_list.append(2)
my_linked_list.append(13)

print(f'Removed node {my_linked_list.pop().value}')

my_linked_list.prepend(12)

my_linked_list.pop_first()

# Return value of item in index 1
print(f'The value at index 1: {my_linked_list.get(1).value}')


my_linked_list.insert(2, 27)

my_linked_list.print_list()


