
class Nodee{
    val:number;
    next:Nodee| null;
    constructor(val:number){
        this.val = val;
        this.next = null;
    }
    
}


class LinkedListt{
    head: Nodee | null; // Specify that head can be null or a Nodee
    tail: Nodee | null; // Specify that tail can be null or a Nodee
    length: number;
    constructor(val:number){
        
        let newNode = new Nodee(val);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
}

let myLL = new LinkedListt(45);
console.log(myLL);