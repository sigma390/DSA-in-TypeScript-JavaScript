
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
    tail: Nodee ; // Specify that tail can be null or a Nodee
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
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return  this;

    }

}

let myLL = new LinkedListt(45);
//push
myLL.push(46);
console.log(myLL);