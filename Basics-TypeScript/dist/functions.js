"use strict";
//functions
function addTwonum(a, b) {
    return a + b;
}
let sum = addTwonum(2, 3);
console.log(sum);
function addAllnumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllnumbers([1, 2, 3, 4, 5]);
function displaystring(string1, string2) {
    // return `${string1} , ${string2}`;
    return string1 + "  " + string2;
}
const result = displaystring("Hello", "World");
console.log(result);
