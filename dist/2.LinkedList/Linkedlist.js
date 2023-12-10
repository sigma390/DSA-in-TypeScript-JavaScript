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
    //============>   PUSH METHOD  <=================
    push(value) {
        const newNode = new Nodee(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    //===============> POP METHOD <===============
    pop() {
        //no item
        if (!this.head) {
            return undefined;
        }
        //for more items
        let temp = this.head;
        let pre = this.head;
        //iterate 
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        //for single item
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
}
let myLL = new LinkedListt(45);
console.log(myLL);
//push
myLL.push(46);
myLL.push(47);
myLL.push(48);
console.log(myLL);
myLL.pop();
console.log(myLL);
