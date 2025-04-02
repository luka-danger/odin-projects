// Create Linked List Node (use for chaining to handle collisions)
export class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}