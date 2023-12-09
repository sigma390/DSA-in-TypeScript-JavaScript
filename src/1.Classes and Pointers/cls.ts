


class Cookie{
    color:string = '';
    constructor(color:string){
        this.color = color
    }
    getcolor():string{
        return this.color;
    }
    setcolor(color:string):undefined{
        this.color = color;
    }
}

let cokkie1 = new Cookie("gREEN");

console.log(cokkie1.getcolor());//use of getter
cokkie1.setcolor("blue"); //use of setter
console.log(cokkie1.getcolor());//use of getter after setter