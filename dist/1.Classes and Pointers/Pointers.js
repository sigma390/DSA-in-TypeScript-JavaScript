"use strict";
let obj1 = {
    val: 12
};
let obj2 = obj1;
console.log(obj1.val);
console.log(obj2.val);
// after changing value
obj2.val = 45;
console.log(obj1.val);
