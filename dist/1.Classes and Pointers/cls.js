"use strict";
class Cookie {
    constructor(color) {
        this.color = '';
        this.color = color;
    }
    getcolor() {
        return this.color;
    }
    setcolor(color) {
        this.color = color;
    }
}
let cokkie1 = new Cookie("gREEN");
console.log(cokkie1.getcolor()); //use of getter
cokkie1.setcolor("blue"); //use of setter
console.log(cokkie1.getcolor()); //use of getter after setter
