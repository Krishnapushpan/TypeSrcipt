//union types

let someId: number | string
 
someId = 1
someId = '2'

console.log(someId);

let email: string | null = null

email = 'john@gmail.com'
email = null

console.log(email);


type Id = number | string
let anotherId: Id

anotherId = 'mmm mmmm mmm'
anotherId = 5

console.log(anotherId);
