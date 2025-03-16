from linked_list import LinkedList

# Extend LinkedList Class (Inheritance)
class newLinkedList(LinkedList):
    def sayColorAndValue(self, index, color):
        return f'Color: {color} , Value at Index {index}: {self.get(index).value}'
    
my_cool_list = newLinkedList(1)
my_cool_list.append(2)
my_cool_list.append(3)
my_cool_list.append(4)
my_cool_list.append(5)


print(my_cool_list.sayColorAndValue(1, 'green'))

my_cool_list.reverse()

my_cool_list.print_list()