import { Node } from "./new-node";

class HashMap{
    constructor() {
        this.length = Array.length(16);
    }

    hash(key) {
        let hashCode = 0;
        const primeNum = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNum * hashCode + key.charCodeAt(i);
        }
        return hashCode
    }
}



 