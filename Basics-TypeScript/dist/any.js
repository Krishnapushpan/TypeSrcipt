"use strict";
//any type
let thing;
thing = 1;
thing = "das";
console.log(thing);
let title;
title = 56;
title = {
    firstName: "John",
    lastName: "Doe"
};
console.log(title);
// any type in arrays
let arr = ["hello", true, 45, null];
arr.push({
    id: 90,
    name: "John"
});
console.log(arr);
//function and any
function add(a, b) {
    return a + b;
}
console.log(add("my age is ", 21));
