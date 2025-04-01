# Should always use a prime number of addresses (increases randomness for distributing pairs -> reducing collisions)

# Constructor 
class HashTable:
    # Create a map of 7 items w/ no elements in any bucket
    def __init__(self, size = 7):
        # Create buckets
        self.bucket = [None] * size

    def __hash(self, key):
        my_hash = 0
        for letter in key:
            # ord() gets ASCII value for each letter 
            my_hash = (my_hash + ord(letter) * 23) % len(self.bucket)
        return my_hash
    
    def print_table(self):
        for i, value in enumerate(self.bucket):
            print(f'{i}: {value}')
            
    def set_value(self, key, value):
        # Use hash function get compute address
        index = self.__hash(key)
        # Initialize empty list at address
        if self.bucket[index] == None:
            # Create list inside bucket
            self.bucket[index] = []
        # Append key value pair in bucket
        self.bucket[index].append([key, value])
        



a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
b = map(lambda x: x * 2 + 1, a)
print(list(b))

my_hash = HashTable()

my_hash.set_value('apples', 27)
my_hash.set_value('bananas', 44)
my_hash.set_value('kiwis', 14)
my_hash.set_value('cherries', 27)

my_hash.print_table()

