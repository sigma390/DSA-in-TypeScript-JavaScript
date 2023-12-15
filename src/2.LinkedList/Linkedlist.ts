
class Nodee{
    val:number;
    next:Nodee| null;
    constructor(val:number){
        this.val = val;
        this.next = null;
    }
    
}

class LinkedListt{
    head: Nodee | null ; // Specify that head can be null or a Nodee
    tail: Nodee | null; // Specify that tail can be null or a Nodee
    length: number;
    constructor(val:number){
        
        let newNode = new Nodee(val);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    //============>   PUSH METHOD  <=================

    push(value:number){
        const newNode = new Nodee(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            
        }
        else{
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return  this;

    }
    //===============> POP METHOD <===============
    pop(){
        //no item
        if (!this.head) {
            return undefined;
            
        }
        //for more items
        let temp:Nodee|null = this.head;
        let pre:Nodee|null = this.head;
        //iterate 
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail!.next  = null;
        this.length--;
        //for single item
        if (this.length=== 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    //unshift
    unshift(value:number){
        const newNode = new Nodee(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //Shift remove 1st node
    shift(){
        if (!this.head) {
            return undefined;
        }
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if (this.length==0) {
            this.tail = null;
        }
        return temp;
    }
    //Get method
    get(index:number){
        if (index>=this.length|| index<0) {
            return undefined;
        }
        let temp:any = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
            
        }
        return temp;
    }

    //set method
    set(index:number,value:number):boolean{
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
    //insert method

    insert(index:number,val:number){
        if (index==0) {
            return this.unshift(val);
        }

        if (index === this.length) {
            this.push(val);
        }
        if (index<0|| index>this.length) {
            return false;
        }
        const nN = new Nodee(val);
        const temp = this.get(index-1);
        nN.next = temp.next;
        temp.next = nN;
        this.length++;
        return true;
    }
    //Remove method
    remove(index:number){
        if (index<0||index>this.length) {
            return false;
        }
        if (index===0) {
            return this.shift();
        }
        if (index=== this.length-1) {
            return this.pop();
        }

        const before = this.get(index-1);
        const temp = before.next;
        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp
    }

    reverse(){
        let temp: any = this.head;
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
myLL.pop()
console.log(myLL);
//unshift
myLL.unshift(66);
console.log(myLL);

//shift
myLL.shift();
console.log(myLL)

//get
console.log(myLL.get(2));
//set 
myLL.set(2,777);
console.log(myLL);

//insert operation
myLL.insert(1,78);
console.log(myLL)

//remove
myLL.remove(1);
console.log(myLL);
//reverse
myLL.reverse();
console.log(myLL);