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

    getValue(key) {
        let index = this.hash(key)
        if (this.buckets[index]) {
            for (let i = 0; i < this.buckets[index].length; i++) {
                if (this.buckets[index][i][0] == key) {
                    return `${key}: ${this.buckets[index][i][1]}`
                }
            }
        }
    }
}

let myMap = new HashMap()

myMap.insert(1, 'noodles')
myMap.insert(2, 'grapes')
myMap.insert(3, 'kiwis')

//myMap.printMap()

console.log(myMap.getValue(2))


