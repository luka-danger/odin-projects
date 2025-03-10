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
        
            

    #def prepend(self, value):
    #def insert(self, value):

my_linked_list = LinkedList(7)


my_linked_list.append(9)
my_linked_list.append(2)

my_linked_list.print_list()
