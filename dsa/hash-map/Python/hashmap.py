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
        # Use hash function get address
        index = self.__hash(key)
        # Initialize empty list at address
        if self.bucket[index] == None:
            # Create list inside bucket
            self.bucket[index] = []
        # Append key value pair in bucket
        self.bucket[index].append([key, value])
        
    def get_item(self, key):
        # Use hash function to get address 
        index = self.__hash(key)
        if self.bucket[index] is not None:
            # Iterate through key value pairs in bucket
            for i in range(len(self.bucket[index])):
                # If item key == get_item(key), return value 
                if self.bucket[index][i][0] == key:
                    return self.bucket[index][i][1]
        return None

    # Return keys in each bucket
    def keys(self):
        all_keys = []
        for i in range(len(self.bucket)):
            # Use second for loop for chaining 
            if self.bucket[i] is not None:
                for j in range(len(self.bucket[i])):
                    all_keys.append(self.bucket[i][j][0])
        return all_keys
    
    def values(self):
        all_values = []
        for i in range(len(self.bucket)):
            if self.bucket[i] is not None:
                for j in range(len(self.bucket[i])):
                    all_values.append(self.bucket[i][j][1])
        return all_values



# Practice map and lambda functions 
# Not related to hashmaps lol
a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
b = map(lambda x: x * 2 + 1, a)
print(list(b))


# Test Cases
my_hash = HashTable()

my_hash.set_value('apples', 27)
my_hash.set_value('bananas', 44)
my_hash.set_value('kiwis', 14)
my_hash.set_value('cherries', 27)

my_hash.print_table()

print(my_hash.get_item('cherries'))
print(my_hash.get_item('tomatoes'))

print(my_hash.keys())
print(my_hash.values())
