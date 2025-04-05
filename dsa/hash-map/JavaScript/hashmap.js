import { Node } from "./new-node.js";

class HashMap{
    constructor() {
        this.buckets = new Array(16);
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
        // 🚨 FIX ME: Create an if that lets user know if nothing is in the hashtable

        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                this.buckets[i].forEach(([key, value]) => console.log(`${key}: ${value}`))
            }
        }
    }

    insert(key, value) {
        let index = this.hash(key)
        if (!this.buckets[index]) {
            this.buckets[index] = []
        }
        this.buckets[index].push([key, value])
    }

    getValue(key) {
        let index = this.hash(key)
        if (this.buckets[index]) {
            for (let i = 0; i < this.buckets[index].length; i++) {
                if (this.buckets[index][i][0] == key) {
                    return `Value: ${this.buckets[index][i][1]}, Key: ${key}`
                }
            }
        }
    }

    hasKey(key) {
        let index = this.hash(key)
        if (this.buckets[index]) {
            for (let i = 0; i < this.buckets[index].length; i++) {
                return 'True' ? this.buckets[index][i][0] == key : 'False'
            }
        }
    }

    removeKey(key) {
        let index = this.hash(key)
        if (this.buckets[index]) {
            for (let i = 0; i < this.buckets[index].length; i++) {
                if (this.buckets[index][i][0] == key) {
                    this.buckets[index].splice(i, 1)
                }
            }
        }
    }
}

let myMap = new HashMap()

myMap.insert(1, 'noodles')
myMap.insert(2, 'grapes')
myMap.insert(3, 'kiwis')

myMap.printAll()

// console.log(myMap.getValue(2))

// console.log(myMap.hasKey(1))

// console.log(myMap.hasKey(55))

myMap.removeKey(1)
myMap.removeKey(2)
myMap.removeKey(3)

myMap.printAll()


