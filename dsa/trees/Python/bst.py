class Node:
    def __init__(self, value):
        self.value = value
        self.right = None
        self.left = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        new_node = Node(value)
        if self.root is None:
            self.root = new_node
            return True
        temp = self.root
        while True:
            # Prevent Duplicates (Compare Values)
            if new_node.value == temp.value:
                return False
            # Go left if insert value is smaller than current node
            if new_node.value < temp.value:
                if temp.left is None:
                    temp.left = new_node
                    return True
                temp = temp.left
            # If new_node.value > temp.value
            else:
                if temp.right is None:
                    temp.right = new_node
                    return True
                temp = temp.right

    def contains(self, value):
        temp = self.root
        while temp != None:
            if value < temp.value:
                temp = temp.left
            elif value > temp.value:
                temp = temp.right
            else:
                return True
        return False
    
    # Don't call this one directly, use for recursion
    def __r_contains(self, current_node, value):
        if current_node == None:
            return False
        if value == current_node.value:
            return True
        if value < current_node.value:
            return self.__r_contains(current_node.left, value)
        if value > current_node.value:
            return self.__r_contains(current_node.right, value)
        
    def r_contains(self, value):
        return self.__r_contains(self.root, value)

    # Don't call this one directly, use for recursion
    def __r_insert(self, current_node, value):
        if current_node == None:
            return Node(value)
        if value < current_node.value:
            current_node.left = self.__r_insert(current_node.left, value)  
        if value > current_node.value:
            current_node.right = self.__r_insert(current_node.right, value)
        return current_node
    
    def r_insert(self, value):
        if self.root == None:
            self.root = Node(value)
        self.__r_insert(self.root, value)
        



my_tree = BinarySearchTree()

my_tree.insert(47)
my_tree.insert(12)
my_tree.insert(52)

print(my_tree.root.value)
print(my_tree.root.left.value)
print(my_tree.root.right.value)

print(f'Contains 47? - {my_tree.contains(47)}')
print(f'Contains 9? - {my_tree.contains(9)}')

print(f'Contains 12? - {my_tree.r_contains(12)}')
print(f'Contains 19? - {my_tree.r_contains(19)}')

my_tree.r_insert(7)
my_tree.r_insert(78)
