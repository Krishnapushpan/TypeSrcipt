console.log("hello everyone !!! ")

//Type of variable
    let number =30
    let age: number = 50
    let firstName: String = 'manu'
    let isFictional: boolean

    age = 23
    firstName = 'anju'
    isFictional = true

// null $ undefined

    let num: null
    let num2:undefined

    num = null
    num2 = undefined

    console.log("num:"+num)
    console.log("num2:"+num2)

//arrays

    let names: string[] = ['anu','manu','anju','12']
    let tablenum: number[] = [23,45,78,63]

    let arrays: number [][] = [[1,2,3],[4,5,6]]
    console.log("arrays[0][0]:"+arrays[0][0]);
    
// array push

    names.push("das")
    console.log("names:"+names)

//type inference with arrays

    let fruits = ['apple','banana','cherry']
    fruits.push('Mango')
    console.log(fruits);
    
    let things = [1, true, 'man']
    const t = things[2];
    console.log(t);

//object literals

    let user: {firstname:string, age:number, id:number} = {
        firstname: 'aaa',
        age: 23,
        id: 1
    }

    console.log(user);

// type inference with object literals

    let person = {
        name: "abcd",
        age: 23
    }

    person.name = 'moon'
    console.log(person);