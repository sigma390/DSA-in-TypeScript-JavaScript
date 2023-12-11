
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