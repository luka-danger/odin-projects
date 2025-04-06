import { HashMap } from "./hashmap.js"

// CREATE NEW INSTANCE OF HASHMAP
let myMap = new HashMap()

// TEST INSERT METHOD
myMap.insert(1, 'noodles')
myMap.insert(2, 'grapes')
myMap.insert(3, 'kiwis')
myMap.insert(5, 'mangos')

// TEST PRINT METHOD
/* Expected Output:
1: noodles
2: grapes
3: kiwis
5: mangos
*/
myMap.printAll()

// TEST GET VALUE METHOD
/* Expected Output:
grapes
Key not in hashmap!
*/
console.log(myMap.getValue(2))
console.log(myMap.getValue(4))

// TEST HAS KEY METHOD
/* Expected Output:
true
false
*/
console.log(myMap.hasKey(1))
console.log(myMap.hasKey(55))

// TEST REMOVE METHOD
myMap.removeKey(5)
myMap.printAll()

// TEST GET SIZE METHOD
/* Expected Output: 
Size: 3
*/
console.log(`Size: ${myMap.getSize()}`)

// TEST GET ALL VALUES
// Expected Output: [ 'noodles', 'grapes', 'kiwis' ]
console.log(myMap.getAllValues())

// TEST GET ALL KEYS
// Expected Output: [ 1, 2, 3 ]
console.log(myMap.getAllKeys())

// TEST PRINT HASHMAP METHOD
// Expected Output: [ '[1: noodles]', '[2: grapes]', '[3: kiwis]' ]
myMap.printHashMap()

// TEST CLEAR ALL
// Expected Output: No key-value pairs in hashtable!
myMap.clearAll()
myMap.printAll()

// TEST GET BUCKETS
// Expected Output: 'Buckets: 16'
console.log(myMap.getBuckets())

// TEST LOAD FACTOR
/* Expected Output:
0: testValue
1: testValue
2: testValue
3: testValue
4: testValue
5: testValue
6: testValue
7: testValue
8: testValue
9: testValue
10: testValue
11: testValue
12: testValue
13: testValue
14: testValue
15: testValue
Buckets: 32
*/
myMap.clearAll()
myMap.testLoadFactor(16)
myMap.printAll()
console.log(myMap.getBuckets())