import { Node } from "./new-node.js";

export class HashMap{
    constructor(loadFactor = 0.8, capacity = 16) {
        this.buckets = new Array(capacity);
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
        const primeNum = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNum * hashCode + key.charCodeAt(i);
        }
        return hashCode
    }

    printAll() {
        if (this.size == 0) {
            return console.log('No key-value pairs in hashtable!')
        }
        for (let i = 0; i < this.buckets.length; i++) {
            let current = this.buckets[i]
            while (current) {
                console.log(`${current.key}: ${current.value}`)
                current = current.next;
            }
        }
    }

    insert(key, value) {
        const index = this.hash(key) % this.capacity;

        // Prevent dupliate keys
        let current = this.buckets[index]
        while (current) {
            if (current.key === key) {
                current.value = value
                return
            }
            current = current.next;
        }
        
        const newNode = new Node(key, value);
        // If bucket is empty
        if (!this.buckets[index]) {
            this.buckets[index] = newNode;
        }
        else {
            current = this.buckets[index]
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        this.size ++;
        
        if (this.size >= this.capacity * this.loadFactor) {
            this.increaseCapacity();
        }
    }

    rehash() {
        this.size = 0;
        const resizedBuckets = this.buckets;
        this.buckets = new Array(this.capacity);

        resizedBuckets.forEach(bucket => {
            let current = bucket;
            while (current) {
                this.insert(current.key, current.value);
                current = current.next;
            }
        })
    }

    increaseCapacity() {
        this.capacity *= 2;
        this.rehash();
    }
    
    getValue(key) {
        const index = this.hash(key) % this.capacity;
        
        let current = this.buckets[index];
        while (current) {
            if (current.key === key) {
                return current.value
            }
            current = current.next
        }
        return 'Key not in hashmap!'    
    }

    hasKey(key) {
        const index = this.hash(key) % this.capacity;

        let current = this.buckets[index]
        while(current) {
            if (current.key === key) {
                return true;
            }
            current = current.next
        }
        return false
    }

    removeKey(key) {
        const index = this.hash(key) % this.capacity;
        let current = this.buckets[index];
        let prev = null;

        while(current) {
            if (current.key === key) {
                if (prev) {
                    prev.next = current.next
                }
                else {
                    this.buckets[index] = current.next
                }
                this.size --;
                return 
            }
            prev = current;
            current = current.next;
        }
    }

    getSize() {
        return this.size;
    }

    clearAll() {
        if (this.size == 0) {
            return 'Hashtable already cleared!!'
        }
        for (let i = 0; i < this.buckets.length; i++) {
            this.removeKey(i);
        }
        return 'Cleared the hashmap!'
    }

    getAllKeys() {
        if (this.size == 0) {
            return 'No keys in hashtable!'
        }
        let keysArray = []
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.hasKey(i)) {
                keysArray.push(i)
            }
        }
        return keysArray;
    }

    getAllValues() {
        if (this.size == 0) {
            return 'No values in hashtable!'
        }
        let valuesArray = []
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.hasKey(i)) {
                valuesArray.push(this.getValue(i))
            }
        }
        return valuesArray;
    }

    printHashMap() {
        if (this.size == 0) {
            return console.log('No key-value pairs in hashtable!')
        }
        let hashmap = []
        for (let i = 0; i < this.buckets.length; i++) {
            let current = this.buckets[i]
            while (current) {
                hashmap.push(`[${current.key}: ${current.value}]`);
                current = current.next;
            }
        }
        return console.log(hashmap)
    }

    getBuckets() {
        return `Buckets: ${this.buckets.length}`
    }

    testLoadFactor(testPairs) {
        for (let i = 0; i < testPairs; i++) {
            this.insert(i, 'testValue')
        } 
    }
}







