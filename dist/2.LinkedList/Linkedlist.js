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
    //=========> unshift <================
    unshift(value) {
        const newNode = new Nodee(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //=================> Shift remove 1st node <=====================
    shift() {
        if (!this.head) {
            return undefined;
        }
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if (this.length == 0) {
            this.tail = null;
        }
        return temp;
    }
    //===================> Get method <=====================
    get(index) {
        if (index >= this.length || index < 0) {
            return undefined;
        }
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }
    //===================> set method <=======================
    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
    //===================> insert method <====================
    insert(index, val) {
        if (index == 0) {
            return this.unshift(val);
        }
        if (index === this.length) {
            this.push(val);
        }
        if (index < 0 || index > this.length) {
            return false;
        }
        const nN = new Nodee(val);
        const temp = this.get(index - 1);
        nN.next = temp.next;
        temp.next = nN;
        this.length++;
        return true;
    }
    //==================> Remove method <===================
    remove(index) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        const before = this.get(index - 1);
        const temp = before.next;
        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }
    //=====================> Reverse <======================
    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;
        for (let index = 0; index < this.length; index++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }
}
let myLL = new LinkedListt(45);
//push
myLL.push(46);
myLL.push(47);
myLL.push(48);
console.log(myLL);
//pop
myLL.pop();
console.log(myLL);
//unshift
myLL.unshift(66);
console.log(myLL);
//shift
myLL.shift();
console.log(myLL);
//get
console.log(myLL.get(2));
//set 
myLL.set(2, 777);
console.log(myLL);
//insert operation
myLL.insert(1, 78);
console.log(myLL);
//remove
myLL.remove(1);
console.log(myLL);
//reverse
myLL.reverse();
console.log(myLL);
