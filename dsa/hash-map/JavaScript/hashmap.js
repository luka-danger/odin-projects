import { Node } from "./new-node.js";

class HashMap{
    constructor(size = 16) {
        this.buckets = new Array(size)
        this.size = size;
    }

    hash(key) {
        let hashCode = 0;
        const primeNum = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNum * hashCode + key.charCodeAt(i);
        }
        return hashCode
    }

    printMap() {
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
}

let myMap = new HashMap()

myMap.insert(1, 'noodles')
myMap.insert(2, 'grapes')
myMap.insert(3, 'kiwis')

myMap.printMap()