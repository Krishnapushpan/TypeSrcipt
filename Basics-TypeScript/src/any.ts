//any type

let thing: any

thing = 1
thing = "das"

console.log(thing);

let title:any

title =  56
title = {
    firstName: "John",
    lastName: "Doe"
}
console.log(title);

// any type in arrays

let arr :any[] = ["hello", true, 45 ,null]
arr.push({
    id:90,
    name:"John"
})
console.log(arr);

//function and any

function add(a:any, b:any):any{
    return a + b
}
console.log(add("my age is ",21))
