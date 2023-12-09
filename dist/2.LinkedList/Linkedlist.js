"use strict";
class Nodee {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedListt {
    constructor(val) {
        let newNode = new Nodee(val);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
}
let myLL = new LinkedListt(45);
console.log(myLL);
