//functions

    function addTwonum(a:number, b:number): number{
        return a + b;

    }
let sum = addTwonum(2,3);
console.log(sum);

function addAllnumbers(items: number[]): void {
    const total = items.reduce((a,c) => a + c ,0)
    console.log(total)
    }
    addAllnumbers([1,2,3,4,5]);
function displaystring(string1:string, string2:string):string{
    // return `${string1} , ${string2}`;
    return string1 + "  " + string2;
}
const result = displaystring("Hello", "World");
console.log(result);